'use strict';

var Models = require('../Models');
var getData = function (modelName, criteria, projection, options, callback) {
    Models[modelName].find(criteria, projection, options, callback).sort({_id:-1});
};
//Insert record in DB
var createData = function (modelName, objToSave, callback) {
    new Models[modelName](objToSave).save(callback)
};

//Update record in DB
var updateData = function (modelName, criteria, dataToSet, options, callback) {
    Models[modelName].findOneAndUpdate(criteria, dataToSet, options, callback);
};

//Delete record in DB
var deleteData= function (modelName, criteria, callback) {
    Models[modelName].findOneAndRemove(criteria, callback);
};

var countData = function(modelName, criteria, callback) {
    Models[modelName].count(criteria, callback);
};

module.exports = {
    getData: getData,
    createData: createData,
    updateData: updateData,
    deleteData: deleteData,
    countData: countData
};