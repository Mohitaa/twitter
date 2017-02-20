/*'use strict';

var Config = require("Config");
var mongoose=require("mongoose");
let USER_ROLES = require('../Config/dbConstants').USER_ROLES;
let JWT_SECRET_KEY = require('../Config/appConstant').JWT_SECRET_KEY;
var Jwt = require('jsonwebtoken');
const commonServices = require("Services/CommonServices");
let AdminService = require('../Services/AdminService');
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

const expireToken = function(token, callback){
    verifyToken(token, function(err, result){
        if(err){
            console.log("Error cannot expire");
            callback(err);
        }
        if(result.valid){

            console.log("token updated");
            commonServices.updateData("Employee", {accessToken : token}, {accessToken : null}, null, function(err, update){
                callback(null);
            });
        }else {
            callback("Invalid token");
        }
    } );
}

module.exports = {
    verifyToken : verifyToken,
    setToken : setToken,
    expireToken : expireToken
}
*/