const call_connect = require('../dynamic/connection_set');
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});



readline.question(`Tuliskan query disini :` + ' ', param_query => {
    try {

        call_connect.query(param_query, (err, result) => {
            if (err) {
                throw err;
            }
            console.log('\n\n\n\n');
            console.log(JSON.stringify({
                result
            }));
        });

    } finally {
        readline.close();
        call_connect.end();
    }
});