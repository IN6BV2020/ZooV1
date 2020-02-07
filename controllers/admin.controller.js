'use strict'

var Animal = require('../models/animal.model');
var Carer = require('../models/carer.model');

function saveAnimal(req, res){
    var params = req.body;
    var animal = new Animal();

    if( params.name && 
        params.typeAnimal && 
        params.scientificName){
            animal.name = params.name;
            animal.typeAnimal = params.typeAnimal;
            animal.age = params.age;
            animal.scientificName = params.scientificName;

            animal.save((err, animalSaved)=>{
                if(err){
                    res.status(500).send({message:'Error general'});
                }else if(animalSaved){
                    res.send({animal: animalSaved});
                }else{
                    res.status(418).send({message:'Error al guardar'});
                }
            });
    }else{
        res.send({message:'Ingrese todos los datos'});
    }
}

function listAnimals(req, res){
    Animal.find({}, (err, animals)=>{
        if(err){
            res.status(500).send({message: 'Error general'});
        }else if(animals){
            res.send({animals: animals});
        }else{
            res.status(418).send({message:'No hay registros'});
        }
    });
}

function searchAnimal(req, res){
    var params = req.body;
    
    if(params.search){
        Animal.find({$or:[{name: params.search}, 
        {typeAnimal: params.search},
        {scientificName: params.search}]}, (err, animalFind)=>{
            if(err){
                res.status(500).send({message: 'Error general'});
            }else if(animalFind){
                res.send({animal: animalFind});
            }else{
                res.status(200).send({message: 'Sin registros'});
            }
        });
    }else{
        res.status(200).send({message: 'Ingrese datos en la busqueda'});
    }
    
}

function saveCarer(req, res){
    var params = req.body;
    var carer = new Carer();

    if( params.name && 
        params.job && 
        params.celphone && 
        params.animals,
        params.username &&
        params.password){
            Carer.findOne({username:params.username}, (err, carerFind)=>{
                if(err){
                    res.status(500).send({message: 'Error general'});
                }else if(carerFind){
                    res.send({message:'Nombre de usuario ya utilizado'});
                }else{
                    carer.name = params.name;
                    carer.job = params.job;
                    carer.celphone = params.celphone;
                    carer.animals = params.animals;
                    carer.username = params.username;
                    carer.password = params.password;

                    carer.save((err, carerSaved)=>{
                        if(err){
                            res.status(500).send({message: 'Error general al guardar'});
                        }else if(carerSaved){
                            res.send({carer: carerSaved});
                        }else{
                            res.status(418).send({message: 'Error al guardar'});
                        }
                    });

                }
            });
    }else{
        res.send({message: 'Ingrese todos los campos'});
    }

}

function searchCarer(req, res){
    var params = req.body;
    
    if(params.search){
        Carer.find({$or:[{name: params.search}, {job: params.search}]}, (err, carerFind)=>{
            if(err){
                res.status(500).send({message: 'Error general'});
            }else if(carerFind){
                res.send({carer: carerFind});
            }else{
                res.status(418).send({message:'Sin registros'});
            }
        }).populate('animals');;
    }else{
        res.send({message: 'Ingrese el campo de busqueda'});
    }
}

module.exports = {
    saveAnimal,
    listAnimals,
    searchAnimal,
    saveCarer,
    searchCarer
}