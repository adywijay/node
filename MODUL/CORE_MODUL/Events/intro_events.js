var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();



// Subscribe
emitter.on('foo', function (arg1, arg2, arg3) {
    console.log('Foo raised, Args:', arg1, arg2, arg3);
});

emitter.on('testing', (pram1, pram2) => {
    console.log(pram1, pram2);
});





// Emit

let data = ['jbhibb'];
//emitter.emit('foo', { a: 123 }, { b: 456 }, 'uhjvjvjv');
emitter.emit('testing', ...data);