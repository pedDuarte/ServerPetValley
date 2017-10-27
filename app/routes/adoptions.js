var adoption = require('./../services/Adoption');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos os animais
    app.get('/adoption', function(req, res){
        adoption.getAdoptions(function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result));
            }
        })
    });

    //Pesquisa um animal por Id
    app.get('/adoption/:id', function(req, res){
        adoption.getAdoptionByUserId(req.params.id, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result));
            }
        })
    });

    //Adiciona um novo animal
    app.post('/adoption', upload.array(), function(req, res){
        adoption.addAdoption(req.body, function(error, result){
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
    app.delete('/adoption', function(req, res){
        adoption.removeAdoption(req.body.id, function(error, result){
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