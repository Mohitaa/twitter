/*var Hapi = require('hapi');

var server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });





server.register(require('hapi-auth-jwt'), function (err) {

  server.auth.strategy('token', 'jwt', {
    key: 'GU7Tx9W-mycfXy7jpAuIfTiruCbrGkX0nLHkntSBNuBCgw5oEAZPWno9VCFm5bLb',
    verifyOptions: {
      algorithms: [ 'HS256' ],
      audience: 'ZRNSJTR05fOyC2Sa8ixVf7q61ThgNGmq'
    }
  
});

  server.route({
  method: 'GET',
  path: '/path_to_your_api',
  config: { auth: 'token' },
  handler: function(request, reply) {
    reply("hello");
  }
});


  });

  server.start(function(err)
  	{


           if (err) {
                console.log(err);
            } 
                console.log('Server running at:', server.info.uri);
        


  	});
*/


var Hapi = require('hapi'),
    jwt = require('jsonwebtoken'),
    server = new Hapi.Server();

server.connection({ port: 3000, host: 'localhost' });

var accounts = {
    123: {
        id: 123,
        user: 'john',
        fullName: 'John Doe',
        scope: ['a', 'b']
    }
};


var privateKey = 'BbZJjyoXAdr8BUZuiKKARWimKfrSmQ6fv8kZ7OFfc';

// Use this token to build your request with the 'Authorization' header.  
// Ex:
//     Authorization: Bearer <token>
var token = jwt.sign({ accountId: 123 }, privateKey, { algorithm: 'HS256'} );


var validate = function (request, decodedToken, callback) {

    var error,
        credentials = accounts[decodedToken.accountId] || {};

    if (!credentials) {
        return callback(error, false, credentials);
    }

    return callback(error, true, credentials)
};


server.register(require('hapi-auth-jwt'), function (error) {

    server.auth.strategy('token', 'jwt', {
        key: privateKey,
        validateFunc: validate,
        verifyOptions: { algorithms: [ 'HS256' ] }  // only allow HS256 algorithm
    });

    server.route({
        method: 'GET',
        path: '/',
        config: {
            auth: 'token',
            handler:function(request,reply)
            {
            	reply("hello");
            }
        }
    });

    // With scope requirements
    server.route({
        method: 'GET',
        path: '/withScope',
        config: {
            auth: {
                strategy: 'token',
                scope: ['a'],
             
            },
               handler:function(request,reply)
            {
            	reply("hello withScope");
            }
        }
    });
});

 server.start(function(err)
  	{


           if (err) {
                console.log(err);
            } 
                console.log('Server running at:', server.info.uri);
        


  	});