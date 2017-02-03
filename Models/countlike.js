'use strict';
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const dbConstants = require('../Config/dbConstants');
const USER_ROLES = dbConstants.USER_ROLES;


const likecount = new Schema({
    
 
    likecount: {type: Number,index: true, unique: true, sparse: true},
    registrationDate: {type: Date, default: Date.now, required: true},
   
});

module.exports = mongoose.model('likecount', likecount)