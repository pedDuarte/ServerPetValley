var animal = require('./../services/Animal');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos os animais
    app.get('/animal', function(req, res){
        animal.getAnimals(function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(error);
            }
            else{
                //console.log(result);
                return res.status(200).json(result);
            }
        })
    });

    //Pesquisa um animal por Id
    app.get('/animal/:id', function(req, res){
        animal.getAnimalById(req.params.id, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(error);
            }
            else{
                //console.log(result);
                return res.status(200).json(result);
            }
        })
    });

    //Adiciona um novo animal
    app.post('/animal', upload.array(), function(req, res){
        animal.addAnimal(req.body, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.insertId));
            }
        });
    });

    //Deleta um animal por Id
    app.delete('/animal', function(req, res){
        animal.removeAnimal(req.body.id, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.affectedRows));
            }
        })
    });

}