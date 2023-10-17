const fs = require('fs');

const content = 'Nostrud culpa exercitation enim cupidatat fugiat mollit in. Aute eiusmod aliqua eiusmod et commodo nostrud irure aliqua excepteur. Consectetur elit magna ipsum qui irure incididunt sit mollit exercitation proident consectetur tempor ea. Et excepteur officia ex anim labore do commodo sit duis adipisicing dolor eiusmod mollit voluptate. Eiusmod ea nulla do amet. Irure aliquip aliquip duis sint aute mollit ut. Fugiat est qui cillum officia est culpa qui.';

// Menulis file secara asynchronous
fs.writeFile('io_file/coba1.txt', content, 'utf8', (err) => {
    if (err) {
        console.error(err);
        return;
    }
    console.log('File berhasil ditulis.');
});

// Menulis file secara synchronous

/**
 * 
 *
    try {
        fs.writeFileSync('nama_file.txt', content, 'utf8');
        console.log('File berhasil ditulis.');
    } catch (err) {
        console.error(err);
    }
*/
