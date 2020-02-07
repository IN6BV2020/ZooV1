'use strict'

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var port = 3300;
var app = require('./app');

mongoose.connect('mongodb://localhost:27017/ZooBV', {useNewUrlParser: true, useUnifiedTopology:true})
.then(()=>{
    console.log('Conexión a la BD correcta');
    app.listen(port, ()=>{
        console.log('Servidor de express corriendo');
    });
})
.catch(err=>{
    console.log('Error al levantar servicios', err);
});