/* 
Uno de los modulos más importante en Node.js es el módulo os, 
que nos permite obtener información sobre el sistema operativo en el que estamos trabajando.
*/
const fs = require('node:fs'); // a partir de Node 16, se recomienda poner node: antes del modulo.

// sincrono
const stats = fs.statSync('./archivo.txt');
console.log(
    stats.isFile(), // si es un Fichero
    stats.isDirectory(), // si es un directorio
    stats.isSymbolicLink(), // si es un enlace simbólico
    stats.size, // tamaño del bytes
)