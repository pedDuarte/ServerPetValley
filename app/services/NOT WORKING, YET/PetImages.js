var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var PetImages = {
/*SALVAR A IMAGEM NO DIRETÓRIO DO SERVER, TIPO UM FTP */
    /*getPetImagesById : function(id_animal, callback){
        return connection.query('');
    },

    addPetImages : function(id_animal, callback){
        return connection.query('INSERT INTO PET_IMAGES(IMAGE) WHERE');
    },

    removePetImages : function(id_pet_images, callback){
        return connection.query('DELETE FROM PET_IMAGES WHERE ID_PET_IMAGES = ?', [id_pet_images], callback);
    }*/
}

module.exports = PetImages;