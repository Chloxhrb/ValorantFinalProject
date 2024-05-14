const Weapon = require("../models/weaponModel");


const CreateWeapon = async (req, res) => {
  try {
    const {
      name,
      weaponType,
      weaponClass,
      weaponDescription,
      weaponCost,
      weaponImage,
    } = req.body;
    const weapon = new Weapon({
      name,
      weaponType,
      weaponDescription,
      weaponClass,
      weaponCost,
      weaponImage,
    });
    await weapon.save();
    res.status(201).send("create sucess");
  } catch (error) {
    res.status(500).send(error.message);
  }
};

const UpdateWeapon = async (req, res) => {
  try {
    const {
      name,
      weaponType,
      weaponClass,
      weaponDescription,
      weaponCost,
      weaponImage,
    } = req.body;
    const weaponId = req.params.id;

    let weapon = await Weapon.findById(weaponId);

    if (!weapon) {
      return res.status(404).json({ error: "Arme non trouvée" });
    }

    weapon.name = name;
    weapon.weaponType = weaponType;
    weapon.weaponDescription = weaponDescription;
    weapon.weaponClass = weaponClass;
    weapon.weaponCost = weaponCost;
    weapon.weaponImage = weaponImage;

    await weapon.save();

    res.status(200).json({ message: "Arme mise a jour avec succes", weapon });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


const DeleteWeapon = async (req, res) => {
  try {
    const weaponId = req.params.id;
    const deletedWeapon = await Weapon.findByIdAndDelete(weaponId);

    if (!deletedWeapon) {
      return res.status(404).send("Weapon not found");
    }

    res.status(200).send("Weapon successfully deleted");
  } catch (error) {
    res.status(500).send(error.message);
  }
};


const getallweapons = async (req, res) => {
  try {
    const weapons = await Weapon.find();
    res.json(weapons);
  } catch (error) {
    res.status(500).send(error.message);
  }
};

module.exports = { CreateWeapon, DeleteWeapon, UpdateWeapon, getallweapons };
