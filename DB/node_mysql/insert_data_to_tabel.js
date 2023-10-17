const call_connect = require('../node_mysql/dynamic/connection_set');


let data = [
    ['Company Inc', 'Highway 37'],
    ['adsfdsf', 'fghy09']
];

let clear_table_list = "truncate customers";
let prepare_query = "INSERT INTO customers (name, address) VALUES ?";
let prepare_query_show_data = "select * from customers";

try {

    call_connect.query(clear_table_list, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({
            msg: 'table successfull empty',
            resp_code: 200
        }));
    });

    call_connect.query(prepare_query, [data], (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify({ result: result.affectedRows + ' row(s) affected' }));
    });

    call_connect.query(prepare_query_show_data, (err, result) => {
        if (err) {
            throw err;
        }
        console.log(JSON.stringify(result));
    });

} finally {
    call_connect.end();
}