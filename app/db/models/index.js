"use strict";

const Feature = require("./feature");
const Marker = require("./marker");
const Hike = require("./hike");

Marker.hasOne(Feature);
Marker.hasOne(Hike);

module.exports = {Feature, Marker, Hike};
