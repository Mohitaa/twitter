'use strict';

//var User = require("Models/Employee");
var commonServices = require("Services/CommonServices");
var tokenManager = require("Lib/TokenManager");

module.exports = function (username, password, callback){

    //User.find({username : username, password : password}, callback);
    commonServices.getData("Employee", {username : username, password : password}, null, null, function(err, result){
        if(err){
            console.log("Error at validate login >>>>>>>>>>>>>\n", err);
            callback(err);
        }else{
            if(result && result.length > 0){
                var data = {
                    _id : result[0]._id,
                    username : result[0].username
                }
                tokenManager.setToken( data, function(err, token) {
                    commonServices.updateData("Employee", {_id : data._id}, {accessToken : token }, null, function(err, updatedData){
                        console.log("saved token data>> ",  token);
                        //console.log("updateData>>>>" , updatedData);
                        data.token = token;
                        callback(null, data);
                    });
                });
            }else{
                callback(null, null);
            }
        }
    });
}