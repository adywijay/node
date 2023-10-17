let fs = require('fs');


let prereq = {
    path: 'io_file/coba1.txt',
    encode: 'utf8'
};

fs.readFile(prereq.path, prereq.encode, (err, result) => {
    console.log('Opening File ................');
    if (err) {
        console.err(err);
    }
    console.log(result);

});