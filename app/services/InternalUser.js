var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var InternalUser = {
    
    getInternalUsers : function(callback){
        return connection.query('SELECT post, admission_date, shift, is_volunteer, work_days, demission_date, crmv, crmv_uf, id_user_fk, id_user_groups_fk FROM INTERNAL_USER', callback);
    },

    getInternalUserById : function(id, callback){
        return connection.query('SELECT post, admission_date, shift, is_volunteer, work_days, demission_date, crmv, crmv_uf, id_user_fk, id_user_groups_fk FROM INTERNAL_USER WHERE ID_USER_FK = ?', [id], callback);
    },

    addInternalUser : function(internalUser, id_user_fk, callback){
        return connection.query('INSERT INTO INTERNAL_USER (POST, ADMISSION_DATE, SHIFT, IS_VOLUNTEER, WORK_DAYS, DEMISSION_DATE, CRMV, CRMV_UF, ID_USER_FK, ID_USER_GROUPS_FK) VALUES(?,?,?,?,?,?,?,?,?,?)', 
        [internalUser.post, internalUser.admission_date, internalUser.shift, internalUser.is_volunteer, internalUser.work_days, internalUser.demission_date, internalUser.crmv, internalUser.crmv_uf, id_user_fk, internalUser.id_user_groups_fk], callback);
    },   

    updateInternalUser : function(id, user, callback){
        return connection.query('UPDATE INTERNAL_USER SET(POST = ?, ADMISSION_DATE = ?, SHIFT = ?, IS_VOLUNTEER = ?, WORK_DAYS = ?, DEMISSION_DATE = ?, CRMV = ?, CRMV_UF = ?, ID_USER_GROUPS_FK = ?) WHERE ID_USER_FK = ?', 
        [internalUser.post, internalUser.admission_date, internalUser.shift, internalUser.is_volunteer, internalUser.work_days, internalUser.demission_date, internalUser.crmv, internalUser.crmv_uf, internalUser.id_user_groups_fk, internalUser.id_user_fk], callback);
    },

    removeInternalUser : function(id, callback){
        return connection.query('DELETE FROM INTERNAL_USER WHERE ID_USER_FK = ?', [id], callback);
    }
}

module.exports = InternalUser;