const fs = require('fs');

const writableStream = fs.createWriteStream('../Ex_file/tes.txt');
const readableStream = fs.createReadStream('../Ex_file/tes.txt');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});


readline.question(`Write sometimes els : ` + ' ', (name) => {

    if (name === '') {
        throw new Error('Parameter isnt nullable');
    }
    try {
        writableStream.write(`${name}` + '\n');
        setTimeout(() => {
            readableStream.on('data', (out_reader) => {
                console.log(`${out_reader}`);
            });
        }, 1000);
    } finally {
        writableStream.end();
        readline.close();
    }
});

