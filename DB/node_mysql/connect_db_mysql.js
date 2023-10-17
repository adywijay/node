const mysql = require('mysql');

let preq_connect = {
    host: "localhost",
    port: 3408,
    user: "root",
    password: ""
};

let do_connected = mysql.createConnection(preq_connect);

do_connected.connect((err) => {
    if (err) {
        return console.error('error: ' + err.message);
    }
    console.info('Connected' + ' On : ' + ' ' + preq_connect.port);

    do_connected.end();
});

/**
 * Property Connection 
 * 
 * 
 * connection.end() : Close Connection 
 * connection.destroy() : force 
 */