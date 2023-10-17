const call_connect = require('./dynamic/connection_set');
const mysql = require('mysql');

let id = process.argv[3]; //-------------> baris ke berapa dalam cli misal : node show_data_from_table.js 1 2
let sql = `SELECT * FROM customers WHERE id=` + mysql.escape(id);

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