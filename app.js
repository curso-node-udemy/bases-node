const { argv } = require('./config/yargs');
var colors = require('colors/safe');
const { crearArchivo, listarArchivo } = require('./multiplicar/multiplicar');

let comando = argv._[0];

switch(comando) {
  case 'listar':
    listarArchivo(argv.base, argv.limite)
      .then()
      .catch( err => console.log(colors.red(err)));
    break;
  case 'crear':
    crearArchivo(argv.base, argv.limite)
      .then( archivo => console.log(`El archivo ${archivo} ha sido creado.`))
      .catch( err => console.log(colors.red(err)));
    break;
  default:
    console.log('Comando no reconocido'.red);
}

