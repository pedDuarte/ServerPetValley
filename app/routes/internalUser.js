var user = require('./../services/User');
var address = require('./../services/Address');
var internalUser = require('./../services/InternalUser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/internal-user', function(req, res){
        internalUser.getInternalUsers(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/internal-user/:id', function(req,res){

        internalUser.getInternalUserById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });    
    
    

    app.post('/internal-user', upload.array(), function (req, res, next) {
        //Insere o endereço
        address.addAddress(req.body.address, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                address.getLastAddressInserted(function(error, result){
                if(error) {
                    res.status(400).json(error);
                }
                else{
                    //Insere o usuário
                    user.addUser(req.body, result[0].ID_ADDRESS, function(error, result){
                        if(error){
                            res.status(400).json(error);
                        }
                        else{
                            user.getLastUserInserted(function(error, result){
                                if(error){
                                    res.status(400).json(error);
                                }
                                else{
                                    //Insere o usuário interno
                                    internalUser.addInternalUser(req.body.professional_data, result[0].ID_USER, function(error, result){
                                        if(error){
                                            console.log(error);
                                            res.status(400).json(error);
                                        }
                                        else{
                                            res.status(200).json(result);
                                        }
                                    });
                                }

                            });                            
                        }
                    })
                }
            });
        }
        });
    });
    
    app.delete('/internal-user', function(req,res){        
        internalUser.removeInternalUser(req.body.id, function(error, result){
            if(error)
            {
                return res.status(400).json(error);
            }
            else{
                user.removeUser(req.body.id, function(error, result){
                    if(error)
                    {
                        return res.status(400).json(error);
                    }
                    else{
                        return res.status(200).json(result);
                    }
                });
            }
        })
    });
}
