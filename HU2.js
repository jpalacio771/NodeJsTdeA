const opciones={
    id:{
        demand:true,
        alias:'i'
    }, 
    nombre:{
        demand:true,
        alias:'n'
    },
    cedula:{
        demand: true,
        alias:'c'
    }
}
const {cursos} = require ('./HU1');
const archivo = 'prematriculados.txt'
const argv= require('yargs').command('inscribir',  'Para prematricular', opciones).argv
const argv2= require('yargs').command('mirarCursos',  'Ver cursos', opciones).argv2


let idcurso = cursos.find(function(curso) {
    return curso.id == argv.i})

const fs=require('fs');

let crearArchivo=(idcurso)=>{
    cadena = 'El estudiante '+ argv.n + '\nCon cedula :'+ argv.c + '\nSe registró en el curso ' + idcurso.nombre +
            '\nCon duracion de '+ idcurso.duracion+'\nY un valor de '+ idcurso.valor;
    fs.writeFile(archivo,  cadena,(err)=>{
    if (err) throw(err);
        console.log('Se ha credo el archivo')
    });
}

crearArchivo(idcurso);

