var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var TypeSupply = {
    
        getTypeSupply : function(callback){
            return connection.query("SELECT * FROM Type_supply", callback);
        },
    
        getTypeSupplyById : function(id, callback){
            return connection.query("SELECT * FROM Type_supply WHERE ID_TYPE_SUPPLY = ?", [id], callback);
        },

        getTypeSupplyByName : function(name, callback){
            return connection.query("SELECT ID_TYPE_SUPPLY FROM Type_supply WHERE NAME_SUPPLY LIKE ?", "%"+[name]+"%", callback);
        },
    
        addTypeSupplyy : function(type_supply, callback){
            return connection.query("INSERT INTO Type_supply (NAME_SUPPLY, UNIT) VALUES(?,?)",
            [type_supply.name_supply, type_supply.unit], callback);
        },
    
        updateTypeSupply : function(type_supply, callback){
            return connection.query("UPDATE TYPE_SUPPLY SET(NAME_SUPPLY = ?, UNIT = ?) WHERE ID_TYPE_SUPPLY = ?",
            [type_supply.name_supply, type_supply.unit, type_supply.id], callback);    
        },
    
        removeTypeSupply : function(id, callback){
            return connection.query("DELETE FROM Type_supply WHERE ID_TYPE_SUPPLY = ?", [id], callback);
        }    
    };
    
    module.exports = TypeSupply;