const express = require("express");
const router = express.Router();
const {
  CreateAbility,
  getallability,
  DeleteAbility,
  UpdateAbility,
} = require("../controllers/abilityController");

router.post("/createability", CreateAbility);
router.delete("/delete/:id", DeleteAbility);
router.get("/all", getallability);
// router.put("/:id", UpdateAbility)
router.patch("/:id", UpdateAbility); // Utilisation de PATCH pour la mise à jour partielle


module.exports = router;
