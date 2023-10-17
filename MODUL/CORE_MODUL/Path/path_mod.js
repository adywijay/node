const path = require('path');

//console.log(path.sep);

/*

      >>> path.sep (membaca modul path dengan menggabungkan separator slash / )<<<
                            Membuat direktori /

 */

const filePath = path.join('/content/', 'subfolder', 'test.txt');

/*

      >>> path.join (membaca modul path dengan menggabungkan separator slash / )<<<
                yang nantinya akan Membuat direktori '/content/subfolder/test.txt'

 */

console.log(filePath);

//const base = path.basename(filePath);
//console.log(__dirname);

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt');
console.log(absolute);