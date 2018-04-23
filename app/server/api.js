/**
  This file defines the routes that lead to each of the files.
**/

const api = module.exports = require("express").Router();
const markers = require("./markers");
const hikes = require("./hikes");

api
    .get("/express-test", (req, res) => res.send({express: "working!"})) //demo route to prove api is working
    .use("/markers", markers)
    .use("/hikes", hikes);

// No routes matched? 404.
api.use((req, res) => res.status(404).end());
