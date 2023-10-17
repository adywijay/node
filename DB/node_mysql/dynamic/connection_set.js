const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    port: 3408,
    user: 'root',
    password: '',
    database: 'nodejs_mysql'
});

connection.connect((err) => {
    if (err) {
        console.error('Error connecting to database: ' + err.stack);
        return;
    }

    //console.log('Connected to database as id ' + connection.threadId);
});

module.exports = connection;
