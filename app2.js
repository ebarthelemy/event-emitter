var EventEmitter = require('events');
var util = require('util');

function Greeter() {
    // Super constructor
    EventEmitter.call(this);
    this.greeting = 'Hello world!';
}

util.inherits(Greeter, EventEmitter);

Greeter.prototype.greet = function(data) {
  console.log(`${ this.greeting } : ${ data }`);
  this.emit('greet', data);
};

var greeter = new Greeter();

greeter.on('greet', function(data) {
  console.log(`Someone greeted!:  ${ data }`);
});

greeter.greet('Tony');
