'use strict';

var http = require('http');
var path = require('path');
var express = require('express');
var config = require('../config');
var listener = require('../app/listener');
var WebSocketServer = require('ws').Server;

var app = express().use(express.static(path.join(__dirname, '..', 'public')));
var server = http.createServer(app)
var wss = new WebSocketServer({ server });

listener.start((data) => {
  wss.clients.forEach(function each(client) {
    client.send(data.toString().trim());
  });
});

server.listen(config.get('PORT'), function () {
  console.log('Listening on', config.get('PORT'));
});
