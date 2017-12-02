var visithouse = require('./../services/VisitHouse');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos os animais
    app.get('/visithouse', function(req, res){
        visithouse.getVisitHouse(function(error, result){
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

    app.post('/visithouse', function(req, res){
        visithouse.addVisitHouse(req.body, function(error, result){
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

    app.put('/visithouse', function(req, res){
        visithouse.updateVisitHouse(req.body, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(responde.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.affectedRows));
            }
        })
    });
}