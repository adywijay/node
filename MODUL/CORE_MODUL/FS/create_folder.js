let fs = require('fs');
let path = require('path');

let folderName = path.join(__dirname, '/io_file/folder_test1');

try {

    if (!fs.existsSync(folderName)) {

        setTimeout(() => {
            fs.mkdirSync(folderName);
            console.log('Folder created successfull.....');
        }, 1000);

    }

} catch (err) {

    console.error(err);

}



