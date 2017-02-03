'use strict';

const controller = require("Controllers/LikesController");
const Joi = require("joi");

const likesvalidate = {
    method : "POST",
    path : "/auth/likescustomer",
    handler : function(request, reply){
        //console.log("authorization >> ", request.headers.authorizations);
                        

              console.log(request.payload.likes);

        controller.savelikes(request.payload.likes, function(err, result){
            if(err){
                console.log(err);
                reply("OOOPSSS !!!!!!!!You already like it");
            }else{
                reply(result);
            }
        })
    },
    config : {
        description : "likes  customer post",
        tags : ['api'],
        validate: {
          payload:{
            likes: Joi.boolean().default(true)
       }
        },
        
    } 
}

module.exports = likesvalidate;