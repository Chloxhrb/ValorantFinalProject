import axios from "axios";
import React, { useState, useEffect } from "react";
import HeaderAdmin from "../../components/headers/HeaderAdmin";

function AgentPageAdmin() {
  const [agents, setAgents] = useState([]);
  const [selectedAgentImage, setSelectedAgentImage] = useState(null);
  const [selectedAgentDescription, setSelectedAgentDescription] =
    useState(null);
  const [selectedNomAgent, setSelectedNomAgent] = useState(null);
  const [selectedAgentRole, setSelectedAgentRole] = useState(null);
  const [selectedUltName, setSelectedUltName] = useState(null);
  const [selectedUltVideo, setSelectedUltVideo] = useState(null);
  const [selectedAgentAbilities, setSelectedAgentAbilities] = useState(null); // Renommé pour clarifier son usage

  useEffect(() => {
    const fetchAgents = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get("http://localhost:1804/agent/all", {
          headers: { Authorization: `Bearer ${token}` },
        });
        setAgents(response.data);
      } catch (error) {
        console.error("Error fetching agents", error);
      }
    };
    fetchAgents();
  }, []);

  const handleProfilPictureClick = (agent) => {
    setSelectedAgentImage(agent.imageAgent);
    setSelectedAgentDescription(agent.descriptionAgent);
    setSelectedNomAgent(agent.nomAgent);
    setSelectedAgentRole(agent.roleAgent);
    setSelectedUltName(agent.nomUlt);
    setSelectedUltVideo(agent.ultVideo);
    setSelectedAgentAbilities(agent.abilite); // Supposant que `abilite` est une propriété de l'agent contenant ses capacités
  };

  return (
    <>
      <section className="AgentPage">
        <HeaderAdmin />
        <section className="Agent-profil">
          <section className="allAgents">
            {agents.map((agent) => (
              <div className="ListAgent" key={agent._id}>
                <img
                  className="agentprofil"
                  src={agent.profilpicture}
                  alt={`Image of ${agent.nomAgent}`}
                  onClick={() => handleProfilPictureClick(agent)}
                />
              </div>
            ))}
          </section>
          <div className="AgentPresentation">
            {selectedAgentDescription && (
              <div>
                <div className="descriptionContainer">
                  <div className="NomRole">
                    <p className="AgentName">{selectedNomAgent}</p>
                    <p className="AgentRole">{selectedAgentRole}</p>
                  </div>
                  <p className="Agentdescription">{selectedAgentDescription}</p>
                </div>
                <section className="abilityUlt">
                  <section className="abilityContainer">
                    {selectedAgentAbilities &&
                      selectedAgentAbilities.map((ability) => (
                        <div className="abilityCard" key={ability._id}>
                          <div className="abilitypicture">
                            <img
                              className="AbilityLogo"
                              src={ability.imageAbility}
                              alt={`Image of ${ability.name}`}
                            />
                          </div>
                          <div className="abilitydescription">
                            <h4 className="abilityName">{ability.name}</h4>
                            <p className="abilityDescription">
                              {ability.description}
                            </p>
                          </div>
                        </div>
                      ))}
                  </section>
                  <section className="ultcard">
                    <section className="UltiName">
                      <h5 className="Ultname">{selectedUltName}</h5>
                    </section>
                    <section className="UltiVideo">
                      <video
                        src={selectedUltVideo}
                        className="VideoOfUlt"
                        alt={`Video of ${agents.ultVideo}`}
                        autoPlay={true}
                        muted
                        loop
                      />
                    </section>
                  </section>
                </section>
              </div>
            )}
          </div>
          {selectedAgentImage && (
            <div className="AgentPicture">
              <img
                className="photoAgent"
                src={selectedAgentImage}
                alt={`Image of ${selectedNomAgent}`}
              />
            </div>
          )}
        </section>
      </section>
    </>
  );
}

export default AgentPageAdmin;