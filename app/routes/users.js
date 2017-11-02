var user = require('./../services/User');
var address = require('./../services/Address');
var response = require('./../../config/response');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data


module.exports = function(app){

    //Pesquisa todos os usuários
    app.get('/user', function(req, res){
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
        user.getAllUsers(function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(result);
            }
        })
    });

    //Pesquisa um usuário pelo Id
    app.get('/user/:id', function(req,res){

        user.getUserById(req.params.id, function(error, result){
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

    //Pesquisa um usuário pelo nome
    app.get('/user/byname/:name', function(req,res){
        
        user.getUserByName(req.params.name, function(error, result){
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

    //Pesquisa um usuário pelo CPF
    app.get('/user/bycpf/:cpf', function(req,res){

        user.getUserByCPF(req.params.cpf, function(error, result){
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
    
    /*app.get('/login/:email', function(req,res){
        user.getLoginParams(req.params.email, function(error, result){
                if(error)return res.status(400).json(error);
                return res.status(200).json(result);
                })
    }); */
    
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
                //console.log(error);
                res.status(400).json(error);
            }
            else{
				if(result != ""){					
					//console.log(result);
					password = result[0].password; 
					//console.log(password);
					if(password === req.body.password){
						res.status(200).json(result);
						//console.log("Deu bom");
					}
					else{
						res.status(200).json("SENHA INCORRETA");
						//console.log("Deu ruim");
					}
				}
				else{
					res.status(200).json("EMAIL INCORRETO");
				}
            }                
        })      
        
    });

    //Adiciona um novo usuário
    app.post('/user', upload.array(), function (req, res, next) {
        //Insere o endereço
        res.setHeader('Content-Type', 'application/json');
        res.setHeader('Access-Control-Allow-Origin','*');
         address.addAddress(req.body.address, function(error, resultAddress){
            if(error){
                console.log(error);
                res.status(400).json(response.onError(error));
            }
            else{
                user.addUser(req.body, resultAddress.insertId, function(error, result){
                    if(error){
                        console.log(error);
                        res.status(400).json(response.onError(error));
                    }
                    else{
                        res.status(200).json(response.onResult(result.insertId));
                    }                        
                });                
            }        
        });
    });
    
    //Remove um usuário
    app.delete('/user', function(req,res){        
        user.removeUser(req.body.id, function(error, result){
            if(error){
                console.log(error);
                return res.status(400).json(response.onError(error));
            }
            else{
                //console.log(result);
                return res.status(200).json(response.onResult(result.affectedRows));
            }
        });

        //Remove o endereço do usuário
        /*address.removeAddress(re.body.address.id_address, function(error, result){
            if(error) return res.status(400).json(response.onError(error));
            return res.status(200).json(response.onResult(result));
        })*/

    });
}
