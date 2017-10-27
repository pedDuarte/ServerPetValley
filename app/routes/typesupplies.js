var type_supply = require('./../services/TypeSupply');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos ou tipos de suprimentos
    app.get('/typesupply', function(req, res){
        type_supply.getTypeSupply(function(error, result){
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

    //Pesquisa tipos de suprimento pelo Id do suprimento
    app.get('/typesupply/:id', function(req, res){
        type_supply.getTypeSupplyById(req.params.id,function(error, result){
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

    //Pesquisa suprimentos pelo nome do suprimento
    app.get('/typesupply/byname/:name', function(req, res){
        type_supply.getTypeSupplyByName(req.params.name,function(error, result){
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
    
    //Adiciona um novo suprimento
    app.post('/typesupply', upload.array(), function(req, res){
        type_supply.addTypeSupply(req.body, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.insertId));
            }
        })
    });

    //Remove um suprimento pelo Id do tipo de suprimento
    app.delete('/typesupply', function(req, res){
        type_supply.removeTypeSupply(req.body.id,function(error, result){
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