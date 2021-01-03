
import {
    AGREGAR_CUENTA,
    AGREGAR_CUENTA_ERROR,
    AGREGAR_CUENTA_EXITO
} from "../types/index"

import clienteAxios from "../config/axios"

//Crear nuevas cuentas
export function crearNuevaCuentaAction(cuenta) {
    return (dispatch) => {  
        dispatch ( agregarCuenta() );


        try {

            //Insertar en la API
            clienteAxios.post('/cuentas', cuenta)

            //Si todo sale bien, actualizar el state
            dispatch ( agregarCuentaExito( cuenta ) );
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