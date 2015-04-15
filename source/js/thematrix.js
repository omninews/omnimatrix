'use strict';

var thematrix = $('#thematrix');

var width = thematrix.width();
var height = thematrix.height();

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
