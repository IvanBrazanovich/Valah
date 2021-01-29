import { 
    SHOW_PROYECTO,
    SHOW_PROYECTO_FALSE,
    SHOW_ADD,
    SHOW_ADD_FALSE,
    OBTENER_PROYECTOS,
    OBTENER_PROYECTOS_EXITO,
    OBTENER_PROYECTOS_ERROR,
    ADD_PROYECTO,
    ADD_PROYECTO_EXITO,
    ADD_PROYECTO_ERROR,
    ADD_TAREA,
    ADD_TAREA_EXITO,
    ADD_TAREA_ERROR,
    ELIMINAR_TAREA,
    ELIMINAR_TAREA_EXITO,
    ELIMINAR_TAREA_ERROR,
    EDITAR_TAREA,
    EDITAR_TAREA_EXITO,
    EDITAR_TAREA_ERROR,
    ELIMINAR_PROYECTO,
    ELIMINAR_PROYECTO_ERROR,
    ELIMINAR_PROYECTO_EXITO,
    ESCRIBIENDO,
    CAMBIAR_STATE,
    CAMBIAR_STATE_ERROR,
    CAMBIAR_STATE_EXITO
    
} from "../types/index"

import clienteAxios from "../config/axios"




export function obtenerProyectosAction(cuentaActual) {

    return async(dispatch) => {
        dispatch ( obtenerProyectos() )
        try {

            const cuentas =  await clienteAxios.get(`/cuentasInfo`);
            
            
            const cuenta = cuentas.data.filter( cuenta => cuenta.email === cuentaActual )

            if ( cuenta[0].proyectos ) {
                dispatch( obtenerProyectosExito(cuenta[0].proyectos) )
            }

        } catch (error) {
            console.log(error)
            dispatch ( obtenerProyectosError() )
        }
    }
}



const obtenerProyectos = () => ({
    type: OBTENER_PROYECTOS
});

const obtenerProyectosExito = ( proyectos ) => ({
    type: OBTENER_PROYECTOS_EXITO,
    payload: proyectos
});


const obtenerProyectosError = (  ) => ({
    type: OBTENER_PROYECTOS_ERROR
});


export function cambiarShowAction (type) {

    
    return (dispatch) => {

        if (type === "proyecto") {
            dispatch( cambiarShow() )
        } else if (type === "tarea") {
            dispatch ( cambiarShowFalse() )
        }

        dispatch( cambiarShowAdd() )
    };
}

const cambiarShow = () => ({
    type: SHOW_PROYECTO
});



const cambiarShowFalse = () => ({
    type: SHOW_PROYECTO_FALSE
});



const cambiarShowAdd = () => ({
    type: SHOW_ADD
});




/*Ocultar */

export function ShowAddFalseAction () {
    return (dispatch) => {
        dispatch( showAddFalse() )
    };  
};


const showAddFalse = () => ({
    type: SHOW_ADD_FALSE
});



/*Añadir tarea o proyecto */
                
export function addProyectoAction(name, cuentaActual) {

    return async (dispatch)  => {

        dispatch( addProyecto() )

        const cuentas = await clienteAxios.get(`/cuentasInfo`);

        const cuentaObject = cuentas.data.filter( cuenta => cuenta.email === cuentaActual )

        const { id } = cuentaObject[0]; 


      

            const proyectoArray = {
                name,
                id: new Date().getTime()
            }



            if ( !cuentaObject[0].proyectos ) {
        
                cuentaObject[0].proyectos = [proyectoArray]

                try {

                   await clienteAxios.put(`cuentasInfo/${id}`, cuentaObject[0])
                    dispatch ( addProyectoExito( proyectoArray ))
                } catch (error) {
                    console.log(error)
                    dispatch ( addProyectoError())

                }
            } else if ( cuentaObject[0].proyectos) {
                try {
                    cuentaObject[0].proyectos = [ ...cuentaObject[0].proyectos, proyectoArray ];

                    clienteAxios.put(`cuentasInfo/${id}`, cuentaObject[0])

                    dispatch ( addProyectoExito( proyectoArray ))

                } catch (error) {
                    console.log(error)
                    dispatch ( addProyectoError())
                }
                 


                }
         
    }   
};


const addProyecto = () => ({
    type: ADD_PROYECTO
});

const addProyectoExito = (proyecto) => ({
    type: ADD_PROYECTO_EXITO,
    payload: proyecto
});

const addProyectoError = () => ({
    type: ADD_PROYECTO_ERROR
});




//Agregar tarea

export function enviarTareaAction(name, proyectoId, cuentaActual) {

    const tareaArray = {
        name,
        id: new Date().getTime(),
        state: "incompleto"
    }

    
    return async (dispatch) => {
        dispatch( addTarea() )

        const cuentas = await clienteAxios.get("/cuentasInfo");

        const cuenta = cuentas.data.filter( cuenta => cuenta.email === cuentaActual )

        const { id } = cuenta[0];


        const proyectosNuevo = cuenta[0].proyectos.map ( proyecto => {
                
            if(proyecto.id === proyectoId) {
                if ( !proyecto.tareas ) {
                  proyecto.tareas = [tareaArray]

                } else {
                    proyecto.tareas = [...proyecto.tareas, tareaArray]
                }
 

            }
                            return proyecto;

        } ); 


        cuenta[0].proyectos = proyectosNuevo;

        try {
           await  clienteAxios.put(`/cuentasInfo/${id}`, cuenta[0])
            dispatch (addTareaExito(proyectosNuevo))
        } catch (error) {

            console.log(error)
           dispatch (addTareaError())
        }

    }
} 

const addTarea = () => ({
    type: ADD_TAREA
});

const addTareaExito = (proyectos) => ({
    type: ADD_TAREA_EXITO,
    payload: proyectos
});

const addTareaError = () => ({
    type: ADD_TAREA_ERROR
});



//Eliminar tarea

export function EliminarTareaAction (id, proyectoActual, cuentaActual) {
    
    return async (dispatch) => {
        dispatch ( eliminarTarea() );

        const cuentas = await clienteAxios.get("/cuentasInfo");

        const cuenta =  cuentas.data.filter( cuenta => cuenta.email === cuentaActual );

        const idCuenta = cuenta[0].id;

        

        const proyectosNuevo = cuenta[0].proyectos.map ( proyecto => {

            if( proyecto.id === proyectoActual.id ) {
            const tareasNueva = proyecto.tareas.filter ( tarea => tarea.id !== id )
            proyecto.tareas = tareasNueva;
            }

            return proyecto;

        });

        


        try {

            clienteAxios.put(`/cuentasInfo/${idCuenta}`, cuenta[0])

            dispatch ( eliminarTareaExito( proyectosNuevo ) )

        } catch (error) {
            console.log(error)
            dispatch ( eliminarTareaError() )
        }

    }

}



const eliminarTarea = () => ({
    type: ELIMINAR_TAREA
});

const eliminarTareaExito = (proyectosNuevo) => ({
    type: ELIMINAR_TAREA_EXITO,
    payload: proyectosNuevo
});

const eliminarTareaError = () => ({
    type: ELIMINAR_TAREA_ERROR
});




//Editar

export function EditarTareaAction (idTarea, proyectoId, cuentaActual, name) {

    const nombreTarea = name;
    return async (dispatch) => {
        dispatch ( editarTarea() );

        const cuentas = await clienteAxios.get("/cuentasInfo");

        const cuenta =  cuentas.data.filter( cuenta => cuenta.email === cuentaActual );

        const idCuenta = cuenta[0].id;

        

        const proyectosNuevo = cuenta[0].proyectos.map ( proyecto => {

            if( proyecto.id === proyectoId) {
            const tareasNueva = proyecto.tareas.map( tarea => {
                if(tarea.id === idTarea) {
                    tarea.name = nombreTarea;
                }

                return tarea;
            } );
            proyecto.tareas = tareasNueva;
            }

            return proyecto;

        });



        try {

            clienteAxios.put(`/cuentasInfo/${idCuenta}`, cuenta[0])

            dispatch ( editarTareaExito( proyectosNuevo ) )

        } catch (error) {
            console.log(error)
            dispatch ( editarTareaError() )
        }

    }
}






const editarTarea = () => ({
    type: EDITAR_TAREA
});

const editarTareaExito = (proyectosNuevo) => ({
    type: EDITAR_TAREA_EXITO,
    payload: proyectosNuevo
});

const editarTareaError = () => ({
    type: EDITAR_TAREA_ERROR
});


export function EliminarProyectoAction (id, cuentaActual) {
    return async (dispatch) => {
      dispatch  (eliminarProyecto())
        
        const cuentas = await clienteAxios.get("/cuentasInfo");

        

        const cuenta = cuentas.data.filter ( cuenta => cuenta.email === cuentaActual);

        const idCuenta = cuenta[0].id;

        const proyectosNuevos = cuenta[0].proyectos.filter( proyecto => proyecto.id !== id);
        
        cuenta[0].proyectos = proyectosNuevos;

        try {

            clienteAxios.put(`/cuentasInfo/${idCuenta}`, cuenta[0]);

            dispatch ( eliminarProyectoExito(proyectosNuevos) )

        } catch(error) {
            console.log(error)
            dispatch( eliminarProyectoError() )


        }
    }
}


const eliminarProyecto = () => ({
    type: ELIMINAR_PROYECTO
});

const eliminarProyectoExito = (proyectosNuevo) => ({
    type: ELIMINAR_PROYECTO_EXITO,
    payload: proyectosNuevo
});

const eliminarProyectoError = () => ({
    type: ELIMINAR_PROYECTO_ERROR
});


//Escribiendo
export function escribiendoAction (type) {

    return (dispatch) =>{ 
        if ( type === true ) {
            dispatch ( escribiendo(true) )
        } else if ( type === false ) {
            dispatch ( escribiendo(false) )
        }
    };

};


const escribiendo = (type) => ({
    type: ESCRIBIENDO,
    payload: type
});



export function cambiarStateAction ( idTarea, proyectoActual, cuentaActual, state) {
    

    return async (dispatch) => {
        dispatch ( cambiarState() );

        const cuentas = await clienteAxios.get("/cuentasInfo");

        const cuenta =  cuentas.data.filter( cuenta => cuenta.email === cuentaActual );

        const idCuenta = cuenta[0].id;

        

        const proyectosNuevo = cuenta[0].proyectos.map ( proyecto => {

            if( proyecto.id === proyectoActual.id) {
            const tareasNueva = proyecto.tareas.map( tarea => {
                if(tarea.id === idTarea) {
                    tarea.state = state;
                }

                return tarea;
            } );
            proyecto.tareas = tareasNueva;
            }

            return proyecto;

        });



        try {

            clienteAxios.put(`/cuentasInfo/${idCuenta}`, cuenta[0])

            dispatch ( cambiarStateExito( proyectosNuevo ) )

        } catch (error) {
            console.log(error)
            dispatch ( cambiarStateError() )
        }

    }

}


const cambiarState = () => ({
    type: CAMBIAR_STATE
});

const cambiarStateExito = (proyectosNuevo) => ({
    type: CAMBIAR_STATE_EXITO,
    payload: proyectosNuevo
});

const cambiarStateError = () => ({
    type: CAMBIAR_STATE_ERROR
});