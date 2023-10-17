const fs = require('fs');

const readableStream = fs.createReadStream('../Ex_file/tes.txt');

readableStream.on('data', (out_reader) => {
    console.log(`${out_reader}`);
});

readableStream.on('end', () => {
    console.log('Selesai membaca file.');
});

readableStream.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});