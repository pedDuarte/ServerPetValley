import { Address } from "address.js";
var userService = require("../services/user_service.js");

class User
{
    constructor(user_id, code_cpf, name, surname, birthdate, sex, email, password, create_time, cellphone, phone_number, image, address){        
        if(address instanceof Address){            
            if(user_id != null){
                this._id = user_id;
            }
            else{
                this._id = null;
            }

            this.code_cpf = code_cpf;
            this.name = name;
            this.surname = surname;
            this.birthdate = birthdate;
            this.sex = sex;
            this.email = email;
            this.password = password;
            this.create_time = create_time;
            this.cellphone = cellphone;
            this.phone_number = phone_number;
            this.image = image;
            this.address = address;
        }
    }
}

User.prototype.save = function(callback){
    var user = this;
    userService.addUser(user, callback);
}

User.prototype.delete = function(callback){
    var user = this;
    userService.removeUser(user._id, callback);
}

User.prototype.update = function(callback){
    var user = this;
    userService.updateUser(user, callback);
}

User.getAllUsers = function(callback){
    var usersList = userService.getAllUsers();
    /*Lógica para instanciar todos os objetos*/
}

User.findById = function(id, callback){
    var user = userService.findById(id);
}