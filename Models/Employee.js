'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EmployeeSchema = new Schema({
    empId: {type: String, unique: true, required: true},
    name: {type: String, required: true},
    gender:{type:String, enum: ["MALE", "FEMALE"],default : "FEMALE" , required:true},
    dob:{type:String, required:true},
    username:{type:String, required:true,unique:true},
    password:{type:String, required:true},
    address: {
        houseNo:{type: String, required: true},
        addLine1:{type: String, required: true},
        addLine2:{type: String, required: false},
        city: {type: String, required: true},
        state: {type: String, required: true},
        pincode: {type: String, required: true},
        landmark: {type: String},
        country: {type: String, default: "India", required:true}
    },
    contact:{
        email: {type:String, sparse:true, required:true},
        phNo:{type:String, required:true, unique: true,  min: 5, max: 15}
    },
    panCardNo: {type: String, required: true},
    projectAllocated:{type:Boolean, default:false, required:true},
    dueAmmount:{type:String, required:true},
    salary:{type:String, required:true},
    department:{type: String},
    designation:{type: String, required:true },
    accessToken : {type: String},
    roles : [],
    acl : []
}, {
    timestamps : true
});

module.exports = mongoose.model("Employee", EmployeeSchema);