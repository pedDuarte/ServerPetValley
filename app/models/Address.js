var addressService = require("../services/address_service.js");

class Address
{
    constructor(address_id, postal_code, location, type_location, neighborhood, city, state, number_house, complement){
        if(address_id != null){
            this._id = address_id;            
        }        
        else{
            this._id = null;
        }

        this.postal_code = postal_code;
        this.location = location;
        this.type_location = type_location;
        this.neighborhood = neighborhood;
        this.city = city;
        this.state = state;
        this.number_house = number_house;
        this.complement = complement;
    };

    static getAllAddresses(){        
        var addressList = addressService.getAddresses();
        /*Lógica para instanciar todos os objetos*/
    };
}

Address.prototype.save = function(callback){
    var address = this;
    addressService.addaddress(address, callback);
};

Address.prototype.delete = function(callback){
    var address = this;
    addressService.removeaddress(address._id, callback);
};

Address.prototype.update = function(callback){
    var address = this;
    addressService.updateaddress(address, callback);
};