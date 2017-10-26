var serviceProposal = require('./../services/ServiceProposal');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/service', function(req, res){
        serviceProposal.getServices(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/service/:id', function(req, res){
        serviceProposal.getServiceById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.post('/service', function(req, res){
        serviceProposal.addService(req.body, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });
    });

}