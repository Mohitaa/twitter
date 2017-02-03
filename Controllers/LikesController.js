'use strict';

const async = require('async');
var likeService = require("Services/LikeService.js");
var commonServices = require("Services/CommonServices");
var countlikeServices = require("Services/countlikeService");

/*  var savedata=  function(likeinfo, callback){
            likeService.LikeInsert(likeinfo,function(dbError , data){
          if(dbError){
              console.log("DB ERROR OCCURED >>>>>>.",dbError)
               callback(dbError)
          }else {
              console.log("DATA from DB >>>>>>>",data)
              callback(null,data)
          }
    }) 

}*/

var data = {}


function savelikes(payloadData, callbackRoute) {
    async.auto({
      'verifyUser':function(callback){
        commonServices.getData("Employee", {accessToken: {$exists: true,$ne:null}}, null, null, function(err, result){
                if(err){
                    console.log(err);
                  return  callback(err);
                }else{
                    console.log(result +" length of employee "+result.length);
                    console.log(result.username);
                    
                    if(result && result.length > 0){
                      
                        data.username = result[0].username;
                        data.likes=payloadData;
                        data.userType="User";
                        

                    }else{
                        data = null;
                        return  callback(null, data);
                    }
                    //console.log("sending data after verification>>>", data);
                  return  callback(null, data);
                }
            });
        },
 
        'LikeInsert': ['verifyUser', function (result, callback){
            console.log(result);
            if(result.verifyUser==null)
            {
                return callback(null,"U cant like first login urself");
            }
            else{


                console.log("verify result");
                  likeService.LikeInsert(result.verifyUser,function(dbError , data){
          if(dbError){
              console.log("DB ERROR OCCURED >>>>>>.",dbError)
               callback(dbError)
          }else {
              console.log("DATA from DB >>>>>>>",data)
              callback(null,data)
          }
    })
              }
          
        }],

        'countlike':['LikeInsert',function(result,callback){
            console.log(result.LikeInsert)

                if(result.LikeInsert=="U cant like first login urself")
                {
                    return callback(null,result.LikeInsert);
                }
                   commonServices.countData("Likes",null,function(err,result)
                   {


                    console.log(result);
                        if(err)
                        {
                            return callback(err);
                        }else
                        {
                            console.log(result);
                           return callback(null,result);
                        }
                   }) 



    }]
},(err, result)=> {
        if (err)
            return callbackRoute(err);
        return callbackRoute(null, result);
    })
    } 








module.exports={savelikes:savelikes}








                 //  countlikeServices.countLike(result.verifyUser,function(dbError , data){
      /*  commonServices.getData("likecount",null,null,null,function(err,result){
            console.log(result);
                          if(err){
                    console.log(err);
                  return  callback(err);
                }else{
                    console.log(result);
                    
                    if(result && result.length > 0){
                      
                        data.likecount = (result.likecount+1);
                      
                       commonServices.updateData("likecount",{likecount: {$exists: true, $ne :null}}, {likecount :  data.likecount},null,function(err,result){
                        if(err){
                            return callback(err);
                        }else{
                            console.log(result);
                            callback(null,result);
                        }
                       }) 

                    }else{
                        data = null;
                        return  callback(null, data);
                    }
                    //console.log("sending data after verification>>>", data);
                  return  callback(null, data);
                }
    })*/


       // })