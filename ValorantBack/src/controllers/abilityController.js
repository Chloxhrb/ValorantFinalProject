const Ability = require("../models/abilityModel");

// Création d'une nouvelle abilité
const CreateAbility = async (req, res) => {
  try {
    const { name, description, typeability, imageAbility } = req.body;
    const ability = new Ability({
      name,
      description,
      typeability,
      imageAbility,
    });
    await ability.save();
    res.status(201).send("créée avec succès");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Mise à jour partielle d'une abilité
const UpdateAbility = async (req, res) => {
  const { id } = req.params;
  const updateData = req.body;

  try {
    const ability = await Ability.findById(id);

    if (!ability) {
      return res.status(404).json({ error: "Abilité pas trouvée" });
    }

    // Mettre à jour uniquement les champs fournis dans la requête
    Object.keys(updateData).forEach((key) => {
      if (updateData[key] !== undefined && ability[key] !== undefined) {
        ability[key] = updateData[key];
      }
    });

    await ability.save();

    res.status(200).json({ message: "Abilité mise à jour avec succès", ability });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Suppression d'une abilité
const DeleteAbility = async (req, res) => {
  try {
    const abilityId = req.params.id;
    const deleteAbility = await Ability.findByIdAndDelete(abilityId);

    if (!deleteAbility) {
      return res.status(404).send("Abilité pas trouvée");
    }
    res.status(200).send("Abilité supprimée avec succès");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

// Récupération de toutes les abilités
const getallability = async (req, res) => {
  try {
    const abilitys = await Ability.find();
    res.json(abilitys);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateAbility, UpdateAbility, DeleteAbility, getallability };
