const fs = require('fs');

const writableStream = fs.createWriteStream('../Ex_file/tes.txt');

writableStream.write('Tulisan pertama.\n');
writableStream.write('Tulisan kedua.\n');

writableStream.end('Terakhir.', () => {
    console.log('Penulisan selesai.');
});

writableStream.on('error', (err) => {
    console.error(`Error: ${err.message}`);
});
