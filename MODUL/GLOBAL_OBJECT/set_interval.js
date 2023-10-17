/**
 * Set interval dengan callback
 */
function setIntervals() {
    console.log('ini interval');
}

setInterval(setIntervals, 1000);


/**
 * Interval langsung
 */

setInterval(() => {
    console.log('dsfdf');
}, 2000);


/**
 * Clear interval
 */
let st_intv = setInterval(() => {
    console.log('ini clear');
}, 2000);

clearInterval(st_intv);