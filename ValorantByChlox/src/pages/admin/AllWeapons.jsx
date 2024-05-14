import HeaderAdmin from "../../components/headers/HeaderAdmin";
import React, { useState, useEffect } from "react";
import axios from "axios";

function AllWeapons() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
    fetchWeapons();
  }, []);

  // Fonction pour récupérer les armes
  const fetchWeapons = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:1804/weapon/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setWeapons(response.data);
    } catch (error) {
      console.error("Error fetching weapons", error);
    }
  };

  // Fonction pour supprimer une arme
  const deleteWeapon = async (weaponId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:1804/weapon/${weaponId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Rafraîchir la liste des armes après la suppression
      fetchWeapons();
    } catch (error) {
      console.error("Error deleting weapon", error);
    }
  };

  return (
    <>
      <HeaderAdmin />
      <section className="WeaponSection">
        <div className="Allweapons2">
          {weapons.map((weapon) => (
            <div className="card-weaponCrud" key={weapon._id}>
              <div className="card-weapon1">
                <div className="weaponImage">
                  <img
                    className="weaponpicture"
                    src={weapon.weaponImage}
                    alt={`Image of ${weapon.name}`}
                  />
                </div>
                <div className="WeaponInfo">
                  <h3 className="weaponTitle">{weapon.name}</h3>
                  <h4 className="weaponClass">{weapon.weaponClass}</h4>
                  <p className="weaponType">{weapon.weaponType}</p>
                  <h6 className="weaponCost">Prix : {weapon.weaponCost} ¤</h6>
                  <p className="weaponDescription">
                    {weapon.weaponDescription}
                  </p>
                </div>
              </div>
              <div className="suppWeapon">
                <button
                  className="deleteModifierCrud2"
                  onClick={() => deleteWeapon(weapon._id)}
                >
                  X
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default AllWeapons;
