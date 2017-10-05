var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Supply = {

    getSupplies : function(callback){
        return connection.query("SELECT * FROM Supply", callback);
    },

    getSupplyById : function(id, callback){
        return connection.query("SELECT * FROM Supply WHERE Id = ?", [id], callback);
    },

    addSupply : function(supply, callback){
        return connection.query("INSERT INTO Supply (DESCRIPTION, EXPIRATION_DATE, ENTRY_DATE, QUANTITY, UPDATE_DATE, ID_USER_FK, ID_TYPE_SUPPLY) VALUES(?,?,?,?,?,?,?)"
        ,[supply.description, supply.expiration_date, supply.entry_date, supply.quantity, supply.update_date, supply.id_user_fk, supply.id_typesupply],callback);
    },

    updateSupply : function(id, supply, callback){
        //
    },

    removeSupply : function(id, callback){
        return connection.query("DELETE FROM Supply WHERE Id = ?", [id], callback);
    }

};

module.exports = Supply;