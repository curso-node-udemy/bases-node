const fs = require('fs');
const colors = require('colors');

// async
let crearArchivo = async (base, limite) => {
 
  if (!Number(base)) {
    throw new Error(`El valor introducido ${base} no es un número`);
  }
  let data = ``;
  for (let i=1; i<=limite; i++) {
    data += (`${base} * ${i} = ${base * i} \n`);
  }
  
  fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
    if (err) throw new Error(err);
  });
  return `tabla-${base}al${limite}.txt`;
}

// Promise
// let crearArchivo = (base) => {

//   return new Promise( (resolve, reject) => {

//     if (!Number(base)) {
//       reject(`El valor introducido ${base} no es un número`)
//       return
//     }
//     let data = ``;
//     for (let i=1; i<=10; i++) {
//       data += (`${base} * ${i} = ${base * i} \n`);
//     }
    
//     fs.writeFile(`tablas/tabla-${base}.txt`, data, (err) => {
//       err ? reject(err) : resolve(`tabla-${base}.txt`);
//     });
//   });
// }

listarArchivo = async (base, limite) => {
  if (!Number(base)) {
    throw new Error(`El valor introducido ${base} no es un número`);
  }
  for (let i=1; i<=limite; i++) {
    console.log(`${base} * ${i} = ${base * i}`.green);
  }
  return `Impresión tabla del ${base} al ${limite}`;
}
module.exports = { crearArchivo, listarArchivo };
