var animal = require('./../services/Animal');
var pet_images = require('./../services/PetImages');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/pet-images/:id', function(req, res){
        pet_images.getPetImagesById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.post('/pet-images', function(req, res){
        pet_images.addPetImages(req.body, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });
    });

    app.delete('/pet-images', function(req, res){
        pet_images.removePetImages(req.body.id_animal_fk, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });
    });

}