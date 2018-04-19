/**
  The queries that have to do with the Marker table are defined here.
**/

const db = require("../../db"); // eslint-disable-line no-unused-vars
const Form = require("../../db/models/marker");

const router = require("express").Router();

router.put("/add", function(req, res, next) {
    Marker.findOrCreate({
        where: {
          lat:  req.query.lat,
          long:  req.query.long,
          feature_id:  req.query.f_id,
          hike_id: req.query.hike_id
        }
    })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.get("/all", function(req, res, next) {
    Marker.findAll()
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

router.get("/hike", function(req, res, next) {
    Marker.findAll({
       where: {
          hike_id: req.query.hike_id
        }
      })
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
