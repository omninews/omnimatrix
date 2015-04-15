'use strict';

var howler = require('howler');

var blip = new howler.Howl({
  urls: ['../sounds/blip.wav']
});

exports.blip = () => {
  blip.play();
};
