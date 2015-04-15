'use strict';

var howler = require('howler');

var laser = new howler.Howl({
  urls: ['../sounds/laser.wav'],
  volume: 0.7
});

var blip = new howler.Howl({
  urls: ['../sounds/blip.wav']
});

var coin = new howler.Howl({
  urls: ['../sounds/coin.wav'],
  volume: 0.5
});

var soundMap = {
  'pageview': laser,
  'LoadArticle': blip,
  'articleseen': coin
};

exports.blip = (type) => {
  soundMap[type].play();
};
