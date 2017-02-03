'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbConstants = require('../Config/dbConstants');
const USER_ROLES = dbConstants.USER_ROLES;


const Likes = new Schema({
    username: {type: String, trim: true, index: true, default: null,unique: true, sparse: true},
    userType: {type: String, default: USER_ROLES.INDIVIDUAL_USER},
    likes: {type: Number,index: true},
    registrationDate: {type: Date, default: Date.now, required: true},
   
});

module.exports = mongoose.model('Likes', Likes)