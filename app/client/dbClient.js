'use strict';

var pg = require('pg');
var config = require('../../config');
var Promise = require('bluebird');

var conStr = config.get('DATABASE_URL');

exports.query = (query, args = []) => {
  return new Promise((resolve, reject) => {
    if(!query) {
      return reject(new Error('No query supplied: ' + query));
    }

    pg.connect(conStr, (err, client, done) => {
      if (err) {
        done();
        return reject(err);
      }

      client.query(query, args, (err, result) => {
        done();

        if(err) {
          return reject(err);
        }

        resolve(result);
      });
    });
  });
};

exports.notify = (query, callback, error = x=>x) => {
  pg.connect(conStr, (err, client, done) => {
    if (err) {
      done();
      error(err);
    }

    client.on('notification', callback);
    client.query(query);
  });
};
