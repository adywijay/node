const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let call_id = mysql.escape(1);
let sql = `SELECT * FROM customers WHERE id=?`;

try {

    call_connect.query(sql, call_id, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({
            result
        }));
    });



} finally {
    call_connect.end();
}