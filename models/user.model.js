const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    _id : mongoose.Schema.Types.ObjectId,
    firstname : String, 
    lastname : String, 
    email : String, 
    password : String, 
  
  
  })
  
  const userModel = mongoose.model("User", userSchema)

module.exports = userModel