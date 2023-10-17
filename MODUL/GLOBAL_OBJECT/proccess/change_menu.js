const swMenu = require('./export_menu');

let initChange = parseInt(process.argv[2]);


switch (true) {
    case initChange === 1:
        console.log('Hallo');
        break;
    case initChange === 2:
        const today = new Date();
        const year = today.getFullYear();
        const month = String(today.getMonth() + 1).padStart(2, '0'); // Tambah 1 karena bulan dimulai dari 0
        const day = String(today.getDate()).padStart(2, '0');
        const hours = String(today.getHours()).padStart(2, '0');
        const minutes = String(today.getMinutes()).padStart(2, '0');
        const seconds = String(today.getSeconds()).padStart(2, '0');

        const formattedDateTime = `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
        console.log(formattedDateTime);
        break;
    default:
        swMenu.showMenu();
        setTimeout(() => {
            console.log('Key value is null ............ \n' + 'please input keys')
        }, 2000);

        break;
}