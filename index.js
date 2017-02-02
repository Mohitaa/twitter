'use strict';

var Hapi = require('hapi');
var path = require('path');
require('app-module-path').addPath(__dirname);
const Bootstrap = require('./Utils/BootStrap');

var routes = require("./Routes");                                               //loading routes
const dbConfig = require('./Config/dbconfig');                                              //loading configurations
var server = new Hapi.Server();    


const Mongoose = require('mongoose');
Mongoose.Promise = require('bluebird');

Mongoose.connect(dbConfig.mongo.URI, function (err) {
    if (err) {
        console.log("DB Error: ", err);
        process.exit(1);
    } else {
        console.log('MongoDB Connected');
       init();
    }
});








server.connection({port : 3003, host : 'localhost'});   

//swagger
const Pack = require("./package");

const options = {
    info: {
            'title': 'ERP API Documentation',
            'version': Pack.version,
        }
    };                                        



const HapiSwagger = require("hapi-swagger");
server.register([require('inert'), require('vision'), { 'register' : HapiSwagger, 'options' : options } ],  throwIfError);
function throwIfError(err){
    //a callback function to throw error if there is an error
    if(err){
        throw err;
    }
}


//registering routes
server.route(routes);




  


function init()
{

 Bootstrap.bootstrapAdmin(function (err, message) {
        if (err) {
            console.log('Error while bootstrapping version : ' + err)
        } else {
            console.log(message);
        }
    });



   server.start(function(err){
    if(err){
        console.log("Error in starting server: ");
        console.log(err);
    }else{
         console.log('Server running at:', server.info.uri);
      //  console.log(`Server started at ${host}:${port}`);

    }
});

}