'use strict'
var express = require('express');
var carerController = require('../controllers/carer.controller');
var apiRestFull = express.Router();

apiRestFull.post('/login', carerController.login);

module.exports = apiRestFull;