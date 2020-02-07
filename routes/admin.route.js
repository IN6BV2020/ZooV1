'use strict'

var express = require('express');
var adminController = require('../controllers/admin.controller');
var apiRestFull = express.Router();

apiRestFull.post('/saveAnimal', adminController.saveAnimal);
apiRestFull.get('/listAnimals', adminController.listAnimals);
apiRestFull.post('/search', adminController.searchAnimal);

/*Rutas de cuidador*/
apiRestFull.post('/saveCarer', adminController.saveCarer);
apiRestFull.post('/searchCarer', adminController.searchCarer);

module.exports = apiRestFull;