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


const initialState = {

    cuentaActual: "",
    proyectos: [],
    showProyecto: false,
    showAdd: false,
    loading: false,
    modoEdicion: false,
    escribiendo: false
}


export default function ( state = initialState, action ) {
    switch(action.type) {
        case SHOW_PROYECTO:
            return {
                ...state,
                showProyecto: true,
            }
        case SHOW_ADD: 
            return {
                ...state,
                showAdd: true
            }
        case SHOW_PROYECTO_FALSE:
            return {
                ...state,
                showProyecto: false
            }
        case SHOW_ADD_FALSE:
            return {
                ...state, 
                showAdd: false
            }
        case OBTENER_PROYECTOS:
        case ADD_PROYECTO:
        case ADD_TAREA:
        case ELIMINAR_TAREA:
        case ELIMINAR_PROYECTO:
        case EDITAR_TAREA:
        case CAMBIAR_STATE:
            return {
                ...state,
                loading: true
            }

        case OBTENER_PROYECTOS_EXITO:
            return {
                ...state,
                proyectos: action.payload,
                loading: false
            }
        case OBTENER_PROYECTOS_ERROR:
        case ADD_PROYECTO_ERROR:
        case ADD_TAREA_ERROR:
        case ELIMINAR_TAREA_ERROR:
        case EDITAR_TAREA_ERROR:
        case ELIMINAR_PROYECTO_ERROR:
        case CAMBIAR_STATE_ERROR:
            return {
                ...state,
                errorApi: true,
                loading: false
            }
        case ADD_PROYECTO_EXITO:
            return {
                ...state,
                proyectos: [...state.proyectos, action.payload],
                loading: false,
                errorApi: false
            }
        case ADD_TAREA_EXITO:
        case ELIMINAR_TAREA_EXITO:
        case EDITAR_TAREA_EXITO:
        case ELIMINAR_PROYECTO_EXITO:
        case CAMBIAR_STATE_EXITO:
            return {
                ...state,
                proyectos: action.payload,
                loading:false,
                errorApi: false
            }
        case ESCRIBIENDO:
            return {
                ...state,
                escribiendo: action.payload
            }
        
        default:
            return state;
    }
}