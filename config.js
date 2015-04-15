'use strict';

require('dotenv').load();

var nconf = require('nconf');

module.exports = nconf.env().defaults({
});
