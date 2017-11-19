const { inspect } = require( "util" );

"use strict";

const Hapi = require( "hapi" );
const peopleData = require( "./data/people.json" );

// Create a server with a host and port
const server = new Hapi.Server();
server.connection({
  "host": "localhost",
  "port": 9000
});

server.on( "response", function ( request ) {
  console.log( request.info.remoteAddress + ": " + request.method.toUpperCase() + " " + request.response.statusCode + " " + request.url.path );
});

server.route({
  "method": "GET",
  "path": "/",
  "handler": function ( request, reply ) {
    return reply( "Hello from fixtures server!" );
  }
});

server.route({
  "method": "GET",
  "path": "/api/v1/search",
  "handler": function ( request, reply ) {
    const searchTerm = request.params.query.trim();
    return reply({
      "result": peopleData.filter( p => p.name.indexOf( searchTerm ) >= 0 ),
      "errors": [],
      "message": ""
    });
  }
});

server.route({
  "method": "POST",
  "path": "/api/v1/person",
  "handler": function ( request, reply ) {
    const id = new Date().getTime().toString();
    console.log( `Saving person ${inspect( request.payload )}` );
    return reply({
      "result": {
        id,
        ...request.payload
      },
      "message": "Saved",
      "errors": []
    });
  }
});

server.start( ( err ) => {
  if ( err ){
    throw err;
  }
  console.log( "Server running at:", server.info.uri );
});