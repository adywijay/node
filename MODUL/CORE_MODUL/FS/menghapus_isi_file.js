const fs = require('fs');

const filePath = '../FS/io_file/coba1.txt'; // Ganti dengan path file Anda

fs.open(filePath, 'w', (err, fileDescriptor) => {
    if (err) throw err;

    fs.ftruncate(fileDescriptor, 12, (err) => {
        if (err) throw err;

        console.log(`File ${filePath} berhasil dipangkas.`);
        fs.close(fileDescriptor, (err) => {
            if (err) throw err;
        });
    });
});
