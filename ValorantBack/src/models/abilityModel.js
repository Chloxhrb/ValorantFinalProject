const mongoose = require('mongoose'); 
const abilitySchema = new mongoose.Schema ({
 name : String,
 description: String,
 typeability : String,
 imageAbility : String,
})

module.exports = mongoose.model ("Ability", abilitySchema)