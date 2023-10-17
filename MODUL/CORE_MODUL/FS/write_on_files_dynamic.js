let fs = require('fs');
let path = require('path');
let readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});

let path_folder = path.join(__dirname, '/io_file/folder_test/tester.txt');
let result = ['200', 'Ok.!'];

let q1 = 'Request text :' + ' ';
readline.question(q1, (text_inputs) => {
    fs.writeFile(path_folder, text_inputs, 'utf8', (err) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(result + '\n\n\n\n');

        setTimeout(() => {
            try {
                const data = fs.readFileSync(path_folder, 'utf8');
                console.log(data);
            } catch (err) {
                console.error(err);
            }
        }, 1000);

    });

    readline.close();
});

