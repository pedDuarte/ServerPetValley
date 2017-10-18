var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Address = {

    getAddresses : function(callback){
        return connection.query('SELECT * FROM Address', callback);
    },

    getAddressById : function(id, callback){
        return connection.query('SELECT * FROM Address WHERE ID_ADDRESS = ?', [id], callback);
    },

    addAddress : function(address, callback){
        return connection.query('INSERT INTO Address (POSTAL_CODE, LOCATION, TYPE_LOCATION, NEIGHBORHOOD, CITY, STATE, COMPLEMENT, NUMBER_HOUSE) values (?,?,?,?,?,?,?,?)'
        ,[address.postal_code, address.location, address.type_location, address.neighborhood, address.city, address.state, address.complement, address.number_house], callback);
    },

    updateAddress : function(address, callback){
        return connection.query('UPDATE Address SET (POSTAL_CODE = ?, LOCATION = ?, TYPE_LOCATION = ?, NEIGHBORHOOD = ?, CITY = ?, STATE = ?, COMPLEMENT = ?, NUMBER_HOUSE = ?) WHERE ID_ADDRESS = ?'
        ,[address.postal_code, address.location, address.type_location, address.neighborhood, address.city, address.state, address.complement, address.number_house, address.id_address], callback);
    },

    removeAddress : function(id, callback){
        return connection.query('DELETE FROM Address WHERE ID_ADDRESS = ?', [id], callback);
    },

    getLastAddressInserted : function (callback){
        return connection.query('SELECT ID_ADDRESS FROM Address ORDER BY DESC LIMIT 1', callback);
    }
};

module.exports = Address;