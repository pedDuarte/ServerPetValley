var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var TypeServiceProposal = {

    getTypeServiceProposal : function(callback){
        return connection.query('SELECt * FROM TYPE_SERVICE', callback);
    },

    getTypeServiceProposalById : function(id, callback){
        return connection.query('SELECT * FROM TYPE_SERVICE WHERE ID_TYPE_SERVICE = ?',[id], callback);
    },

    getTypeServiceProposalByName: function(name, callback){
        return connection.query('SELECT * FROM TYPE_SERVICE WHERE NAME_SERVICE LIKE ?',"%"+[name]+"%", callback);
    },

    addTypeServiceProposal : function(typeServiceProposal, callback){
        return connection.query('INSERT INTO TYPE_SERVICE(NAME_SERVICE, DESCRIPTION) VALUES(?, ?)',
        [typeServiceProposal.name_service, typeServiceProposal.description], callback);
    },

    updateTypeServiceProposal : function(typeServiceProposal, callback){
        return connection.query('UPDATE TYPE_SERVICE SET(NAME_SERVICE = ?, DESCRIPTION = ?) WHERE ID_TYPE_SERVICE = ?', 
        [typeServiceProposal.name_service, typeServiceProposal.description, typeServiceProposal.id_type_service], callback);
    },
    
    removeTypeServiceProposal : function(id, callback){
        return connection.query('DELETE FROM TYPE_SERVICE WHERE ID_TYPE_SERVICE = ?', [id], callback);
    },
};

module.exports = TypeServiceProposal;
