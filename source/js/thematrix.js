'use strict';

var thematrix = $('#thematrix');

var width = thematrix.width();
var height = thematrix.height();

var requestFullscreen = (elem) => {
  if (elem.requestFullscreen) {
    elem.requestFullscreen();
  } else if (elem.msRequestFullscreen) {
    elem.msRequestFullscreen();
  } else if (elem.mozRequestFullScreen) {
    elem.mozRequestFullScreen();
  } else if (elem.webkitRequestFullscreen) {
    elem.webkitRequestFullscreen();
  }
  else {
    throw new TypeError('Element has not method requestFullscreen');
  }
};

$(window).on('resize', () => {
  width = thematrix.width();
  height = thematrix.height();
});

thematrix.on('click', () => {
  requestFullscreen(thematrix.get(0));
});

var createChar = (text) => {
  return $('<div/>').addClass('char').text(text);
};

var killWhenDone = (elem, length) => {
  //## Really ugly
  setTimeout(() => {
    elem.remove();
  }, length * 200 + 2000);
};

var getNormalizedLeft = (text) => {
  var i = parseInt(text.substring(0, 2), 16);

  i = i || 0;
  i = i * width/256;
  i += Math.random() * 30;
  i = Math.floor(i);

  return i;
};

var createCol = (text) => {
  var col = $('<div/>').addClass('col');

  text.split('').forEach(c => col.append(createChar(c)));

  col.css({
    left: getNormalizedLeft(text),
    top: Math.floor(Math.random() * height * 0.66)
  });

  killWhenDone(col, text.length);
  return col;
};

exports.draw = ([type, id]) => {
  thematrix.append(createCol(id));
};
