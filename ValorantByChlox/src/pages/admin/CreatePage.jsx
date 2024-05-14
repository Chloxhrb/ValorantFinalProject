import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/headers/HeaderAdmin";
import axios from "axios";

function CreatePage() {
  const [abilities, setAbilities] = useState([]);
  const [messageWeapon, setMessageWeapon] = useState("");
  const [messageAgent, setMessageAgent] = useState("");
  const [messageAbilite, setMessageAbilite] = useState("");

  useEffect(() => {
    const fetchAbilities = async () => {
      try {
        const response = await axios.get("http://localhost:1804/ability/all");
        setAbilities(response.data);
      } catch (error) {
        alert("Erreur lors du chargement des capacités");
      }
    };
    fetchAbilities();
  }, []);

  // Fonction pour gérer la soumission du formulaire d'armes
  const handleCreateWeapon = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const weaponData = Object.fromEntries(formData);
    try {
      await axios.post("http://localhost:1804/weapon/createweapon", weaponData);
      setMessageWeapon("✔✔✔ Arme créée avec succès ✔✔✔");
    } catch (error) {
      alert("Erreur lors de la création de l'arme");
    }
  };

  // Fonction pour gérer la soumission du formulaire de capacités
  const handleCreateAbility = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const abilityData = Object.fromEntries(formData);
    try {
      await axios.post(
        "http://localhost:1804/ability/createability",
        abilityData
      );
      setMessageAbilite("✔✔✔ Capacité créée avec succès ✔✔✔");
    } catch (error) {
      alert("Erreur lors de la création de la capacité");
    }
  };

  // Fonction pour gérer la soumission du formulaire d'agents
  const handleCreateAgent = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const agentData = Object.fromEntries(formData);
    // Ajout des IDs des capacités sélectionnées
    agentData.abilite = [
      formData.get("abilite1"),
      formData.get("abilite2"),
      formData.get("abilite3"),
      formData.get("abilite4"),
    ];
    try {
      const response = await axios.post("http://localhost:1804/agent/createagent", agentData);
      if (response.status === 200 || response.status === 201) {
        setMessageAgent("✔✔✔ Agent créé avec succès ✔✔✔");
      } else {
        console.error("Réponse inattendue du serveur:", response);
        alert("Réponse inattendue du serveur, voir la console pour les détails");
      }
    } catch (error) {
      console.error("Erreur lors de la création de l'agent:", error);
      alert("Erreur lors de la création de l'agent, voir la console pour les détails");
    }
  };
  return (
    <>
      <HeaderAdmin />
      <section className="CreateObject">
        <section className="AncreForm">
          <div className="DivAncre">
            <a className="Ancre" href="#createWeaponForm">
              ARME
            </a>
          </div>
          <div className="DivAncre">
            <a className="Ancre" href="#createAbilityForm">
              ABILITE
            </a>
          </div>
          <div className="DivAncre">
            <a className="Ancre" href="#createAgentForm">
              AGENT
            </a>
          </div>
        </section>
        <section className="CreateCard" id="createWeaponForm">
          <div className="Object">
            <h3 className="TitleForm"> CREER UNE ARMES </h3>
          </div>
          <div className="ObjectForm">
            <form className="formCreate" onSubmit={handleCreateWeapon}>
              <div className="Inputform">
                <h5>Nom de l'arme :</h5>
                <input className="prompt" type="text" name="name" required />
              </div>
              <div className="Inputform">
                <h5>Type de l'arme : </h5>
                <input
                  className="prompt"
                  type="text"
                  name="weaponType"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Classe de l'arme :</h5>
                <input
                  className="prompt"
                  type="text"
                  name="weaponClass"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Description de l'arme</h5>
                <textarea
                  className="prompt"
                  name="weaponDescription"
                  required
                ></textarea>
              </div>
              <div className="Inputform">
                <h5>Coût de l'arme : </h5>
                <input
                  className="prompt"
                  type="number"
                  name="weaponCost"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Adresse de l'image :</h5>
                <input
                  className="prompt"
                  type="text"
                  name="weaponImage"
                  required
                />
              </div>
              <button className="Submit2" type="submit">
                CREER L'ARME
              </button>
            </form>
            {messageWeapon && (
              <div className="messageCrud">{messageWeapon}</div>
            )}
          </div>
        </section>
        <section className="CreateCard" id="createAbilityForm">
          <div className="Object">
            <h3 className="TitleForm"> CREER UNE ABILITÉS </h3>
          </div>
          <div className="ObjectForm">
            <form className="formCreate" onSubmit={handleCreateAbility}>
              <div className="Inputform">
                <h5>Nom de l'abilité : </h5>
                <input className="prompt" type="text" name="name" required />
              </div>
              <div className="Inputform">
                <h5>Description de l'abilité</h5>
                <textarea
                  className="prompt"
                  name="description"
                  required
                ></textarea>
              </div>
              <div className="Inputform">
                <h5>Type de la capacité : </h5>
                <input className="prompt" type="text" name="typeability" />
              </div>
              <div className="Inputform">
                <h5>Adresse du logo de l'abilité : </h5>
                <input
                  className="prompt"
                  type="text"
                  name="imageAbility"
                  required
                />
              </div>
              <button className="Submit2" type="submit">
                CREER L'ABILITE
              </button>
            </form>
            {messageAbilite && (
              <div className="messageCrud">{messageAbilite}</div>
            )}
          </div>
        </section>
        <section className="CreateCard" id="createAgentForm">
          <div className="Object">
            <h3 className="TitleForm"> CREER UN AGENTS </h3>
          </div>
          <div className="ObjectForm">
            <form className="formCreate" onSubmit={handleCreateAgent}>
              <div className="Inputform">
                <h5>Nom de l'agent :</h5>
                <input
                  className="prompt"
                  type="text"
                  name="nomAgent"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Rôle de l'agent :</h5>
                <input
                  className="prompt"
                  type="text"
                  name="roleAgent"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Description de l'Agent : </h5>
                <textarea
                  className="prompt"
                  name="descriptionAgent"
                  required
                ></textarea>
              </div>
              {Array.from({ length: 4 }).map((_, index) => (
                <div className="Inputform" key={index}>
                  <h5>Capacité {index + 1} :</h5>
                  <select
                    className="prompt"
                    name={`abilite${index + 1}`}
                    required
                  >
                    <option className="OptionCrud1" value="">Sélectionner une capacité</option>
                    {abilities.map((ability) => (
                      <option className="OptionCrud" key={ability._id} value={ability._id}>
                        {ability.name}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
              <div className="Inputform">
                <h5>Adresse de l'image de l'agent : </h5>
                <input
                  className="prompt"
                  type="text"
                  name="imageAgent"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Adresse de l'image de profil de l'agent :</h5>
                <input
                  className="prompt"
                  type="text"
                  name="profilpicture"
                  required
                />
              </div>
              <div className="Inputform">
                <h5>Nom de l'ultime de l'agent : </h5>
                <input className="prompt" type="text" name="nomUlt" required />
              </div>
              <div className="Inputform">
                <h5>Adresse de la vidéo de l'ultime : </h5>
                <input
                  className="prompt"
                  type="text"
                  name="ultVideo"
                  required
                />
              </div>
              <button className="Submit2" type="submit">
                CREER L'AGENT
              </button>
              {messageAgent && <div className="messageCrud">{messageAgent}</div>}
            </form>
           
          </div>
        </section>
      </section>
    </>
  );
}

export default CreatePage;
