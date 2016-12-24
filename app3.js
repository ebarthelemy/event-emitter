'use strict';

var EventEmitter = require('events');

class Greeter extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello world!";
  }

  greet(data) {
    console.log(`${ this.greeting }: ${ data }`);
    this.emit('greet', data);
  }
}

var greeter = new Greeter();

greeter.on('greet', function(data) {
  console.log(`Someone greeted!:  ${ data }`);
});

greeter.greet('Tony');
