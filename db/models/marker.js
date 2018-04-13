'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Marker = db.define('marker', {
   id: { type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true },
   lat: { type: Sequelize.FLOAT },
   long: { type: Sequelize.FLOAT }
 });

 module.exports = Marker;
