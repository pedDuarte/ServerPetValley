var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Adoption = {

    getAdoptions : function(callback){
        return connection.query('SELECT id_user_fk, id_animal_fk, adoption_date FROM ADOPTION', callback);
    },

    getAdoptionByUserId : function(id, callback){
        return connection.query('SELECT id_user_fk, id_animal_fk, adoption_date FROM ADOPTION WHERE ID_USER_FK = ?',[id], callback);
    },

    addAdoption : function(adoption, callback){
        return connection.query('INSERT INTO ADOPTION(ID_USER_FK, ID_ANIMAL_FK, ADOPTION_DATE)  VALUES(?, ?, ?)',
        [adoption.id_user_fk, adoption.id_animal_fk, adoption.adoption_date], callback);
    },

    removeAdoption : function(id_user, callback){
        return connection.query('DELETE FROM ADOPTION WHERE ID_USER_FK = ?', [id_user], callback);
    }
};

module.exports = Adoption;