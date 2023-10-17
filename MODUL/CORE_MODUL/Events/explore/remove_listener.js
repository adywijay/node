var EventEmitter = require('events').EventEmitter;
var emitter = new EventEmitter();


let remover_event = () => {
    console.log('handler called');
    setTimeout(() => {
        console.log('remove is process');
        setTimeout(() => {
            emitter.removeListener('foo', remover_event);
        }, 1000);

    }, 4000);
};

emitter.on('foo', remover_event);

emitter.emit('foo');
emitter.emit('foo');