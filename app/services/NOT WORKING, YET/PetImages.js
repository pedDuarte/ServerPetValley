var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var PetImages = {
/*SALVAR A IMAGEM NO DIRETÓRIO DO SERVER, TIPO UM FTP */
    getPetImagesById : function(id_animal, callback){
        return connection.query('SELECT * FROM PET_IMAGES WHERE ID_ANIMAL_FK = ?', 
        [id_animal], callback);
    },

    addPetImages : function(pet_image, callback){
        return connection.query('INSERT INTO PET_IMAGES(IMAGE, ID_ANIMAL_FK) VALUES(?, ?)', 
        [pet_image.image, pet_image.id_animal_fk], callback);
    },

    removePetImages : function(id_pet_images, callback){
        return connection.query('DELETE FROM PET_IMAGES WHERE ID_PET_IMAGES = ?', 
        [id_pet_images], callback);
    }
}

module.exports = PetImages;