'use strict';

var validateLogin = require("./validateLogin.js");


var LikesController = require("./LikesController.js");
var employeeSignUp = require("./EmployeeSignUp");

var logoutController = require("./logoutControllers");
//var checkRoleAclController = require("./checkRoleAclController");

module.exports = {
    validateLogin : validateLogin,
    //loadPage : loadPage,
    //saveProject : saveProject,
    LikesController : LikesController,
    employeeSignUp : employeeSignUp,
    //authTestController : authTestController,
    logoutController : logoutController,
    //checkRoleAclController : checkRoleAclController
}
