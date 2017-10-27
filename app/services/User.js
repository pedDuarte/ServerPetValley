var dbConnection = require("./../../config/dbConnection");
var connection = dbConnection();

var User = {

    getAllUsers : function(callback){
        return connection.query("SELECT * FROM User", callback);
    },

    getUserById : function(id, callback){
        return connection.query("SELECT * FROM User WHERE ID_USER = ?", [id], callback);
    },

    getUserByName : function(name, callback){
        console.log("SELECT * FROM User WHERE NAME LIKE ?", ["%"+name+"%"]);
        return connection.query("SELECT * FROM User WHERE NAME LIKE ?", ["%"+name+"%"], callback);
    },

    getUserByCPF : function(cpf, callback){
        return connection.query("SELECT * FROM User WHERE CODE_CPF = ? ", [cpf], callback);
    },

    addUser : function(user, id_address_fk, callback){
        return connection.query("INSERT INTO USER (CODE_CPF, NAME, SURNAME, BIRTHDATE, SEX, EMAIL, PASSWORD, CREATE_TIME, CELLPHONE, PHONE_NUMBER, IMAGE, ID_ADDRESS_FK) VALUES(?,?,?,?,?,?,?,now(),?,?,?,?);"
        ,[user.code_cpf,user.name, user.surname, user.birthdate, user.sex, user.email, user.password, user.cellphone, user.phonenumber, 'batata', id_address_fk], callback);
    },   

    updateUser : function(id, user, callback){
        return connection.query("UPDATE USER SET(CODE_CPF = ?, NAME = ?, SURNAME = ?, BIRTHDATE = ?, SEX = ?, EMAIL = ?, PASSWORD = ?, CREATE_TIME = ?, CELLPHONE = ?, PHONENUMBER = ?, IMAGE = ?, ID_ADDRESS_FK = ?) WHERE ID_USER = ?;"
        ,[user.code_cpf,user.name, user.surname, user.birthdate, user.sex, user.email, user.password, user.create_time, user.cellphone, user.phonenumber, user.image, user.id_address_fk, user.id_user], callback)
    },

    removeUser : function(id, callback){
        return connection.query("DELETE FROM User WHERE ID_USER = ?", [id], callback);
    },

    getLoginParams : function(email, callback){
        return connection.query("SELECT Email, Password, Id_user FROM User WHERE Email = ?", [email], callback);
    }/*,

    getLastUserInserted : function(callback){
        return connection.query("SELECT ID_USER FROM User ORDER BY 1 DESC LIMIT 1", callback);
    }*/
};

module.exports = User;