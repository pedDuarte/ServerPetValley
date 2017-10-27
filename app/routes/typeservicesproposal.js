var type_service = require('./../services/TypeServiceProposal');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos os tipos de serviço
    app.get('/typeservice', function(req, res){
        type_service.getTypeServiceProposal(function(error, result){
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

    //Pesquisa o tipo de serviço por Id
    app.get('/typeservice/:id', function(req, res){
        type_service.getTypeServiceProposalById(req.params.id,function(error, result){
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
    
    //Pesquisa o tipo de serviço por nome
    app.get('/typeservice/byname/:name', function(req, res){
        type_service.getTypeServiceProposalByName(req.params.name,function(error, result){
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

    //Adiciona um novo tipo de serviço
    app.post('/typeservice', upload.array(), function(req, res){
        type_service.addTypeServiceProposal(req.body, function(error, result){
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

    //Deleta um tipo de serviço pelo Id
    app.delete('/typeservice', function(req, res){
        type_service.removeTypeServiceProposal(req.body.id,function(error, result){
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