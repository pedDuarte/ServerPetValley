var express = require('express');
var consign = require('consign');
var bodyParser = require('body-parser');
var cors = require('cors')
var app = express();

app.use(cors())

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

consign()
    .include('app/routes')
    .then('config/dbConnection.js')
    .into(app);

module.exports = app;
