"use strict";

const Feature = require("./feature");
const Marker = require("./marker");
const Hike = require("./hike");

Marker.hasOne(Feature);
Hike.hasMany(Feature);

module.exports = {Feature, Marker, Hike};
