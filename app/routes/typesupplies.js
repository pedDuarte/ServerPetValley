var type_supply = require('./../services/TypeSupply');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/typesupply', function(req, res){
        type_supply.getTypes(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/typesupply/:id', function(req, res){
        type_supply.getTypeSupplyById(req.params.id,function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/typesupply-byname/:name', function(req, res){
        type_supply.getTypeSupplyByName(req.params.name,function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.post('/typesupply', function(req, res){
        type_supply.addTypeSupplyy(req.body, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.delete('/typesupply', function(req, res){
        type_supply.removeTypeSupply(req.body.id,function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });
}