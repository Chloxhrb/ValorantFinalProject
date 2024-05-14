import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/headers/HeaderAdmin";
import axios from "axios";
import { Link } from "react-router-dom";

function UpdateWeapon() {
  const [weapons, setWeapons] = useState([]); // Liste de toutes les armes
  const [selectedWeaponId, setSelectedWeaponId] = useState(""); // ID de l'arme sélectionnée
  const [weapon, setWeapon] = useState({
    // Arme actuellement sélectionnée pour la modification
    name: "",
    weaponType: "",
    weaponClass: "",
    weaponDescription: "",
    weaponCost: 0,
    weaponImage: "",
  });
  const [error, setError] = useState("");

  // Chargement initial des données de toutes les armes
  const loadWeaponsData = async () => {
    try {
      const response = await axios.get("http://localhost:1804/weapon/all");
      setWeapons(response.data);
    } catch (err) {
      console.error("Failed to fetch weapons data", err);
      setError("Failed to fetch weapons data");
    }
  };

  useEffect(() => {
    loadWeaponsData();
  }, []);

  // Chargement des données d'une arme spécifique pour la modifier
  const loadWeaponData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:1804/weapon/${id}`);
      console.log("Data loaded for weapon ID:", id, response.data);
      setWeapon(response.data);
    } catch (err) {
      console.error("Failed to fetch weapon data", err);
      setError("Failed to fetch weapon data");
    }
  };

  // Gestion de la sélection d'une arme dans la liste déroulante
  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedWeaponId(selectedId);
    if (selectedId) {
      loadWeaponData(selectedId);
    } else {
      // Réinitialiser les champs si l'utilisateur sélectionne "Select a weapon"
      setWeapon({
        name: "",
        weaponType: "",
        weaponClass: "",
        weaponDescription: "",
        weaponCost: 0,
        weaponImage: "",
      });
    }
  };

  // Gère la soumission du formulaire
  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedWeaponId) {
      try {
        await axios.put(
          `http://localhost:1804/weapon/${selectedWeaponId}`,
          weapon
        );
        alert("Weapon updated successfully!");
      } catch (err) {
        console.error("Failed to update weapon", err);
        setError("Failed to update weapon");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setWeapon((prevWeapon) => ({
      ...prevWeapon,
      [name]: value,
    }));
  };
  return (
    <>
      <section className="Updatepage">
        <HeaderAdmin />
        <div className="divupd">
          <form className="UpdateForm" onSubmit={handleSubmit}>
            <h2 className="upWetitle">Selectionnez l'arme à modifier : </h2>
            <select
              value={selectedWeaponId}
              className="prompt"
              onChange={handleSelectChange}
            >
              <option className="OptionCrud1" value="">Selectionnez l'arme</option>
              {weapons.map((weapon) => (
                <option className="OptionCrud" key={weapon._id} value={weapon._id}>
                  {weapon.name}
                </option>
              ))}
            </select>
            <h5>Nom de l'arme : </h5>
            <input
              type="text"
              className="prompt"
              name="name"
              value={weapon.name}
              onChange={handleChange}
            />
            <h5>Type de l'arme : </h5>
            <select
              className="prompt"
              name="weaponType"
              value={weapon.weaponType}
              onChange={handleChange}
            >
              <option className="OptionCrud1" value="">Selectionnez le Type</option>
              <option className="OptionCrud" value="Auto">Auto</option>
              <option className="OptionCrud" value="Semi-Auto">Semi-Auto</option>
            </select>
            <h5>Classe de l'arme : </h5>
            <select
              className="prompt"
              name="weaponClass"
              value={weapon.weaponClass}
              onChange={handleChange}
            >
              <option className="OptionCrud1" value="">Selectionnez la Classe</option>
              <option className="OptionCrud" value="PM">PM</option>
              <option className="OptionCrud" value="ARME DE POING">Arme de Poing</option>
              <option className="OptionCrud" value="FUSILS A POMPE">Fusils à Pompe</option>
              <option className="OptionCrud" value="FUSILS">Fusils</option>
              <option className="OptionCrud" value="SNIPERS">Snipers</option>
              <option className="OptionCrud" value="MITRAILLEUSES">Mitrailleuses</option>
              <option className="OptionCrud" value="MÊLEE">Mêlée</option>
            </select>
            <h5>Prix de l'arme : </h5>
            <input
              type="number"
              className="prompt"
              name="weaponCost"
              value={weapon.weaponCost}
              onChange={handleChange}
            />
            <h5>description de l'arme : </h5>
            <textarea
              name="weaponDescription"
              className="prompt"
              value={weapon.weaponDescription}
              onChange={handleChange}
            ></textarea>
            <h5>Adresse URL de l'image de l'arme : </h5>
            <input
              type="text"
              className="prompt"
              name="weaponImage"
              value={weapon.weaponImage}
              onChange={handleChange}
            />
            <div className="UpCrud">
            <button className="Submit2" type="submit">
              Modifier
            </button>
            </div>
          </form>
          <section className="imgButt">
            <img src="./src/assets/images/crud/armesBundle.png" alt="Image bundle skin d'arme protocole" className="ImgUpdate" />
            <div className="linkothercrud">
            <Link to={"/creer"} className="linkCrud2">
            ¤ Créer une arme
            </Link>
            <Link to={"/toute-les-armes"} className="linkCrud2">
              ¤ Voir toutes les Armes
            </Link>

            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default UpdateWeapon;
