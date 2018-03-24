'use strict'

const Sequelize = require('sequelize');
const db = require('../index.js');

const Feature = db.define('feature', {
   name: { type: Sequelize.STRING, primaryKey: true },
   description: { type: Sequelize.TEXT }

 });

 module.exports = Feature;
