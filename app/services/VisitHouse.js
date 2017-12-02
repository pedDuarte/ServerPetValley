var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var VisitHouse = {

    getVisitHouse : function(callback){
        return connection.query('SELECT id_visit_house as id, visit_date, is_visit, description, internal_id_user_fk, external_id_user_fk FROM VISIT_HOUSE', callback);
    },

    addVisitHouse : function(vistiHouse, callback){
        return connection.query('INSERT INTO VISIT_HOUSE (VISIT_DATE, IS_VISIT, DESCRIPTION, INTERNAL_ID_USER_FK, EXTERNAL_ID_USER_FK) VALUES (?,?,?,?,?)',
         [vistiHouse.visit_date, vistiHouse.is_visit, vistiHouse.description, vistiHouse.internal_id_user_fk, vistiHouse.external_id_user_fk], callback);
    },

    updateVisitHouse : function(vistiHouse, callback){
        return connection.query('UPDATE VISIT_HOUSE SET VISIT_DATE = ?, IS_VISIT = ?, DESCRIPTION = ?, INTERNAL_ID_USER_FK = ?, EXTERNAL_ID_USER_FK = ? WHERE ID_VISIT_HOUSE = ?',
        [vistiHouse.visit_date, vistiHouse.is_visit, vistiHouse.description, vistiHouse.internal_id_user_fk, vistiHouse.external_id_user_fk, visitHouse.id_visit_house], callback);        
    }
};

module.exports = VisitHouse;