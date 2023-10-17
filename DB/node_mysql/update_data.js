const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let sql = "UPDATE customers SET address = 'Canyon 123' WHERE id = 2 ";
try {

    call_connect.query(sql, (err, result) => {
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