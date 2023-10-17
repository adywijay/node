const fs = require('fs');

const readableStream = fs.createReadStream('./ex_menu.txt');


function showMenu() {
    return readableStream.on('data', (out_reader) => {
        console.log(`${out_reader}`);
    });
}


module.exports = {
    showMenu
};

