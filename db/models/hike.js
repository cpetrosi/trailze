'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Hike = db.define('hike', {
   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   name: { type: Sequelize.STRING },
   average_rating: { type: Sequelize.INTEGER },
   num_of_raters: { type: Sequelize.INTEGER },
   lat: { type: Sequelize.FLOAT },
   long: { type: Sequelize.FLOAT }
 });

 module.exports = Marker;
