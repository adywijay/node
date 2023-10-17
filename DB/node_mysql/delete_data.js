const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let sql = "DELETE FROM customers WHERE id = 2";
let show_data = "select * from customers";
try {

    call_connect.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(
            result
        );
    });

    call_connect.query(show_data, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(
            result.message
        );
    });

} finally {
    call_connect.end();
}