var events = require('events');
let eventemit2 = require('events').EventEmitter;
var eventEmitter = new events.EventEmitter();


// listener #1
var listner1 = function listner1() {
    console.log('listner1 executed.');
};

// listener #2
var listner2 = function listner2() {
    console.log('listner2 executed.');
};




/**
 * Handler method add event listener
 */
eventEmitter.addListener('connection', listner1);

eventEmitter.on('connection', listner2);


eventEmitter.emit('connection');

eventListeners = eventemit2.listenerCount(eventEmitter, 'connection');
console.log(eventListeners + " Listner(s) listening to connection event");
