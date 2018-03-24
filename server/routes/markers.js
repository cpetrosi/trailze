/**
  The queries that have to do with the Marker table are defined here.
**/

const db = require("../../db"); // eslint-disable-line no-unused-vars
const Form = require("../../db/models/marker");

const router = require("express").Router();

router.get("/add", function(req, res, next) {
    Marker.findOrCreate({
        where: {
          lat:  req.query.lat
          long:  req.query.long
          feature_id:  req.query.f_id
        }
    })
    // add to hike
    .then(result => {
        res.status(200).send(result);
    })
    .catch(next);
});

module.exports = router;
