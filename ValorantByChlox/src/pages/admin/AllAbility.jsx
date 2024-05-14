import HeaderAdmin from "../../components/headers/HeaderAdmin.jsx";
import axios from "axios";
import React, { useState, useEffect } from "react";

function AllAbility() {
  const [abilitys, setAbilitys] = useState([]);

  useEffect(() => {
    fetchAbilitys();
  }, []);

  // Fonction pour récupérer les abilités
  const fetchAbilitys = async () => {
    try {
      const token = localStorage.getItem("token");
      const response = await axios.get("http://localhost:1804/ability/all", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAbilitys(response.data);
    } catch (error) {
      console.error("Error fetching ability", error);
    }
  };

  const DeleteAbility = async (abilityId) => {
    try {
      const token = localStorage.getItem("token");
      await axios.delete(`http://localhost:1804/ability/delete/${abilityId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      // Rafraîchir la liste des armes après la suppression
      fetchAbilitys();
    } catch (error) {
      console.error("Error deleting ability", error);
    }
  };
  return (
    <>
      <HeaderAdmin />
      <section className="AllAbility">
        {abilitys.map((ability) => (
          <div className="AbilityCard" key={ability._id}>
            <div className="AbilityPic">
              <img
                className="abilityIcon"
                src={ability.imageAbility}
                alt={`Image of ${ability.name}`}
              />
            </div>
            <div className="AbilityInfo">
              <h3 className="AbilityName">{ability.name}</h3>
              <h5 className="AbilityType">{ability.typeability}</h5>
              <p className="AbilityDescription">{ability.description}</p>
            </div>
            <div className="suppAbility">
              <button
                className="deleteModifierCrud2"
                onClick={() => DeleteAbility(ability._id)}
              >
                X
              </button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default AllAbility;
