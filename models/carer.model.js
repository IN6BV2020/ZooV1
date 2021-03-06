'use strict'

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var carerSchema = Schema({
    name: String,
    job: String,
    celphone: Number,
    username: String,
    password: String,
    animals: [{ type: Schema.Types.ObjectId, ref: 'animal'}]
});

module.exports = mongoose.model('carer', carerSchema);