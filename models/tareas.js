const Tarea = require('./tarea')
require('colors');

/**
 * _listado: 
 *  { 'uuid-231231231-123123123-2: { id:12, desc:asd, completadoEn:94 }  }
*/

class Tareas {

    _listado = {};

    get listadoArr() {

        const listado = [];

        Object.keys(this._listado).forEach( key => {
            listado.push(this._listado[key]);
        })

        return listado;

    }

    constructor(){
        this._listado = {};
    }

    borrarTarea( id = '') {

        if( this._listado[id] ) {
            delete this._listado[id];
        }

    }

    cargarTareasFromArray( tareas = [] ) {
        
        tareas.forEach( tarea => {
            this._listado[ tarea.id ] = tarea;
        });
        
    }

    crearTarea( desc = '' ) {

        const tarea = new Tarea(desc);
        this._listado[tarea.id] = tarea;

    }

    listadoCompleto() {

        console.log();
        this.listadoArr.forEach( (tarea, i) => {
            const index = `${ i + 1 }`.green
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? 'Completada'.green : 'Pendiente'.red;
            console.log(`${index} ${desc} :: ${estado}`);
        });

    }

    listarPendientesCompletadas( completadas = true ) {

        console.log();
        const listadoFiltrado = completadas 
                                    ? this.listadoArr.filter(tarea => tarea.completadoEn)
                                    : this.listadoArr.filter(tarea => !tarea.completadoEn);
    
        listadoFiltrado.forEach( (tarea, i) => {
            const index = `${ i + 1 }.`.green
            const { desc, completadoEn } = tarea;
            const estado = (completadoEn) ? completadoEn.green : 'Pendiente'.red;
            console.log(`${index} ${desc} :: ${estado}`);  
        });

    }

    toggleCompletadas( ids = [] ) {
        ids.forEach( id => {
            const tarea = this._listado[id];
            if( !tarea.completadoEn ) {
                tarea.completadoEn = new Date().toISOString();
            }
        });
        this.listadoArr.forEach( tarea => {
            if ( !ids.includes(tarea.id) ) {
                this._listado[tarea.id].completadoEn = null;
            }
        })
    } 

}

module.exports = Tareas;