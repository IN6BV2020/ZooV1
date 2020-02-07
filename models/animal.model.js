'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var animalSchema = Schema({
    name: String,
    typeAnimal: String,
    age: Number,
    scientificName: String
});

module.exports = mongoose.model('animal', animalSchema);