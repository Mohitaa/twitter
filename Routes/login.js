'use strict';

var handler = require('Controllers');
var async = require('async');
var Joi = require("joi");


var login={
	method:'POST',
	path:'/login',
	handler:function(req,reply)
	{
		    var respondString = "";
		    handler.validateLogin(req.payload.username, req.payload.password, function (err, result){

		    	 if(err){
                throw err;
          		  }
            if(result){
                //console.log("token >>" , result[0].token );
                reply("Logged in. " + result.username).header('authorization', result.token);
            }else{
                reply("invalid username or password. " + result);
            }
		    });
	},
	config:{
		description: 'Login',
        notes: 'Returns a todo item by the id passed in the path',
        tags: ['api'], // ADD THIS TAG
        validate: {
            payload: {
                username : Joi.string().required(),
                password : Joi.string().required()
            }
        },
        plugins: {
            'hapi-swagger': {
                payloadType: 'form'
            }
        }
	}

}


module.exports = login;