'use strict';

var thematrix = require('./thematrix');
var blips = require('./blips');
var socket = new WebSocket('ws://localhost:8080');
var allowedMessages = ['LoadArticle', 'pageview', 'articleseen'];

socket.onmessage = (e) => {
  var data = e.data.split('|');

  if(allowedMessages.indexOf(data[0]) > -1) {
    thematrix.draw(data);
    blips.blip();
  }
};

socket.onopen = () => console.log('Connected');
socket.onclose = () => console.log('Disconnected');
