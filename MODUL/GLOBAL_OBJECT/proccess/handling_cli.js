const fs = require('fs');

const readableStream = fs.createReadStream('./ex_menu.txt');

readableStream.on('data', (out_reader) => {
    console.log(`${out_reader}`);
});



//cmd === 1 ? console.log('ya') : console.log('tidak');

