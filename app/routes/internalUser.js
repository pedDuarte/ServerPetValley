var user = require('./../services/User');
var address = require('./../services/Address');
var internalUser = require('./../services/InternalUser');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    //Pesquisa todos os usuários internos
    app.get('/internal-user', function(req, res){
        internalUser.getInternalUsers(function(error, result){
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

    //Pesquisa um usuário pelo Id do usuário (DA TABELA USER)
    app.get('/internal-user/:id', function(req,res){

        internalUser.getInternalUserById(req.params.id, function(error, result){
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

    //Adiciona um novo endereço, depois um novo usuário e por fim um usuário interno
    app.post('/internal-user', upload.array(), function (req, res, next) {
        //Insere o endereço
        address.addAddress(req.body.address, function(error, resultAddress){
            if(error){
                console.log(error);
                res.status(400).json(response.onError(error));
            }
            else{
                //Insere o usuário
                user.addUser(req.body, resultAddress.insertId, function(error, resultUser){
                    if(error){
                        console.log(error);
                        res.status(400).json(response.onError(error));
                    }
                    else{
                        //Insere o usuário interno
                        internalUser.addInternalUser(req.body.professional_data, resultUser.insertId, function(error, result){
                            if(error){
                                console.log(error);
                                return res.status(400).json(response.onError(error));
                            }
                            else{
                                //console.log(result);
                                return res.status(200).json(response.onResult(resultUser.insertId));
                            }
                        });
                    }                            
                });
            }                
        });
    });
    
    //Delete o usuário interno e depois o usuário relacionado com ele.
    app.delete('/internal-user', function(req,res){        
        internalUser.removeInternalUser(req.body.id, function(error, result){
            if(error)
            {
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                user.removeUser(req.body.id, function(error, result){
                    if(error)
                    {
                        console.log(error);
                        return res.status(400).json(response.onError(error));
                    }
                    else{
                        return res.status(200).json(response.onResult(result.affectedRows));
                    }
                });
            }
        })
    });
}
