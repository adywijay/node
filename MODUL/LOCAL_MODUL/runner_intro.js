let intro = require('../LOCAL_MODUL/file_modul/intro_myself');


let data = {
    name: 'Kim Liem Xeon',
    age: 25,
    address: 'Mojokerto'
};

intro.getName(data.name);
intro.getAddress(data.address);
intro.getAge(data.age);