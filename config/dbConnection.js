/*npm install mysql2 -g --save

Host: pucsi.mysql.database.azure.com
User: pucsi@pucsi
Senha: Sistemas123
*/
var mysql = require('mysql2');

var dataConnection = {
	host : 'pucsi.mysql.database.azure.com',
	user : 'pucsi@pucsi',
	password : 'Sistemas123',
	database: 'petvalley',
	port: 3306,
	ssl: true,
};

module.exports = function()
{
	var connection = mysql.createConnection(dataConnection);
	connection.connect()
	return 	connection;
};