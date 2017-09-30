var app = require('./config/server');

app.listen(3000, function(){
    console.log('Server On');
});


/*var app = require('express')();
var bodyParser = require('body-parser');
var multer = require('multer'); // v1.0.5
var upload = multer(); // for parsing multipart/form-data

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

app.post('/login', upload.array(), function (req, res, next) {
    console.log("metodo post");
    console.log(req.body.name);
    console.log(req.body.city);
    res.json(req.body);
});

app.listen(3000, function(){
    console.log('Server On');
});*/