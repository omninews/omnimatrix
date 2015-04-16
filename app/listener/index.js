'use strict';

var db = require('../client/dbClient');
var query = require('../query');

exports.start = (echo) => {
  db.query(query.createNotifier)
  .then(() => {
    db.notify('LISTEN watchers', function (msg) {
      echo(msg.payload);
    });
  });
};
