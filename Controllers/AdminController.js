const async = require('async');
const AdminService = require('../Services/AdminService');
let UniversalFunctions = require('../Utils/UniversalFunctions');
let TokenManager = require('../Lib/TokenManager');
const USER_ROLES = require('../Config/dbConstants').USER_ROLES;
let STATUS_MSG = require('../Config/statusMessage');

function loginAdmin(payloadData, callbackRoute) {
    let responseToSend = {
        temporaryToken: null,
        accessToken: null,
        userData: null
    };
    async.auto({
        'validateEmail': function(cb) {
            //verify email address
            console.log("verify mail " +payloadData.email);
            if (!UniversalFunctions.verifyEmailFormat(payloadData.email)) {
              return  cb(STATUS_MSG.ERROR.INVALID_EMAIL);
            } else {
               return cb();
            }
        },
        'loginAdmin': ['validateEmail', function (result, cb){
            AdminService.loginAdmin(payloadData, function (err, serviceResponse) {

                console.log("verify login");
                if (err) {
                 return   cb(err);
                } else {
                    if (serviceResponse) {
                        if (!serviceResponse.emailFound) {
                            return cb(STATUS_MSG.ERROR.EMAIL_NOT_FOUND)
                        }
                        if (!serviceResponse.passwordMatch) {
                            return cb(STATUS_MSG.ERROR.INCORRECT_PASSWORD)
                        }
                        responseToSend.userData = serviceResponse.userData;
                        return cb();
                    } else {
                      return  cb(STATUS_MSG.ERROR.IMP_ERROR);
                    }
                }
            })
        }],
        'createAccessToken': ['loginAdmin', function (result, cb) {
            if (responseToSend.userData) {
                responseToSend.userData.userType = USER_ROLES.ADMIN;
                let tokenData = {
                    id: responseToSend.userData._id,
                    type: responseToSend.userData.userType,
                    scope: [responseToSend.userData.userType]
                };
                TokenManager.setToken(tokenData, function (err, output) {
                    if (err) {
                      return  cb(err);
                    } else {
                        responseToSend.accessToken = output && output.accessToken || null;
                      return  cb();
                    }
                })
            } else {
               return cb(STATUS_MSG.ERROR.IMP_ERROR)
            }
        }]
    }, (err, result)=> {
        if (err)
            return callbackRoute(err);
        return callbackRoute(null, responseToSend);
    })
}
const logoutAdmin = function (userData, callback) {
    async.auto({
        'destroyToken': function (cb) {
            TokenManager.expireToken(userData.accessToken, cb)
        }
    }, callback)
};



module.exports = {
    loginAdmin: loginAdmin,
    logoutAdmin: logoutAdmin

};