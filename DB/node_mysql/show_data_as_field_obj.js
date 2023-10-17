const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let sql = `SELECT * FROM customers`;

try {

    call_connect.query(sql, [true], (err, result, field) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({
            field
        }));


        /* console.log(field); */
    });



} finally {
    call_connect.end();
}