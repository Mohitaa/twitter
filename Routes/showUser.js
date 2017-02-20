'use strict';

const controller = require("Controllers/ShowUserController");
const Joi = require("joi");

const showUsers = {
    method : "GET",
    path : "/auth/showusers",
    handler : function(request, reply){
        //console.log("authorization >> ", request.headers.authorizations);
        controller.usersShow(request, function(err, result){
            if(err){
                console.log(err);
                reply("Error in data fetch");
            }else{
                reply(result);
            }
        })
    },
    config : {
        description : "admin show users",
        tags : ['api'],
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
    } 
}

module.exports = showUsers;