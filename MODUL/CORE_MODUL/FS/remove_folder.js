const fs = require('fs');
const path = require('path');

let dir = path.join(__dirname, '/io_file/rename_fix1');


fs.rmdir(dir, err => {
    if (err) {
        console.log('\n\n\n\n' + `${dir}` + ' ' + 'not exist!');
    } else {
        console.log(`${dir} is deleted!`);
    }
});
