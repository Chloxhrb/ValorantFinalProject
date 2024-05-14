const mongoose = require('mongoose');
const userSchema = new mongoose.Schema ({
    userName : String ,
    userEmail : String ,
    password : String ,
    userRank : String ,
    isAdmin: {type: Boolean, default: false},
    
})

module.exports = mongoose.model ("User", userSchema)