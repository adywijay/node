let fs = require('fs');
let path = require('path');
let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let q1 = 'Request folder name :' + ' ';


readline.question(q1, (req_folder_name) => {

    let folderName = path.join(__dirname, '/io_file/' + req_folder_name);

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

    readline.close();
});