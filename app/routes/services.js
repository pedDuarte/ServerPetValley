var serviceProposal = require('./../services/ServiceProposal');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa Propostas de Serviços
    app.get('/service-proposal', function(req, res){
        serviceProposal.getServiceProposal(function(error, result){
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

    //Pesquisa Propostas de Serviço pelo ID do usuário que a cadastrou
    app.get('/service-proposal/:id', function(req, res){
        serviceProposal.getServiceProposalByUserId(req.params.id, function(error, result){
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

    //Adiciona uma nova proposta de serviço
    app.post('/service-proposal', upload.array(),function(req, res){
        serviceProposal.addServiceProposal(req.body, function(error, result){
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

    //Deleta uma proposta de serviço pelo seu ID
    app.delete('/service-proposal', function(req, res){
        serviceProposal.removeServiceProposal(req.body.id, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.affectedRows));
            }
        });
    });

}