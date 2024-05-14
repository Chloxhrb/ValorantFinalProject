import React, { useState, useEffect } from "react";
import axios from "axios";
import HeaderUserConnected from "../../components/headers/HeaderUserConnected";

function WeaponsPageUser() {
  const [weapons, setWeapons] = useState([]);

  useEffect(() => {
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

    fetchWeapons();
  }, []);

  return (
    <>
      <section className="ArmePage">
        <HeaderUserConnected />
        <section className="WeaponSection">
          <div className="Titlediv">
            <h2 className="IntroWeapon">
              Entrez dans l'arsenal de Valorant, un univers où chaque arme est
              un symbole de force et d'intrigue. Explorez les descriptions
              détaillées de ces instruments de guerre, révélant leur histoire et
              leurs nuances. Préparez-vous à maîtriser ces outils mortels et à
              défier vos adversaires avec habileté sur le champ de bataille de
              Valorant.
            </h2>
          </div>
          <div className="Allweapons">
            {weapons.map((weapon) => (
              <div className="card-weapon" key={weapon._id}>
                <div className="weaponImage">
                  <img
                    className="weaponpicture"
                    src={weapon.weaponImage}
                    alt={`Image of ${weapon.weaponName}`}
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
            ))}
          </div>
        </section>
      </section>
    </>
  );
}

export default WeaponsPageUser;
