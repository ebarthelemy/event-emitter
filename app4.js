'use strict';

var Greeter = require('./greeter')

var greeter = new Greeter();

greeter.on('greet', function(data) {
  console.log(`Someone greeted!:  ${ data }`);
});

greeter.greet('Tony');
