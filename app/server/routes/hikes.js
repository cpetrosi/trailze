/**
  The queries that have to do with the Marker table are defined here.
**/

const db = require("../../db"); // eslint-disable-line no-unused-vars
const Form = require("../../db/models/hike");

const router = require("express").Router();

router.get("/all", function(req, res, next) {
    Hike.findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
