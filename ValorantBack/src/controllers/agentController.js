const Agent = require("../models/agentModel");
const Ability = require("../models/abilityModel");

const CreateAgent = async (req, res) => {
  try {
    const {
      nomAgent,
      roleAgent,
      descriptionAgent,
      abilite,
      imageAgent,
      profilpicture,
      nomUlt,
      ultVideo,
    } = req.body;

    const agent = new Agent({
      nomAgent,
      roleAgent,
      descriptionAgent,
      profilpicture,
      abilite,
      imageAgent,
      nomUlt,
      ultVideo,
    });
    await agent.save();
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const UpdateAgent = async (req, res) => {
  try {
    const {
      nomAgent,
      roleAgent,
      descriptionAgent,
      abilite,
      imageAgent,
      profilpicture,
      nomUlt,
      ultVideo,
    } = req.body;

    const agentId = req.params.id;

    let agent = await Agent.findById(agentId);

    if (!agent) {
      return res.status(404).json({ error: "Agent not found" });
    }

    agent.nomAgent = nomAgent;
    agent.roleAgent = roleAgent;
    agent.descriptionAgent = descriptionAgent;
    agent.abilite = abilite;
    agent.imageAgent = imageAgent;
    agent.profilpicture = profilpicture;
    agent.nomUlt = nomUlt;
    agent.ultVideo = ultVideo;

    await agent.save();

    res.status(200).json({ message: "Agent updated successfully", agent });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const DeleteAgent = async (req, res) => {
  try {
    const agentId = req.params.id;
    const deleteAgent = await Agent.findByIdAndDelete(agentId);

    if (!deleteAgent) {
      return res.status(404).send("Agent not found");
  }
  res.status(200).send("Agent successfully deleted");
}catch (error){
  res.status(500).send(error.message);
}
};

const getallagents = async (req, res) => {
  try {
    const agents = await Agent.find().populate("abilite");
    res.json(agents);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateAgent, UpdateAgent, DeleteAgent, getallagents };
