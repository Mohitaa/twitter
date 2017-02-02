'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbConstants = require('../Config/dbConstants');
const USER_ROLES = dbConstants.USER_ROLES;
/*const LoginAttempts = new Schema({
    timestamp: {type: Date, default: Date.now},
    validAttempt: {type: Boolean, required: true},
    ipAddress: {type: String, required: true}
});*/

const Admins = new Schema({
    name: {type: String, trim: true, index: true, default: null, sparse: true},
    userType: {type: String, default: USER_ROLES.ADMIN},
    email: {type: String, trim: true, unique: true, index: true},
    accessToken: {type: String, trim: true, index: true, unique: true, sparse: true},
    password: {type: String, required: true},
    passwordResetToken: {type: String, trim: true, unique: true, sparse: true},
    registrationDate: {type: Date, default: Date.now, required: true},
    //csvUrl: {type: String, default: null},
   // loginAttempts: [LoginAttempts]
});

module.exports = mongoose.model('Admins', Admins)