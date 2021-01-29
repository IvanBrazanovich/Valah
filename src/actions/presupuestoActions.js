import { 
    CAMBIAR_PAG,
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_SHOW,
    CHANGE_META,
    ACTIVAR_ERROR,
    AGREGAR_INGRESO,
    AGREGAR_INGRESO_ERROR,
    AGREGAR_INGRESO_EXITO,
    AGREGAR_META,
    AGREGAR_META_ERROR,
    AGREGAR_META_EXITO,
    OBTENER_INFOUSUARIO,
    OBTENER_INFOUSUARIO_ERROR,
    OBTENER_INFOUSUARIO_EXITO,
    CUENTA_ACTUAL,
    OBTENER_META,
    OBTENER_INGRESOS,
    OBTENER_GASTOS,
    CHANGE_GASTO,
    AGREGAR_GASTO,
    AGREGAR_GASTO_EXITO,
    AGREGAR_GASTO_ERROR,
    ELIMINAR_GASTO,
    ELIMINAR_GASTO_ERROR,
    ELIMINAR_GASTO_EXITO,
    ELIMINAR_INGRESO,
    ELIMINAR_INGRESO_ERROR,
    ELIMINAR_INGRESO_EXITO


} from "../types/index"

import clienteAxios from "../config/axios"


export function obtenerCuentaActualAction(cuenta) {
    return(dispatch) => {
        dispatch( obtenerCuentaActual(cuenta) )
    }
}

const obtenerCuentaActual = (cuenta) =>({
    type: CUENTA_ACTUAL,
    payload: cuenta
});


//ObtenerInfo


export function obtenerInfoUsuarioAction(cuentaActual) {

    

      return async (dispatch) => {
        dispatch( obtenerInfoUsuario() )

        try {

              

            
            const cuentas = await clienteAxios.get(`/cuentasInfo`) 
            const cuentasInfo = cuentas.data;
            const actualObject = cuentasInfo.filter( cuenta => cuenta.email === cuentaActual);

           

            if ( actualObject[0].ingresos ) {
                dispatch( storeIngresos(actualObject[0].ingresos) )
            } 
            
            if ( actualObject[0].meta ) {
                dispatch ( storeMeta( actualObject[0].meta ) )
            }

            if ( actualObject[0].gastos ) {
                dispatch ( storeGastos( actualObject[0].gastos ) )
            }

            
             

            const actualId = actualObject[0].id;


               
          dispatch( obtenerInfoUsuarioExito(actualId) )
 
        } catch(error) {
            console.log(error)
             dispatch( obtenerInfoUsuarioError() ) 

        }
    };
}


    const obtenerInfoUsuario = () => ({
        type: OBTENER_INFOUSUARIO
    });



 const obtenerInfoUsuarioExito = actualId => ({
        type: OBTENER_INFOUSUARIO_EXITO,
        payload: actualId
    });

 const obtenerInfoUsuarioError = () => ({
        type: OBTENER_INFOUSUARIO_ERROR
    });

    const storeIngresos = ingresos => ({
    type: OBTENER_INGRESOS,
    payload: ingresos
});

    const storeMeta = meta => ({
    type: OBTENER_META,
    payload: meta
});

  const storeGastos= gastos => ({
    type: OBTENER_GASTOS,
    payload: gastos
});

//Change page
export function CambiarPagAction(nombre) {
    return (dispatch) => {
        dispatch ( CambiarPag(nombre) )
    }
}


const CambiarPag = nombre => ({
    type: CAMBIAR_PAG,
    payload: nombre
});

export function changeLayoutAction(e) {

    
    return (dispatch) => {

        if (e === "presupuesto") {
        dispatch ( ChangeLayoutShow() )
        } else if (e === "meta"){
        dispatch ( ChangeMeta() )
        } else {
        dispatch( ChangeClose() )
        }
        if (e === "gasto") {
            dispatch( changeGasto() )
        }
    }
}


const ChangeClose = () => ({
    type: CHANGE_LAYOUT
});

const ChangeLayoutShow = () => ({
    type: CHANGE_LAYOUT_SHOW
});

const ChangeMeta = () => ({
    type: CHANGE_META
});

const changeGasto = () => ({
    type: CHANGE_GASTO
});

//Errores

export function activarErrorAction (state) {
    return (dispatch) => {
        dispatch( activarError(state) )
    };
};

const activarError = state => ({
    type: ACTIVAR_ERROR,
    payload: state
});


//Post objects 


export function crearNuevoIngresoAction(ingreso, actualId) {
    return  async (dispatch) => {
        dispatch ( crearIngreso() )

        try {

            //Acceder al json de la app 
            const cuentaInfo = await clienteAxios.get(`cuentasInfo/${actualId}`);



            const cuenta = cuentaInfo.data;


            if(cuenta.ingresos === undefined) {
                 cuenta.ingresos = [];
            } 


                cuenta.ingresos.push(ingreso)


             //Post en la api 

            clienteAxios.put(`/cuentasInfo/${actualId}`, cuenta);


            

            dispatch( crearIngresoExito(ingreso) ) 

            
        } catch (error ) {
            console.log(error)

            dispatch( crearIngresoError() )

        }
    };
};

const crearIngreso = () => ({
    type: AGREGAR_INGRESO
});



const crearIngresoExito = (ingreso) => ({
    type: AGREGAR_INGRESO_EXITO,
    payload: ingreso
});


const crearIngresoError = () => ({
    type: AGREGAR_INGRESO_ERROR
});


//Crear meta 

export function crearNuevaMetaAction(meta, actualId) {

    

    return async (dispatch ) => {
        dispatch( crearMeta() );

        try {
             //Acceder al json de la app 
            const cuentaInfo = await clienteAxios.get(`cuentasInfo/${actualId}`);



            const cuenta = cuentaInfo.data;


            cuenta.meta = meta;

             //Post en la api 

            clienteAxios.put(`/cuentasInfo/${actualId}`, cuenta);

            

            dispatch( crearMetaExito(meta) ) 
              

        } catch (error) {
            console.log(error)
            dispatch ( crearMetaError() )

        }

    };  
}


const crearMeta = () => ({
    type: AGREGAR_META
});



const crearMetaExito = (Meta) => ({
    type: AGREGAR_META_EXITO,
    payload: Meta
});


const crearMetaError = () => ({
    type: AGREGAR_META_ERROR
});




export function crearNuevoGastoAction(gasto, actualId) {
    return  async (dispatch) => {
        dispatch ( creargasto() )

        try {

            //Acceder al json de la app 
            const cuentaInfo = await clienteAxios.get(`cuentasInfo/${actualId}`);



            const cuenta = cuentaInfo.data;


            if(cuenta.gastos === undefined) {
                 cuenta.gastos = [];
            } 


                cuenta.gastos.push(gasto)


             //Post en la api 

            clienteAxios.put(`/cuentasInfo/${actualId}`, cuenta);


            dispatch( creargastoExito(gasto) ) 
            
        } catch (error ) {
            console.log(error)

            dispatch( creargastoError() )

        }
    };
};


const creargasto = () => ({
    type: AGREGAR_GASTO
});



const creargastoExito = (gasto) => ({
    type: AGREGAR_GASTO_EXITO,
    payload: gasto
});


const creargastoError = () => ({
    type: AGREGAR_GASTO_ERROR
});




//Eliminar
export function eliminarGastoAction(id, cuentaActual) {
    return async  (dispatch) => {
        dispatch( eliminarGasto() )


        try {
            const cuentas = await clienteAxios.get(`/cuentasInfo`) 
            const cuentasInfo = cuentas.data;
            const actualObject = cuentasInfo.filter( cuenta => cuenta.email === cuentaActual);


            const nuevoArray = actualObject[0].gastos.filter (gasto => gasto.id !== id)

             actualObject[0].gastos = nuevoArray;


            //put en la api 

           clienteAxios.put(`/cuentasInfo/${actualObject[0].id}`, actualObject[0]);

            dispatch( eliminarGastoExito(nuevoArray) )
        }catch(error) {
            console.log(error)
            dispatch( eliminarGastoError() )

        }

        
     };
}

const eliminarGasto = () => ({
    type: ELIMINAR_GASTO
});



const eliminarGastoExito = (nuevoArray) => ({
    type: ELIMINAR_GASTO_EXITO,
    payload: nuevoArray
});


const eliminarGastoError = () => ({
    type: ELIMINAR_GASTO_ERROR
});



//Eliminar
export function eliminarIngresoAction(id, cuentaActual) {
    return async  (dispatch) => {
        dispatch( eliminarIngreso() )


        try {
             const cuentas = await clienteAxios.get(`/cuentasInfo`) 
            const cuentasInfo = cuentas.data;

            const actualObject = cuentasInfo.filter ( cuenta => cuenta.email === cuentaActual);

            const nuevoArray = actualObject[0].ingresos.filter(ingreso => ingreso.id !== id);

            actualObject[0].ingresos = nuevoArray;

            clienteAxios.put(`/cuentasInfo/${actualObject[0].id}`, actualObject[0]);

            dispatch( eliminarIngresoExito(nuevoArray) ) 


           
        }catch(error) {
            console.log(error)
            dispatch( eliminarIngresoError() )

        }

        
     };
}

const eliminarIngreso = () => ({
    type: ELIMINAR_INGRESO
});



const eliminarIngresoExito = (nuevoArray) => ({
    type: ELIMINAR_INGRESO_EXITO,
    payload: nuevoArray
});


const eliminarIngresoError = () => ({
    type: ELIMINAR_INGRESO_ERROR
});