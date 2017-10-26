var supply = require('./../services/Supply');
var type_supply = require('./../services/TypeSupply');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/supplies', function(req, res){
        supply.getSupplies(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/supply/:id', function(req, res){
        supply.getSupplyById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });    

    app.post('/supply/add', upload.array(), function (req, res, next) {

        var id_type_supply = type_supply.getTypeSupplyByName(req.body.type_supply.name_supply, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        });

        req.body.supply.id_type_supply = id_type_supply;
        req.body.supply.id_user_fk = req.body.id_user;

        supply.addSupply(req.body.supply, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });
    });
}