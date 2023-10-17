const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let sql = "SELECT * FROM customers limit 1";
let limit_offset = "SELECT * FROM customers limit 1 offset 1";
let join_tbl = "SELECT users.name AS user, products.name AS favorite FROM users JOIN products ON users.favorite_product = products.id";

try {

    call_connect.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({
            result
        }));
    });

    call_connect.query(limit_offset, (err, result) => {
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