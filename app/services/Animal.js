var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var Animal = {

    getAnimals : function(callback){
        return connection.query('SELECT id_animal, size, coat, age, neutered, vermifuges, name, description, species FROM ANIMAL', callback);
    },

    getAnimalById : function(id, callback){
        return connection.query('SELECT id_animal, size, coat, age, neutered, vermifuges, name, description, species FROM ANIMAL WHERE ID_ANIMAL = ?',[id], callback);
    },

    addAnimal : function(animal, callback){
        return connection.query('INSERT INTO ANIMAL(SIZE, COAT, AGE, NEUTERED, VERMIFUGES, NAME, DESCRIPTION, SPECIES)  VALUES(?,?,?,?,?,?,?,?)',
        [animal.size, animal.coat, animal.age, animal.neutered, animal.vermifuges, animal.name, animal.description, animal.species], callback);
    },

    updateAnimal : function(animal, callback){
        return connection.query('UPDATE ANIMAL SET(SIZE = ?, COAT = ?, AGE = ?, NEUTERED = ?, VERMIFUGES = ?, NAME = ?, DESCRIPTION = ?, SPECIES = ?) WHERE ID_ANIMAL = ?',
        [animal.size, animal.coat, animal.age, animal.neutered, animal.birthdate, animal.vermifuges, animal.id_animal], callback);
    },

    removeAnimal : function(id, callback){
        return connection.query('DELETE FROM ANIMAL WHERE ID_ANIMAL = ?', [id], callback);
    }
};

module.exports = Animal;