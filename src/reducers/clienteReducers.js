
import {
    AGREGAR_CUENTA,
    AGREGAR_CUENTA_ERROR,
    AGREGAR_CUENTA_EXITO,
    OBTENER_CUENTAS,
    OBTENER_CUENTAS_ERROR,
    OBTENER_CUENTAS_EXITO
} from "../types/index"

//Cada reducer tiene su propio state

const initialState = {
    cuentas: [],
    error: null,
    loading: false
}

export default function (state = initialState, action) {
    switch(action.type) {
        case AGREGAR_CUENTA:
        case OBTENER_CUENTAS:
            return {
                ...state,
                loading: true
            }
        
        case AGREGAR_CUENTA_EXITO:
            return {
                ...state,
                loading: false,
                cuentas: [ ...state.cuentas, action.payload]
            }
        
        case AGREGAR_CUENTA_ERROR:
        case OBTENER_CUENTAS_ERROR:
            return {
                ...state,
                loading: false,
                error: true
            }

        case OBTENER_CUENTAS_EXITO:
            return {
                ...state,
                loading: false,
                error: false,
                cuentas: action.payload
            }
        default:
            return state;
    }
}