var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();
var fs = require("fs");

var Animal = {

    getAnimals : function(callback){
        return connection.query('SELECT id_animal, size, coat, age, neutered, vermifuges, name, description, species, sex, avatar FROM ANIMAL', callback);
    },

    getAnimalById : function(id, callback){
        return connection.query('SELECT id_animal, size, coat, age, neutered, vermifuges, name, description, species, sex, avatar  FROM ANIMAL WHERE ID_ANIMAL = ?',[id], callback);
    },

    addAnimal : function(animal, callback){
        var bitmap = new Buffer(animal.avatar, 'base64');
        var image_path = "public/images/pet/"+animal.name+Date.now()+".jpg";
        fs.writeFileSync(image_path, bitmap);

        return connection.query('INSERT INTO ANIMAL(SIZE, COAT, AGE, NEUTERED, VERMIFUGES, NAME, DESCRIPTION, SPECIES, SEX, AVATAR)  VALUES(?,?,?,?,?,?,?,?,?,?)',
        [animal.size, animal.coat, animal.age, animal.neutered, animal.vermifuges, animal.name, animal.description, animal.species, animal.sex, image_path], callback);
    },

    updateAnimal : function(animal, callback){
        var bitmap = new Buffer(animal.avatar, 'base64');
        var image_path = "public/images/pet/"+animal.name+Date.now()+".jpg";
        fs.writeFileSync(image_path, bitmap);
        return connection.query('UPDATE ANIMAL SET SIZE = ?, COAT = ?, AGE = ?, NEUTERED = ?, VERMIFUGES = ?, NAME = ?, DESCRIPTION = ?, SPECIES = ?, SEX = ?, AVATAR = ? WHERE ID_ANIMAL = ?',
        [animal.size, animal.coat, animal.age, animal.neutered, animal.vermifuges, animal.name, animal.description, animal.species, animal.sex, image_path, animal.id_animal], callback);
    },

    removeAnimal : function(id, callback){
        return connection.query('DELETE FROM ANIMAL WHERE ID_ANIMAL = ?', [id], callback);
    }
};

module.exports = Animal;