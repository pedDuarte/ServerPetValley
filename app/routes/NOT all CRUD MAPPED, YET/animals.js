var animal = require('./../services/Animal');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports - function(app){

    app.get('/animal', function(req, res){
        animal.getAnimals(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/animal/:id', function(req, res){
        animal.getAnimalById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.post('/animal', function(req, res){
        animal.addAnimal(req.body, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });

    

    });

}