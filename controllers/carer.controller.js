'use strict'

var Carer = require('../models/carer.model');

function login(req, res){
    var params = req.body;

    if(params.username && params.password){
        Carer.findOne({username: params.username, 
            password: params.password}, (err, userLoged)=>{
                if(err){
                    res.status(500).send({message: 'Error general al logearse'});
                }else if(userLoged){
                    res.send({user: userLoged});
                }else{
                    res.send({message:'Datos del usuario no encontrados'});
                }
            }).populate('animals');
    }else{
        res.send({message: 'Ingresa todos los campos'});
    }
}

module.exports = {login};