
import {
    AGREGAR_CUENTA,
    AGREGAR_CUENTA_ERROR,
    AGREGAR_CUENTA_EXITO,
    OBTENER_CUENTAS,
    OBTENER_CUENTAS_ERROR,
    OBTENER_CUENTAS_EXITO
} from "../types/index"

import clienteAxios from "../config/axios"

//SweetAlert2
import Swal from "sweetalert2"

//Crear nuevas cuentas
export function crearNuevaCuentaAction(cuenta) {
    return (dispatch) => {  
        dispatch ( agregarCuenta() );


        try {

            //Insertar en la API
            clienteAxios.post('/cuentas', cuenta)

            //Para el JSON de la app
            clienteAxios.post('/cuentasInfo', cuenta)

            //Si todo sale bien, actualizar el state
            dispatch ( agregarCuentaExito( cuenta ) );


            //Alerta
            Swal.fire (
                "Correcto",
                "Se registró correctamente",
                "success"
            )
        } catch (error) {

            console.log(error)
            //Si hay un error cambiar el state
            dispatch ( agregarCuentaError() )
        }   


    }
}



//Crear las funciones

const agregarCuenta = () => ({
    type: AGREGAR_CUENTA
});


const agregarCuentaExito = (cuenta) => ({
    type: AGREGAR_CUENTA_EXITO,
    payload: cuenta
});

const agregarCuentaError = () => ({
    type: AGREGAR_CUENTA_ERROR,
});




//========Obtener cuentas========//
export function obtenerCuentasAction( ) {
    return async (dispatch) => {
        dispatch ( obtenerCuentas() );


        try {
            const cuentasApi = await clienteAxios.get('/cuentas');

            dispatch ( obtenerCuentasExitosa(cuentasApi.data) )
        } catch (error) {
            console.log(error)
            dispatch ( obtenerCuentasError() )
        }
    }
};


const obtenerCuentas = () => ({
    type: OBTENER_CUENTAS
});


const obtenerCuentasExitosa = cuentas => ({
    type: OBTENER_CUENTAS_EXITO,
    payload: cuentas
});


const obtenerCuentasError = () => ({
    type: OBTENER_CUENTAS_ERROR
});