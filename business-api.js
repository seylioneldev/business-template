const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const axios = require("axios");
const cors = require("cors");
const Joi = require("joi");
const bcrypt = require("bcrypt");
const genAuthToken = require("./utils/genAuthToken");
const userModel = require("./models/user.model");
const server = express();
const jwt = require("jsonwebtoken");

mongoose.connect("mongodb://127.0.0.1:27017/business-template");

server.use(morgan("dev"));
server.use(cors());
server.use(express.json());
server.listen(4000);

// userModel.find()
// .exec()
// .then(users=>console.log(users))

// server.get("/", (requete, reponse) => {
//   console.log("get Works Fine !");
//   reponse.end("accueil");
// });

// server.get("/", (requete, reponse) => {
//   userModel.find()
//     .exec()
//     .then(users => {
//       reponse.json(users); // Envoyer les données au format JSON
//     })
//     .catch(err => {
//       reponse.status(500).json({ error: err });
//     });
// });

server.post("/register", async (requete, reponse) => {
  console.log("Requête reçue:", requete.body);
  if (!requete.body || !requete.body.firstname || !requete.body.lastname) {
    return reponse.status(400).json({ message: "Données manquantes" });
  }
  bcrypt.hash(requete.body.password, 10).then((hashedPassword) => {
    const newUser = new userModel({
      _id: new mongoose.Types.ObjectId(),
      firstname: requete.body.firstname,
      lastname: requete.body.lastname,
      email: requete.body.email,
      password: hashedPassword, // Attention : stocker les mots de passe en clair est une mauvaise pratique !
    });
    newUser
      .save()
      .then((user) => {
        reponse.status(201).json(user);
      })
      .catch((err) => {
        reponse.status(500).json({ error: err });
      });
  });
});

server.post("/login", (requete, response) => {
  userModel
    .findOne({ email: requete.body.email })

    .then()
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    })
    .then((user) => {
      bcrypt
        .compare(requete.body.password, user.password)
        .then((passwordCheck) => {
          console.log("Works Fine !", passwordCheck);
          if (!passwordCheck) {
            return response.status(400).send({
              message: "Passwords does not match",
              error,
            });
          }
          const token = jwt.sign(
            {
              userId: user._id,
              userEmail: user.email,
            },
            "RANDOM-TOKEN",
            { expiresIn: "24h" }
          );
          response.status(200).send({
            message: "Login Successful",
            email: user.email,
            token,
          });
        })

        .catch((error) => {
          response.status(400).send({
            message: "Passwords does not match",
            error,
          });
        });
    })
    .catch((e) => {
      response.status(404).send({
        message: "Email not found",
        e,
      });
    });
});
