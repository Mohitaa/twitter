'use strict';
//employee schema
const employeeModel = require("Models/Employee");

const EmployeeInsert = function(empInfo, callback){
    console.log("TO BE SAVED >>>>>>>>>>>>>",empInfo);
    new employeeModel(empInfo).save(function(err,data)
    	{
    		
    			console.log(err +" fsdf   "+data);
    		
    		return callback(err,data);
    	}); 
};

module.exports = {
    EmployeeInsert : EmployeeInsert
};