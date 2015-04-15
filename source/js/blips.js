'use strict';

var howler = require('howler');

var blip = new howler.Howl({
  urls: ['../sounds/laser.wav']
});

exports.blip = () => {
  blip.play();
};
