var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var ExternalUser = {
    
    getExternalUsers : function(callback){
        return connection.query('SELECT * FROM EXTERNAL_USER', callback);
    },

    getExternalUserById : function(id, callback){
        return connection.query('SELECT * FROM EXTERNAL_USER WHERE ID_EXTERNAL_USER = ?', [id], callback);
    },

    addExternalUser : function(user, callback){
        return connection.query('INSERT INTO EXTERNAL_USER() VALUES()', [], callback);
    },   

    updateExternalUser : function(id, user, callback){

    },

    removeExternalUser : function(id, callback){

    }
}

module.exports = ExternalUser;