// import datos con las funciones necesarias
// import { platform, release, arch, cpus, freemem, totalmem, uptime } from 'node:os';
/* 
console.log('Informacion del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo:       ', platform());
console.log('Version del sistema operativo:      ', release());
console.log('Arquitectura del sistema operativo: ', arch());
console.log('CPU del sistema operativo:          ', cpus());
console.log('Memoria libre'                       , freemem()/1024/1024, 'MB');
console.log('Memoria total'                       , totalmem()/1024/1024, 'MB');
console.log('uptime'                              , uptime() / 60 / 60,'horas');
*/

// import general
import os from 'node:os';

console.log('Informacion del sistema operativo:');
console.log('----------------------------------');

console.log('Nombre del sistema operativo:       ', os.platform());
console.log('Version del sistema operativo:      ', os.release());
console.log('Arquitectura del sistema operativo: ', os.arch());
console.log('CPU del sistema operativo:          ', os.cpus());
console.log('Memoria libre'                       , os.freemem()/1024/1024, 'MB');
console.log('Memoria total'                       , os.totalmem()/1024/1024, 'MB');
console.log('uptime'                              , os.uptime() / 60 / 60,'horas');