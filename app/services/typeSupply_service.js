var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var TypeSupply = {
    
        getAllTypeSupply : function(callback){
            return connection.query("SELECT * FROM Type_supply", callback);
        },
    
        getTypeSupplyById : function(id, callback){
            return connection.query("SELECT * FROM Type_supply WHERE Id = ?", [id], callback);
        },

        getTypeSupplyByName : function(name, callback){
            return connection.query("SELECT * FROM Type_supply WHERE NAME_SUPPLY = ?", [name], callback);
        },
    
        addTypeSupplyy : function(type_supply, callback){
            return connection.query("INSERT INTO Type_supply (NAME_SUPPLY, UNIT) VALUES(?,?)",
            [type_supply.name_supply, type_supply.unit], callback);
        },
    
        updateTypeSupply : function(id, type_supply, callback){
    
        },
    
        removeTypeSupply : function(id, callback){
            return connection.query("DELETE FROM Type_supply WHERE Id = ?", [id], callback);
        }    
    };
    
    module.exports = TypeSupply;