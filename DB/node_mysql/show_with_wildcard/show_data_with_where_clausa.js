const call_connect = require('../dynamic/connection_set');
const mysql = require('mysql');

let sql = "SELECT * FROM customers WHERE address = 'Highway 37'";
let cmd_like = "SELECT * FROM customers WHERE address like 'H%'";
let cmd_or = "SELECT * FROM customers WHERE id = ? OR address = ?";
try {

    call_connect.query(sql, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({
            result
        }));
    });

    /**
     * ========================= Clause like ====================================
     */
    call_connect.query(cmd_like, (err, result) => {
        if (err) {
            throw err;
        }
        console.log("========= Read with like clause ======================== \n\n\n\n");
        console.log(JSON.stringify({
            result
        }));
    });


    /**
     * ========================= Clause logic  operators =============================
     */
    call_connect.query(cmd_or, [1, 'Highway 37'], (err, result) => {
        if (err) {
            throw err;
        }
        console.log("========= Read with logic operators ======================== \n\n\n\n");
        console.log(JSON.stringify({
            result
        }));
    });


} finally {
    call_connect.end();
}