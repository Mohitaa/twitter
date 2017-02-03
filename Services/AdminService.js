'use strict';

var Admins = require('../Models/Admins');
var UnivFunc = require('../Utils/UniversalFunctions');
//Get Users from DB
var getAdmin = function (criteria, projection, options, callback) {
    options.lean = true;
    Admins.find(criteria, projection, options, callback);
};

//Insert User in DB
var createAdmin = function (objToSave,callback) {
    new Admins(objToSave).save(callback)
};

//Update User in DB
var updateAdmin = function (criteria, dataToSet, options, callback) {
    options.lean = true;
    Admins.findOneAndUpdate(criteria, dataToSet, options, callback);
};
const loginAdmin = function (payloadData, callback) {
    let response = {
        emailFound: false,
        passwordMatch: false,
        userData: null
    };
    let criteria = {
        email: payloadData.email
    };
    getAdmin(criteria, {__v: 0}, {}, function (err, data) {
        if (err) {
            callback(err)
        } else {
            if (data && data.length > 0) {
                response.emailFound = true;
                response.passwordMatch = UnivFunc.comparePassword(payloadData.password, data[0].password);
                response.userData = data[0];
            }
            callback(null, response)
        }
    })
};
const updateAccessToken = function (userId, token, callback) {
    let criteria = {
        _id: userId
    };
    let setQuery = {
        accessToken: token
    };
    if (!token) {
        setQuery = {$unset: {accessToken: 1}}
    }
    updateAdmin(criteria, setQuery, {}, callback)
};
const verifyAccessTokenAndGetUser = function (userId, type, actualToken, cb) {
    let criteria = {
        _id: userId,
        userType: type,
        accessToken: actualToken
    };
    getAdmin(criteria, {}, {}, function (err, data) {
        if (err) {
            cb(err)
        } else {
            if (data && data.length > 0) {
                cb(null, data[0])
            } else {
                cb(null, false)
            }
        }
    })
};




module.exports = {
    verifyAccessTokenAndGetUser: verifyAccessTokenAndGetUser,
    updateAccessToken: updateAccessToken,
    getAdmin: getAdmin,
    loginAdmin: loginAdmin,
    createAdmin: createAdmin,
    updateAdmin: updateAdmin,
 
};

