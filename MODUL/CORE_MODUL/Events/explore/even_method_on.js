const { setTimeout } = require('timers');

var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();

/**
 * Handler descript
 */
emitter.on('event1', (in1) => {

    if (typeof (in1) !== 'number') {
        throw new Error('Parameter input isnt number');
    } else {
        console.log(in1);
    }
});

emitter.on('event2', (inputan2) => {
    console.log('Proccessing');
    setTimeout(() => {
        console.log(inputan2);
    }, 2000);
});




let data = 40;

emitter.emit('event1', data);
emitter.emit('event2', [{ name: 'Jecky', address: 'Japan' }, { name: 'Jerry', address: 'Shanghai' }]);