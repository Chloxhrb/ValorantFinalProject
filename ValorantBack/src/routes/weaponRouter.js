const express = require('express');
const router = express.Router() 
const { CreateWeapon, getallweapons, DeleteWeapon, UpdateWeapon} = require('../controllers/weaponController')

router.post ("/createweapon", CreateWeapon)
router.get ("/all", getallweapons)
router.delete("/:id", DeleteWeapon);
router.put("/:id", UpdateWeapon);


module.exports = router 