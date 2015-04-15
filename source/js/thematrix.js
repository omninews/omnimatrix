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

  i = i || Math.floor(Math.random() * 16);
  i = i * width/256;
  i += Math.random() * 40;
  i = Math.floor(i);

  return i;
};

var createCol = (text) => {
  var col = $('<div/>').addClass('col');
  var z = Math.floor(Math.random() * 4);

  text.split('').forEach(c => col.append(createChar(c)));

  col.css({
    left: getNormalizedLeft(text),
    top: Math.floor(Math.random() * height * 0.66),
    'z-index': z,
    transform: `scale(${1/4*3 + z/4})`
  });

  killWhenDone(col, text.length);
  return col;
};

exports.draw = ([type, id]) => {
  thematrix.append(createCol(id));
};
