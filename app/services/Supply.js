var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Supply = {

    getSupplies : function(callback){
        return connection.query("SELECT id_supply, description, expiration_date, entry_date, quantity, uptade_date, id_user_fk, id_type_supply FROM SUPPLY", callback);
    },

    getSupplyById : function(id, callback){
        return connection.query("SELECT id_supply, description, expiration_date, entry_date, quantity, uptade_date, id_user_fk, id_type_supply FROM SUPPLY WHERE ID_SUPPLY = ?", [id], callback);
    },

    addSupply : function(supply, callback){
        return connection.query("INSERT INTO SUPPLY (DESCRIPTION, EXPIRATION_DATE, ENTRY_DATE, QUANTITY, UPTADE_DATE, ID_USER_FK, ID_TYPE_SUPPLY) VALUES(?,?,?,?,?,?,?)"
        ,[supply.description, supply.expiration_date, supply.entry_date, supply.quantity, supply.update_date, supply.id_user_fk, supply.id_type_supply],callback);
    },

    updateSupply : function(supply, callback){
        return connection.query('UPDATE SUPPLY SET(DESCRIPTION = ?, EXPIRATION_DATE = ?, ENTRY_DATE = ?, QUANTITY = ?, UPDATE_DATE = ?, ID_USER_FK = ?, ID_TYPE_SUPPLY = ?) WHERE ID_SUPPLY = ?',
         [supply.description, supply.expiration_date, supply.entry_date, supply.quantity, supply.update_date, supply.id_user_fk, supply.id_type_supply, supply.id_supply], callback)
    },

    removeSupply : function(id_supply, callback){
        return connection.query("DELETE FROM SUPPLY WHERE ID_SUPPLY = ?", [id_supply], callback);
    }

};

module.exports = Supply;