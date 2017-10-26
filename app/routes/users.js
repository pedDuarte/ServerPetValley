var user = require('./../services/User');
var address = require('./../services/Address');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data
console.log(response);
console.log(response.onResult('{batata}'));

module.exports = function(app){

    app.get('/user', function(req, res){
        user.getAllUsers(function(error, result){
            if(error)return res.status(400).json(response.onError(error));
            return res.status(200).json(response.onResult(result));
        })
    });

    app.get('/user/:id', function(req,res){

        user.getUserById(req.params.id, function(error, result){
            if(error)return res.status(400).json(response.onError(error));
            return res.status(200).json(response.onResult(result));
        })
    });

    app.get('/user/byname/:name', function(req,res){
        
        user.getUserByName(req.params.name, function(error, result){
            if(error)return res.status(400).json(response.onError(error));
            return res.status(200).json(response.onResult(result));
        })
    });

    
    
    /*app.get('/login/:email', function(req,res){
        
        user.getLoginParams(req.params.email, function(error, result){
                if(error)return res.status(400).json(error);
                return res.status(200).json(result);
                })
            });*/ 

    app.post('/login', upload.array(), function (req, res, next) {
        var password = '';
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        //console.log("metodo post");
        console.log(req.body);
        console.log(req.body.email);
        console.log(req.body.password);

        user.getLoginParams(req.body.email, function(error, result){
            if(error){
                res.status(400).json(response.onError(error));
            }
            else{
                password = result[0]['Password'];
                
                if(password == req.body.password){
                    res.status(200).json(response.onResult(result));
                    console.log("Deu bom");
                }
                else{
                    res.status(200).json(null);
                    console.log("Deu ruim");
                }
            }                
        })      
        
    });

    app.post('/user', upload.array(), function (req, res, next) {
        //Insere o endereço
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        res.setHeader('Access-Control-Allow-Methods: GET, POST, PATCH, PUT, DELETE, OPTIONS');
        res.setHeader('Access-Control-Allow-Headers: Origin, Content-Type, X-Auth-Token');
         address.addAddress(req.body.address, function(error, resultAddress){
            if(error){
                res.status(400).json(response.onError(error));
            }
            else{
                user.addUser(req.body, resultAddress.insertId, function(error, result){
                    if(error){
                        res.status(400).json(response.onError(error));
                    }
                    else{
                        res.status(200).json(response.onResult(result));
                    }                        
                });                
            }        
        });
    });
    
    app.delete('/user', function(req,res){        
        user.removeUser(req.body.id, function(error, result){
            if(error)return res.status(400).json(response.onError(error));
            return res.status(200).json(response.onResult(result));
        })
    });
}
