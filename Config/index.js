'use strict';

var dbConfig = require('./routes.js').dbConfig;

var config = {
   
    NODE_HOST : "localhost",
    NODE_DEVELOPMENT_PORT : 3003,
    dbConfig : dbConfig,
    appConstants : require("./appConstant")
};

module.exports = config;