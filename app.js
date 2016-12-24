// The Node Event Emitter
// var Emitter = require('events');

// My Event Emitter
var Emitter = require('./emitter');
var eventConfig = require('./config').events;

var emitter = new Emitter();

emitter.on(eventConfig.GREET, function() {
  console.log("Somewhere, someone said hello.");
})

emitter.on(eventConfig.GREET, function() {
  console.log("A greeting occured!");
})

console.log("Hello!");
emitter.emit('greet');
