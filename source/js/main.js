'use strict';

var socket = new WebSocket('ws://localhost:8080');
var thematrix = require('./thematrix');
var allowedMessages = ['LoadArticle', 'pageview', 'articleseen'];

socket.onmessage = (e) => {
  var data = e.data.split('|');

  if(allowedMessages.indexOf(data[0]) > -1) {
    thematrix.draw(data);
  }
};

socket.onopen = () => console.log('Connected');
socket.onclose = () => console.log('Disconnected');
