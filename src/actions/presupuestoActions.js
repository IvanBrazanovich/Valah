import { 
    CAMBIAR_PAG,
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_SHOW,
    CHANGE_META,
    ACTIVAR_ERROR,
    AGREGAR_INGRESO,
    AGREGAR_INGRESO_ERROR,
    AGREGAR_INGRESO_EXITO,
    OBTENER_INFOUSUARIO,
    OBTENER_INFOUSUARIO_ERROR,
    OBTENER_INFOUSUARIO_EXITO,
    CUENTA_ACTUAL


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
            
            const actualId = actualObject[0].id;

            console.log(actualId)

               
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
    return (dispatch) => {
        dispatch ( crearIngreso() )

        try {


            //Post en la api 
            clienteAxios.put(`/cuentasInfo/${actualId}`, ingreso);

            

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