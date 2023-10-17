const call_connect = require('../dynamic/connection_set');
const mysql = require('mysql');

let sql = "SELECT * FROM customers order by id desc";
try {

    call_connect.query(sql, (err, result) => {
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