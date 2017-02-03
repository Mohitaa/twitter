'use strict';

const controller = require("Controllers/showUsers");
const Joi = require("joi");

const logoutRoute = {
    method : "GET",
    path : "/auth/showusers",
    handler : function(request, reply){
        //console.log("authorization >> ", request.headers.authorizations);
        controller(request, function(err, result){
            if(err){
                console.log(err);
                reply("Error in logout");
            }else{
                reply(result);
            }
        })
    },
    config : {
        description : "logout",
        tags : ['api'],
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    } 
}

module.exports = logoutRoute;