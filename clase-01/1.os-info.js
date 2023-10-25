const os = require('node:os');

console.log('Informacion del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo:       ', os.platform());
console.log('Version del sistema operativo:      ', os.release());
console.log('Arquitectura del sistema operativo: ', os.arch());
console.log('CPU del sistema operativo:          ', os.cpus());
console.log('Memoria libre'                       , os.freemem()/1024/1024, 'MB');
console.log('Memoria total'                       , os.totalmem()/1024/1024, 'MB');
console.log('uptime'                              , os.uptime() / 60 / 60,'horas');