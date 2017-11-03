var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var ExternalUser = {
    
    getExternalUsers : function(callback){
        return connection.query('SELECT id_user_fk, id_questionnaire_fk FROM EXTERNAL_USER', callback);
    },

    getExternalUserById : function(id, callback){
        return connection.query('SELECT id_user_fk, id_questionnaire_fk FROM EXTERNAL_USER WHERE ID_USER_FK = ?', [id], callback);
    },

    addExternalUser : function(id_user, callback){
        return connection.query('INSERT INTO EXTERNAL_USER(ID_USER_FK, ID_QUESTIONNAIRE_FK) VALUES(?, ?)', [id_user, null], callback);
    },   

    /*updateExternalUser : function(id, user, callback){

    },*/

    removeExternalUser : function(id, callback){
        return connection.query('DELETE FROM EXTERNAL_USER WHERE ID_USER_FK = ?', [id], callback);
    }
}

module.exports = ExternalUser;