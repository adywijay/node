/**
 * Set timeout dengan callback
 */


function exCallTimeOut() {
    console.log('Ini text');
}

setTimeout(exCallTimeOut, 1000);

/**
 * Timeout langsung
 */
setTimeout(() => {
    console.log('Hallo');
}, 2000);



/**
 * Clear timeout
 */

function exCallTimeOut1() {
    console.log('Ini text');
}

let param_clear = setTimeout(exCallTimeOut1, 1000);
clearTimeout(param_clear);