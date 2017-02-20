'use strict';

const async = require('async');
var showUserService = require("Services/UserService.js");
var commonServices = require("Services/CommonServices");
//var adminService = require("Services/AdminService");

var data = {}


function usersShow(payloadData, callbackRoute) {
    async.auto({
      'show':function(callback){
        commonServices.getData("Likes", {}, null, null, function(err, result){
                if(err){
                    console.log(err);
                  return  callback(err);
                }else{
                    console.log(result +" length of likes "+result.length);
                  
          
                    //console.log("sending data after verification>>>", data);
                  return  callback(null, result);
                }
            });
        }
},(err, result)=> {
        if (err)
            return callbackRoute(err);
        return callbackRoute(null, result);
    })
    } 








module.exports={usersShow:usersShow}


