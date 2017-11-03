var response = { "sucess" : "false", "details": ""};

var resp = {
    onResult : function(result){
        response.sucess = true;
        response.details = result;
        return(response);
    },

    onError : function(error){
        response.sucess = false;
        response.details = error;
        return(response);
    }
};

module.exports = resp;
