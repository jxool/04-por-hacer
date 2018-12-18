const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion: {
            demand: true,
            alias: 'd',
            des: 'Descripción de la tarea por hacer'
        }
    })
    .command('actualizar', 'Actualizar el estado completado de una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            des: 'Descripción de la tarea por hacer'
        },
        completado: {
            default: true,
            alias: 'c',
            des: 'Marca como completado o pendiente una tarea'
        }
    })
    .command('borrar', 'borra una tarea', {
        descripcion: {
            demand: true,
            alias: 'd',
            des: 'Descripción de la tarea a borrar'
        }
    })
    .help()
    .argv;

module.exports = {
    argv
}