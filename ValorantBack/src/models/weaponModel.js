const mongoose = require('mongoose'); 
const weaponSchema = new mongoose.Schema ({
 name : String,
 weaponType: String,
 weaponClass: String,
 weaponDescription: String,
 weaponCost : Number,
 weaponImage: String,
})

module.exports = mongoose.model ("Weapon", weaponSchema)