const fs = require('node:fs/promises');

console.log('Leyendo el primer archivo...');
fs.readFile('./CensoNacional_Entrenamiento.csv', 'utf-8')
  .then(text => {
    const rows = text.split('\n'); // split into rows by newline

    // Reemplaza \r en cada fila
    const cleanedRows = rows.map(row => row.replace(/\r/g, ''));

    // Split each row into columns
    const data = cleanedRows.map(row => {
      console.log(row.split('&'));
    });
  })
  .catch(err => {
    console.error('Error al leer el primer archivo:', err);
  });

console.log('--> Hacer cosas mientras lee el archivo...');

console.log('Leyendo el segundo archivo...');
fs.readFile('./archivo2.txt', 'utf-8')
  .then(text => {
    console.log('segundo texto:', text);
  })
  .catch(err => {
    console.error('Error al leer el segundo archivo:', err);
  });
