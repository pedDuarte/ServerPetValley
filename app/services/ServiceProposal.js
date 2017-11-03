var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var ServiceProposal = {

    getServiceProposal : function(callback){
        return connection.query("SELECT id_service_proposal, date_service, approved, id_type_service_fk, id_user_fk FROM SERVICE_PROPOSAL WHERE 1=1", callback);
    },

    getServiceProposalByUserId : function(id, callback){
        return connection.query("SELECT id_service_proposal, date_service, approved, id_type_service_fk, id_user_fk FROM SERVICE_PROPOSAL WHERE ID_USER_FK = ?", [id], callback);
    },

    addServiceProposal : function(serviceProposal, callback){
        return connection.query('INSERT INTO SERVICE_PROPOSAL(DATE_SERVICE, APPROVED, ID_TYPE_SERVICE_FK, ID_USER_FK) VALUES(?, ?, ?, ?)',
        [serviceProposal.date_service, serviceProposal.approved, serviceProposal.id_type_service_fk, serviceProposal.id_user_fk], callback);
    },

    updateServiceProposal : function(serviceProposal, callback){
        return connection.query('UPDATE SERVICE_PROPOSAL SET(DATE_SERVICE = ?, APPROVED = ? , ID_TYPE_SERVICE_FK = ?) WHERE ID_SERVICE_PROPOSAL = ?',
        [serviceProposal.date_service, serviceProposal.approved, serviceProposal.id_service_proposal], callback);
    },

    removeServiceProposal : function(id_service, callback){
        return connection.query('DELETE FROM SERVICE_PROPOSAL WHERE ID_SERVICE_PROPOSAL = ?', [id_service], callback);
    }
};

module.exports = ServiceProposal;