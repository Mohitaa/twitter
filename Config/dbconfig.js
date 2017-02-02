'use strict';

var mongoURL = "mongodb://localhost/twitter";



const mongo = {
    URI: mongoURL,
    port: 27017
};


module.exports = {
    mongo: mongo
};
