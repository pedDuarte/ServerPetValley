var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Adoption = {

    getAdoptions : function(callback){
        return connection.query('SELECT id_user_fk, id_animal_fk, adoption_date, is_approved FROM ADOPTION', callback);
    },

    getCount : function(callback){
        return connection.query('SELECT (SELECT count(ad.adoption_date) FROM adoption ad INNER JOIN user u  ON u.id_user = ad.id_user_fk INNER JOIN animal an ON ad.id_animal_fk = an.id_animal) as num_adoptions, (SELECT count(id_animal) FROM animal) as num_animals ', callback);
    },

    getAdoptionByUserId : function(id, callback){
        return connection.query('SELECT id_user_fk, id_animal_fk, adoption_date, is_approved FROM ADOPTION WHERE ID_USER_FK = ?',[id], callback);
    },

    getPendentAdoptions : function(callback){
        return connection.query('SELECT u.id_user, u.name as user_name, an.id_animal, an.name as animal_name, an.species, ad.adoption_date  FROM adoption ad INNER JOIN user u ON u.id_user = ad.id_user_fk INNER JOIN animal an ON ad.id_animal_fk = an.id_animal WHERE is_approved = 0;', callback);
    },

    addAdoption : function(adoption, callback){
        return connection.query('INSERT INTO ADOPTION(ID_USER_FK, ID_ANIMAL_FK, ADOPTION_DATE, IS_APPROVED)  VALUES(?, ?, now(), ?)',
        [adoption.id_user_fk, adoption.id_animal_fk, adoption.is_approved], callback);
    },

    updateAdoption : function(adoption, callback){
        return connection.query('UPDATE ADOPTION SET ID_USER_FK = ?, ID_ANIMAL_FK = ?, ADOPTION_DATE = ?, IS_APPROVED = ?  WHERE ID_USER_FK = ? and ID_ANIMAL_FK = ?',
        [adoption.id_user_fk, adoption.id_animal_fk, adoption.adoption_date, adoption.is_approved, adoption.id_user_fk, adoption.id_animal_fk], callback);
    },

    removeAdoption : function(id_user, callback){
        return connection.query('DELETE FROM ADOPTION WHERE ID_USER_FK = ?', [id_user], callback);
    }
};

module.exports = Adoption;