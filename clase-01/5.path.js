const path = require('node:path');

// barra separadora de carpetas segund SO
console.log(path.sep);

// unir rutas con path join
const filePath = path.join('c:', 'Users', 'Julio', 'oneDrive', 'Escritorio', 'Proyectos', 'node', 'cursonode-js', 'clase-01', 'archivo.txt');
console.log(filePath);

const base = path.basename('C:\\Users\\Julio\\OneDrive\\Escritorio\\Proyectos\\node\\cursonode-js\\clase-01\\archivo.txt');
console.log(base);

const filename = path.basename(filePath, '.txt');
console.log(filename);

const extension = path.extname('C:\\Users\\Julio\\OneDrive\\Escritorio\\Proyectos\\node\\cursonode-js\\clase-01\\archivo.txt');
console.log(extension);