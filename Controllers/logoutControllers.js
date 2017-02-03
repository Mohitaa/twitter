'use strict';

const tokenManager = require("Lib/TokenManager");

module.exports = function(request, callback){
    tokenManager.expireToken(request, function(err, result){
        if(err){
            console.log("Error in logging out>> ", err);
           return callback(err);
        }else{
            console.log(result.valid);
        	if (!result.valid)
        	{

        		return callback(null, "please login first ");
        	}
          return  callback(null, "Logout Sucess");
        }
    });
}