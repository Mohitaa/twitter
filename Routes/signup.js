"use strict";
const Joi = require('joi');
const controller= require('Controllers/index.js');
const config = require("Config");
// let employee = require("schema/mongo/Employee")
const signUp = {
    method: 'POST',
    path: '/signup',
    handler: function (request, reply) {
        controller.employeeSignUp.savedata(request.payload,function(err,result){
            if(err){
                throw err;
            }else{

                console.log(result+"console result");
                reply(result);
            }
        });
    },
    config: {
        description: 'Sign Up',
        auth:false,
        notes: 'To insert Employee',
        tags: ['api'], // ADD THIS TAG
        validate: {
            payload: {
                empId: Joi.string().required(),
            name: Joi.string().required(),
            gender: Joi.string().required(),
            dob: Joi.string().required(),
            username: Joi.string().required(),
            password:Joi.string().required().min(6),
            address: Joi.object().keys({
                houseNo: Joi.string().required(),
                addLine1: Joi.string().required(),
                addLine2: Joi.string(),
                city: Joi.string().required(),
                state: Joi.string().required(),
                pincode: Joi.string().required(),
                landmark: Joi.string(),
                country: Joi.string().required()
            }),
            contact: Joi.object().keys({
                email: Joi.string().regex(/^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i).required(),
                phNo: Joi.string().required(),
            }),
            panCardNo: Joi.string().required(),
            projectAllocated: Joi.boolean().required(),
            dueAmmount: Joi.string().required(),
            salary: Joi.string().required(),
            department: Joi.string().required(),
            designation: Joi.string().required()

            }
        }
        
    }

}


module.exports = signUp;