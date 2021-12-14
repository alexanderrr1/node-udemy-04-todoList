const { Resolver } = require('dns');

require('colors');

const mostrarMenu = () => {

    return new Promise((resolve => {

        console.clear();
        console.log('========================'.green);
        console.log(' Seleccione una opción'.green);
        console.log('========================\n'.green);
    
        console.log(`${'1.'.green} Crear tarea`);
        console.log(`${'2.'.green} Listar tareas`);
        console.log(`${'3.'.green} Listar tareas completadas`);
        console.log(`${'4.'.green} Listar tareas pendientes`);
        console.log(`${'5.'.green} Completar tarea(s)`);
        console.log(`${'6.'.green} Borrar tarea`);
        console.log(`${'0.'.green} Salir \n`);
    
        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question('Seleccione una opción: ', (opt) => {
            readLine.close();
            resolve(opt);
        });

    }));

}

const pausa = () => {

    return new Promise(resolve => {

        const readLine = require('readline').createInterface({
            input: process.stdin,
            output: process.stdout
        });
    
        readLine.question(`\nPresione ${'Enter'.green} para continuar\n`, (opt) => {
            readLine.close();
            resolve();
        });

    });

}

module.exports = {
    mostrarMenu,
    pausa
}