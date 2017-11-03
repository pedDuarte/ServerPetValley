var response = { "success" : "false", "details": ""};

var resp = {
    onResult : function(result){
        response.success = true;
        response.details = result;
        return(response);
    },

    onError : function(error){
        response.success = false;
        response.details = error;
        return(response);
    }
};

module.exports = resp;
