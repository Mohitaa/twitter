'use strict';

let async = require('async');
const AdminService = require('../Services/AdminService');


const STATUS_MSG = require('../Config/statusMessage');
const UniversalFunctions = require('./UniversalFunctions');
let __ = require('underscore');


exports.bootstrapAdmin = function (callback) {
    var adminArray = [
        {
            email: 'mamta123@gmail.com',
            password: UniversalFunctions.CryptData("12345678"),
            name: 'Super Administrator'
        },
        {
            email: 'riya123@gmail.com',
            password: UniversalFunctions.CryptData("12345678"),
            name: 'Super Administrator'
        },
        {
            email: 'priya123@gmail.com',
            password: UniversalFunctions.CryptData("12345678"),
            name: 'Super Administrator'
        }
    ];
    
    async.each(adminArray, function(data, internalCB) {
        AdminService.createAdmin(data, internalCB);
        // insertData(data.email, insertData, internalCB)
    }, callback(null, 'Bootstrapping finished'))
};