const mysql = require('mysql');


let pool = mysql.createPool({
    connectionLimit: 5,
    host: 'localhost',
    port: 3408,
    user: 'root',
    password: ''
});

pool.getConnection(function (err, connection) {
    console.log(connection.release());

    //connnection.release();
});
