import {
    OBTENER_DATOS
} from "../types/index"


const initialState = {

    ingresos: [],
    gastos: [],
    meta: ""
}


export default function ( state = initialState, action ) {
    switch(action.type) {

        case OBTENER_DATOS:
            return {
                ...state,
                ingresos: action.payload.ingresos,
                gastos: action.payload.gastos,
                meta: action.payload.meta
            }
        
        default:
            return state;
    }
}