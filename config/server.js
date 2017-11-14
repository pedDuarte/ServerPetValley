var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors')
var path = require('path');
var app = express();

app.use(cors())

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
//Libera a pasta "public" e seu conteúdo para acesso
app.use("/public", express.static(path.join(__dirname, '../public')));

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
