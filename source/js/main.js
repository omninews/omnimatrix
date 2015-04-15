'use strict';

var socket = new WebSocket('ws://localhost:8080');
var thematrix = require('./thematrix');

socket.onmessage = (e) => {
  console.log(e.data);
  thematrix.draw(e.data.split('|'));
};

socket.onopen = () => console.log('Connected');
socket.onclose = () => console.log('Disconnected');
