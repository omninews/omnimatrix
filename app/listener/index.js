'use strict';

var db = require('../client/dbClient');
var query = require('../query');

exports.start = () => {
  db.query(query.createNotifier)
  .then(() => {
    db.notify('LISTEN watchers', function (msg) {
      console.log(msg.payload);
    });
  });
};
