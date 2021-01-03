
import {
    AGREGAR_CUENTA,
    AGREGAR_CUENTA_ERROR,
    AGREGAR_CUENTA_EXITO
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
            return {
                ...state,
                loading: false,
                error: true
            }
        default:
            return state;
    }
}