const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let sql = "DROP TABLE IF EXISTS customers";
let get_tbl = "show tables";
try {

    call_connect.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(
            result.message
        );
    });

    call_connect.query(get_tbl, (err, result) => {
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