const call_connect = require('../node_mysql/dynamic/connection_set');

let str_query = "CREATE TABLE customers (id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), address VARCHAR(255))";
let str_query_cek_tbl = "show tables";
let str_query_ck_tbl_struk = "desc customers";


try {

    call_connect.query(str_query, (err, result) => {
        if (err) {
            throw err;
        }
        console.log('tabel berhasil dibuat');
    });

    call_connect.query(str_query_cek_tbl, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(result));
    });


    call_connect.query(str_query_ck_tbl_struk, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(result);
    });

} finally {
    call_connect.end();
}