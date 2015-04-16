'use strict';

var thematrix = require('./thematrix');
var blips = require('./blips');
var port = document.location.port ? ':' + document.location.port : '';
var scheme = document.location.protocol === 'http:' ? 'ws:' : 'wss:';
var socket = new WebSocket(`${scheme}//${document.location.hostname}${port}`);
var allowedMessages = ['LoadArticle', 'pageview', 'articleseen'];

socket.onmessage = (e) => {
  var data = e.data.split('|');

  if(allowedMessages.indexOf(data[0]) > -1) {
    thematrix.draw(data);
    blips.blip(data[0]);
  }
};

socket.onopen = () => console.log('Connected');
socket.onclose = () => console.log('Disconnected');
