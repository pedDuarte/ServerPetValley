var address = require('./../services/Address');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

module.exports = function(app){

    app.get('/address', function(req, res){
        address.getAddresses(function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.get('/address/:id', function(req, res){
        address.getAddressById(req.params.id, function(error, result){
            if(error)return res.status(400).json(error);
            return res.status(200).json(result);
        })
    });

    app.post('/address/add', upload.array(), function (req, res, next) {
        address.addAddress(req.body, function(error, result){
            if(error){
                res.status(400).json(error);
            }
            else{
                res.status(200).json(result);
            }
        });
    });   
}