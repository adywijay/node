const fs = require('fs');
const path = require('path');

let dir = path.join(__dirname, '/io_file/rename_fix1');

fs.rm(dir, { recursive: true, force: true }, err => {
    if (err) {
        throw err;
    }

    console.log(`${dir} is deleted!`);
});
