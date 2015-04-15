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

var createCol = (text) => {
  var col = $('<div/>').addClass('col');

  text.split('').forEach(c => col.append(createChar(c)));

  col.css({
    left: Math.floor(Math.random() * width),
    top: Math.floor(Math.random() * height * 0.66)
  });

  killWhenDone(col, text.length);
  return col;
};

exports.draw = ([type, id]) => {
  thematrix.append(createCol(id));
};
