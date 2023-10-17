var EventEmitter = require('events').EventEmitter;

var emitter = new EventEmitter();


let incrementNumber = 0;



emitter.on("newUser", () => {

    console.log(++incrementNumber);

});


/**
 * Method .once ----------> hanya menampilkan sekali sesuai event yg ditemukan
 */
emitter.once("method_once", () => {

    console.log(++incrementNumber);

});



emitter.emit("newUser");
emitter.emit("newUser");
emitter.emit("newUser");

emitter.emit("method_once");
emitter.emit("method_once");