//id_document, type_document, image_document, description, id_user_fk
var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Document = {

    getAllDocuments : function(callback){
        return connection.query("SELECT id_document as id, type_document, image_document, description, id_user_fk FROM Document", callback);
    },

    getDocumentByUserId : function(id_user, callback){
        return connection.query("SELECT id_document as id, type_document, image_document, description, id_user_fk FROM Document WHERE ID_USER_FK = ?", [id_user], callback);
    },

    addDocument : function(document, callback){
        return connection.query("INSERT INTO DOCUMENT ( type_document, image_document, description, id_user_fk) VALUES(?,?,?,?);"
        ,[document.type_document, document.image_document, document.description, document.id_user_fk], callback);
    },   

    updateDocument : function(id, document, callback){
        return connection.query("UPDATE DOCUMENT SET(type_document = ?, image_document = ?, description = ?) WHERE ID_DOCUMENT = ?;"
        ,[document.type_document, document.image_document, document.description, document.id_user_fk, id], callback);
    },

    removeDocument : function(id, callback){
        return connection.query("DELETE FROM Document WHERE ID_DOCUMENT = ?", [id], callback);
    }
};

module.exports = Document;