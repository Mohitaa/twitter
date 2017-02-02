'use strict';

var employeeService = require("Services/EmployeeService.js");
//var commonServices = require("Services/CommonServices");

  var savedata=  function(employeeInfo, callback){
            employeeService.EmployeeInsert(employeeInfo,function(dbError , data){
          if(dbError){
              console.log("DB ERROR OCCURED >>>>>>.",dbError)
               callback(dbError)
          }else {
              console.log("DATA from DB >>>>>>>",data)
              callback(null,data)
          }
    }) 
 /*   commonServices.createData("Employee", employeeInfo, function(dbError , data){
          if(dbError){
              console.log("DB ERROR OCCURED >>>>>>.",dbError)
            return   callback(dbError)
          }else {
              console.log("DATA from DB >>>>>>>",data)
             return callback(null,data)
          }
    })*/
}

module.exports={savedata:savedata}