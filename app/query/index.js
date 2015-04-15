'use strict';

var fs = require('fs');
var path = require('path');

module.exports = fs.readdirSync(__dirname)
.filter(function (name) {
  return path.extname(name) === '.sql';
})
.reduce(function (result, name) {
  var key = path.basename(name, '.sql');
  var filePath = path.join(__dirname, name);
  var query = fs.readFileSync(filePath).toString();

  result[key] = query;

  return result;
}, {});
