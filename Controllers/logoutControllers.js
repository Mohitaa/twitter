'use strict';

const tokenManager = require("Lib/TokenManager");

module.exports = function(token, callback){
    tokenManager.expireToken(token, function(err, result){
        if(err){
            console.log("Error in logging out>> ", err);
            callback(err);
        }else{
            callback(null, "Logout Sucess");
        }
    });
}