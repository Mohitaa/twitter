'use strict';

var validateLogin = require("./validateLogin.js");


//var fetchEmployee = require("./fetchEmployee.js");
var employeeSignUp = require("./EmployeeSignUp");

var logoutController = require("./logoutControllers");
//var checkRoleAclController = require("./checkRoleAclController");

module.exports = {
    validateLogin : validateLogin,
    //loadPage : loadPage,
    //saveProject : saveProject,
    //fetchEmployee : fetchEmployee,
    employeeSignUp : employeeSignUp,
    //authTestController : authTestController,
    logoutController : logoutController,
    //checkRoleAclController : checkRoleAclController
}
