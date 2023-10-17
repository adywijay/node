let fs = require('fs');
let path = require('path');


let pwd = __dirname;

/**
 * Membaca list isi dari direktory
 */
let data = fs.readdirSync(pwd); // fs.readdirSync(path)


Promise.all(data).then((result) => {
    result.forEach((value, index, array) => {
        console.log(value);
    });
}).catch(res => console.log(res));

