'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Hazard = db.define('hazard', {

   name: { type: Sequelize.STRING, primaryKey: true },
   description: { type: Sequelize.TEXT }

 });

 module.exports = Hazard;
