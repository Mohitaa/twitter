
'use strict';

var AdminController = require('../Controllers/AdminController');
var UniversalFunctions = require('../Utils/UniversalFunctions');
let STATUS_MSG = require('../Config/statusMessage');
const DEFAULT_HAPI_PLUGIN = require('../Config/generalConstants').DEFAULT_HAPI_PLUGIN;
const USER_ROLES = require('../Config/dbConstants').DATABASE;

var Joi = require('joi');


var Adminlogin= {
        method: 'POST',
        path:'/api/adminlogin',
        handler: function (request, reply) {
            var payloadData = request.payload;
            AdminController.loginAdmin(payloadData, function (err, data) {
                var objectToProcess = {
                    replyObject: reply,
                    err: err,
                    data: data,
                    statusMsg: STATUS_MSG.SUCCESS.LOGIN,
                    code: 200
                };
                UniversalFunctions.defaultResponseHandlerFunction(objectToProcess);
            });
        },
        config: {
            description: 'Login Via Email & Password For admin',
            tags: ['api', 'admin'],
            validate: {
                payload: {
                    email: Joi.string().email().required(),
                    password: Joi.string().required().min(2).trim()
                },
                failAction: UniversalFunctions.failActionFunction
            },
            plugins: DEFAULT_HAPI_PLUGIN
        }
    };


    module.exports = Adminlogin;