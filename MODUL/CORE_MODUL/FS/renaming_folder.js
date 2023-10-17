const fs = require('fs');
const path = require('path');


let folder_now = path.join(__dirname, '/io_file/rename_fix');
let folder_renaming = path.join(__dirname, '/io_file/rename_fix1');

let c = 0;

if (fs.existsSync(folder_renaming) === true) {

    console.error('Folder name request is exis');

} else {

    try {
        setTimeout(() => {
            fs.renameSync(folder_now, folder_renaming);
        }, 1000);

        console.log('Renaming done');
    } catch (error) {
        console.error(error);
    }

}


// setTimeout(() => {
//     fs.renameSync(folder_now, folder_renaming);
// }, 1000);

// console.log('Renaming done');

// try {
//     setTimeout(() => {
//         fs.renameSync(folder_now, folder_renaming);
//     }, 1000);

//     console.log('Renaming done');
// } catch (error) {
//     console.error(error);
// }