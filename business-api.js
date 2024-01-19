const express = require("express");
const morgan = require("morgan")
const mongoose = require('mongoose')
const axios = require("axios")
const cors = require('cors');



mongoose.connect("mongodb://127.0.0.1:27017/business-template");

const userSchema = mongoose.Schema({
  _id : mongoose.Schema.Types.ObjectId,
  firstname : String, 
  lastname : String, 
  email : String, 
  password : String, 


})

const userModel = mongoose.model("User", userSchema)

userModel.find()
.exec()
.then(users=>console.log(users))


const server = express();

server.use(morgan("dev"))
server.use(cors())


server.listen(4000);

server.get("/", (requete, reponse) => {
  console.log('get Works Fine !');
  reponse.end("accueil");
});

server.get("/users", (requete, reponse) => {
  userModel.find()
    .exec()
    .then(users => {
      reponse.json(users); // Envoyer les données au format JSON
    })
    .catch(err => {
      reponse.status(500).json({ error: err });
    });
});



