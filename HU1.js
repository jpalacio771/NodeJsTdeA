const cursos=[{
        id: 001,
        nombre:'Inglés',
        duracion: '4 meses',
        valor: 100000
    },
    {
        id: 002,
        nombre:'Portugués',
        duracion: '6 meses',
        valor: 200000
    },
    {
        id: 0003,
        nombre: 'Francés',
        duracion: '1 año',
        valor: 300000
}]

let curso1 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id,nombre, duracion, valor);
}, 0);
}

let curso2 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id, nombre, duracion, valor);
}, 2000);
}

let curso3 = (id, nombre, duracion, valor, callback)=>{
    setTimeout(function(){
    callback(id, nombre, duracion, valor);
}, 4000);
}

curso1(001,'inglés','1 semana', 1000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + cursos[0].id + '\nNombre: '+ cursos[0].nombre + 
    '\nDuración: ' + cursos[0].duracion + '\nValor: ' + cursos[0].valor);});

curso2(002,'portugés','2 meses', 2000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + cursos[1].id + '\nNombre: '+ cursos[1].nombre + 
    '\nDuración: ' + cursos[1].duracion + '\nValor: ' + cursos[1].valor);});

curso3(003,'francés','3 año', 3000000,function(id,nombre, duracion, valor){
    console.log('Curso' + '\n' + 'ID: ' + cursos[2].id + '\nNombre: '+ cursos[2].nombre + 
    '\nDuración: ' + cursos[2].duracion + '\nValor: ' + cursos[2].valor);});

    module.exports = {
        cursos
    };