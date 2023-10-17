/* ================================== All Export Method ================================================ */
let lingkaran = {

    getLuas(params_r = 0) {
        let phi = 3.14;
        let rumus_luas = phi * Math.pow(params_r, 2);
        let luas_kalkulasi = parseFloat(rumus_luas);

        if (typeof (params_r) !== 'number') {
            throw new Error('Parameter harus angka.!');
        }

        console.log(
            'R = ' + ' ' + params_r + '\n\n\n',
            'Luas Lingkaran : ' + ' ' + luas_kalkulasi
        );
    },

    getKeliling(params_r = 0) {
        let phi = 3.14;
        let rumus_k = (2 * (phi * params_r));
        let kel_kalkulasi = parseFloat(rumus_k);

        if (typeof (params_r) !== 'number') {
            throw new Error('Parameter harus angka.!');
        }

        console.log(
            'R = ' + ' ' + params_r + '\n\n\n\n\n',
            'Keliling Lingkaran : ' + ' ' + kel_kalkulasi
        );
    }


};

module.exports = lingkaran;