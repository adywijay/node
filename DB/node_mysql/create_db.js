const call_connect = require('../node_mysql/dynamic/connections');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question('Masukkan nama database: ', (dbName) => {

    if (dbName === '') {
        console.log('nama db tidak boleh kosong');
    } else {
        call_connect.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`, (error, results, fields) => {
            if (error) {
                throw error;
            }
            console.log('database :' + ' ' + dbName + ' ' + 'berhasil dibuat');
            console.log('\n\n\n\n\n');
        });

        console.log('\n\n\n\n\n');
        call_connect.query(`show databases`, (error, results, fields) => {
            if (error) {
                throw error;
            }
            for (let i in results) {
                console.log(results[i]);
            }
            console.log('Count list DB : ' + ' ' + results.length);
        });
    }



    call_connect.end();
    readline.close();
});


