'use strict';

var Config = require("Config");
var mongoose=require("mongoose");
var Jwt = require('jsonwebtoken');
const commonServices = require("Services/CommonServices");
var ObjectId = mongoose.Types.ObjectId;

const verifyToken = function(token, callback){
    console.log("Verifying token>>>> ", token);
    Jwt.verify(token, Config.appConstants.JWT_SECRET_KEY, function (err, decodedData) {
        if (err) {
            console.log("Error, invalid token signature");
            callback(null, "Invalid");
        } else {
            //console.log("decode data >>>>> " , token);
            commonServices.getData("Employee", {_id : new ObjectId(decodedData._id), accessToken : token }, null, null, function(err, result){
                if(err){
                    console.log(err);
                    callback(err);
                }else{
                    //console.log(result);
                    var data = {}
                    if(result && result.length > 0){
                        data._id = result[0]._id;
                        data.valid = true;
                    }else{
                        data.valid = false;
                    }
                    //console.log("sending data after verification>>>", data);
                    callback(null, data);
                }
            });
        }
    });
}

const setToken = function(tokenData, callback){
    var token =  Jwt.sign(tokenData, Config.appConstants.JWT_SECRET_KEY);
    console.log("Token generated>>>> ", token);
    callback(null, token);
}

const expireToken = function(request, callback){
      
      var    data={};

            console.log("logout");
            commonServices.updateData("Employee", {accessToken: {$exists: true, $ne :null}}, {accessToken : null}, null, function(err, result){
                 if(err){
                    console.log(err);
                    callback(err);
                }else{

                        
                    console.log(result+"  overall   ");




                    if(result && result.name !=null){

                            for(var key in result)
                            {
                                
                                if(key=="_id")
                                {
                                 data._id = result[key];

                             console.log(" id "+key)
                         }
                                    if(key=="username")
                                    {
                                 data.name = result[key];
                                 break;
                             console.log(" username "+ key)
                         }
                                    
                            }

                            data.valid = true;
                      


                    }else{
                        data.valid = false;
                        console.log("No usr valid Login")
                       
                    }
                    //console.log("sending data after verification>>>", data);
                   return callback(null, data);

              
            }
            });
        
    
}   

module.exports = {
    verifyToken : verifyToken,
    setToken : setToken,
    expireToken : expireToken
}