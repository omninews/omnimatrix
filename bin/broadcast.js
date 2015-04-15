'use strict';

var WebSocketServer = require('ws').Server;
var wss = new WebSocketServer({ port: 8080 });

process.stdin.on('data', function (data) {
  console.log('data:', data.toString().trim());
  wss.clients.forEach(function each(client) {
    client.send(data.toString().trim());
  });
});

process.stdin.resume();
