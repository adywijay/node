const filesys = require('fs');
const path = require('path');
const dir_now = require('process');

//var directoryPath = 'E:\\Project\\Node\\Path';
let cek_dir_now = dir_now.cwd();


filesys.readdir(cek_dir_now, (err, files) => {
    if (err) {
        console.error(err);
        return;
    }

    files.forEach(file => {
        console.log(file);
    });
});


