const os = require('os');

let currentOS = {
    name: os.type(),
    architecture: os.arch(),
    platform: os.platform(),
    release: os.release(),
    version: os.version(),
    serv_up: os.uptime(),
    mem_total: os.totalmem(),
    free_mem: os.freemem()
};

console.log(currentOS);