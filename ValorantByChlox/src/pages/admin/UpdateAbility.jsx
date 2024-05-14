import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderAdmin from "../../components/headers/HeaderAdmin";
import { Link } from "react-router-dom";

function UpdateAbility() {
  const [abilitys, setAbilitys] = useState([]);
  const [message, setMessage] = useState(""); 
  const [selectedAbilityId, setSelectedAbilityId] = useState("");
  const [ability, setAbility] = useState({
    name: "",
    description: "",
    typeability: "",
    imageAbility: "",
  });

  const [error, setError] = useState("");

  useEffect(() => {
    const loadAbilitysData = async () => {
      try {
        const response = await axios.get("http://localhost:1804/ability/all");
        setAbilitys(response.data);
      } catch (err) {
        console.error("Failed to fetch abilities data", err);
        setError("Failed to fetch abilities data");
      }
    };

    loadAbilitysData();
  }, []);

  const handleSelectChange = (event) => {
    const selectedId = event.target.value;
    setSelectedAbilityId(selectedId);
    if (selectedId) {
      loadAbilityData(selectedId);
    } else {
      setAbility({
        name: "",
        description: "",
        typeability: "",
        imageAbility: "",
      });
    }
  };

  const loadAbilityData = async (id) => {
    try {
      const response = await axios.get(`http://localhost:1804/ability/${id}`);
      setAbility(response.data);
    } catch (err) {
      console.error("Failed to fetch ability data", err);
      setError("Failed to fetch ability data");
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (selectedAbilityId) {
      try {
        await axios.patch(
          `http://localhost:1804/ability/${selectedAbilityId}`,
          ability
        );
        setMessage("✔✔✔ Vous avez bien modifier l'abilité ! ✔✔✔");
        loadAbilitysData(); // Recharger les données des abilités
      } catch (err) {
        console.error("Error updating ability:", err);
        setMessage("Une erreur est survenue lors de la modification.");
      }
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setAbility(prevAbility => ({
      ...prevAbility,
      [name]: value,
    }));
  };

  return (
    <>
      <HeaderAdmin />
      <section className="Updatepage">
        <div className="divupd">
          <form className="UpdateForm" onSubmit={handleSubmit}>
          {message && <div className="messageCrud">{message}</div>}
            <h2 className="upWetitle">Selectionnez l'abilité à modifier :</h2>
            <select
              value={selectedAbilityId}
              className="prompt"
              onChange={handleSelectChange}
            >
              <option className="OptionCrud1" value="">
                Selectionnez l'abilité
              </option>
              {abilitys.map((ability) => (
                <option
                  className="OptionCrud"
                  key={ability._id}
                  value={ability._id}
                >
                  {ability.name}
                </option>
              ))}
            </select>
            <h5>Nom de l'abilité :</h5>
            <input
              type="text"
              className="prompt"
              name="name"
              value={ability.name}
              onChange={handleChange}
            />
            <h5>Type de l'abilité :</h5>
            <select
              className="prompt"
              name="typeability"
              value={ability.typeability}
              onChange={handleChange}
            >
              <option className="OptionCrud1" value="">
                Selectionnez le Type
              </option>
              <option className="OptionCrud" value="ULTI">
                ULTI
              </option>
              <option className="OptionCrud" value="ABILITE 1">
                Abilité 1
              </option>
              <option className="OptionCrud" value="ABILITE 2">
                Abilité 2
              </option>
              <option className="OptionCrud" value="ABILITE 3">
                Abilité 3
              </option>
            </select>
            <h5>Description de l'abilité :</h5>
            <textarea
              name="description"
              className="prompt"
              value={ability.description}
              onChange={handleChange}
            ></textarea>
            <h5>Adresse URL de l'image de l'abilité :</h5>
            <input
              type="text"
              className="prompt"
              name="imageAbility"
              value={ability.imageAbility}
              onChange={handleChange}
            />
            <div className="UpCrud">
              <button className="Submit2" type="submit">
                Modifier
              </button>
            </div>
          </form>
          <section className="imgButt">
            <img
              src="./src/assets/images/crud/Abilitétableau.jpg"
              alt="Image d'abilité"
              className="ImgUpdate"
            />
            <div className="linkothercrud">
              <Link to={"/creer"} className="linkCrud2">
                ¤ Créer une abilité
              </Link>
              <Link to={"/toutes-les-abilites"} className="linkCrud2">
                ¤ Voir toutes les abilitées
              </Link>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}

export default UpdateAbility;
