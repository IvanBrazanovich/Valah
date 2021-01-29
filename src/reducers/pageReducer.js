
import {
    OBTENER_ESCRITOS,
    OBTENER_ESCRITOS_EXITO,
    OBTENER_ESCRITOS_ERROR,
    AGREGAR_ESCRITO,
    AGREGAR_ESCRITO_EXITO,
    AGREGAR_ESCRITO_ERROR,
    ELEGIR_ESCRITO,
    ACTUALIZAR_ESCRITO,
    ACTUALIZAR_ESCRITO_EXITO,
    ACTUALIZAR_ESCRITO_ERROR


} from "../types/index"

const initialState = {
    cuentaActual: "",
    escritos: [],
    loading: false,
    errorApi: false,
    idEscrito: 0

}


export default function (state = initialState,action ) {

    switch(action.type) {

        case OBTENER_ESCRITOS:
        case AGREGAR_ESCRITO:
        case ACTUALIZAR_ESCRITO:
            return {
                ...state,
                loading: true
            }

        case OBTENER_ESCRITOS_EXITO:
        case ACTUALIZAR_ESCRITO_EXITO:
            return {
                ...state,
                loading: false,
                escritos: action.payload,
                errorApi: true
            }

        case OBTENER_ESCRITOS_ERROR:
        case AGREGAR_ESCRITO_ERROR:
        case ACTUALIZAR_ESCRITO_ERROR:
            return {
                ...state,
                loading: false,
                errorApi: true
            }
        
        case AGREGAR_ESCRITO_EXITO:
            return {
                ...state,
                escritos: [...state.escritos, action.payload]
            }
        case ELEGIR_ESCRITO:
            return {
                ...state,
                idEscrito: action.payload
            }


        default:
            return state;
    }
}