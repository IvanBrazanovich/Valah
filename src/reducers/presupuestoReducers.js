import {
    CAMBIAR_PAG,
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_SHOW,
    CHANGE_META,
    ACTIVAR_ERROR,
    AGREGAR_INGRESO,
    AGREGAR_INGRESO_EXITO,
    AGREGAR_INGRESO_ERROR,
    CUENTA_ACTUAL,
    OBTENER_INFOUSUARIO_EXITO,
    OBTENER_INFOUSUARIO,
    OBTENER_INFOUSUARIO_ERROR
    
} from "../types/index"


const initialState = {

    cuentaActual: "",
    /*El presupuesto va a tener diferentes provenientes de y al final se suman
        el objeto sería así
        {nombre del ingreso, monto, tipo: pasivo/activo}
        {Tengo 4 casas, 20 mil los alquileres, tipo: pasivo}
    */
    presupuesto:[],
    /*El gasto sería así
    {nombre del gasto, tipo de gasto, cantidad}
    { arroz, básico, 100pesos }
    */
    gastos: [],
    meta: "",
    showpresupuesto: null,
    showmeta: null,
    error: false,
    loading: false,
    errorApi: false,
    actualId: ""
}


export default function ( state = initialState, action ) {

    switch(action.type) {
        case CAMBIAR_PAG:
            return {
                ...state,
                pagactual: action.payload
            }

        case CHANGE_LAYOUT: 
            return {
                ...state, 
                showpresupuesto: false,
                showmeta: false
            }
        case CHANGE_LAYOUT_SHOW: 
            return {
                ...state, 
                showpresupuesto: true
            }
            default:
                return state;
        case CHANGE_META:
            return {
                ...state,
                showmeta: true
            }
        case ACTIVAR_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AGREGAR_INGRESO:
        case OBTENER_INFOUSUARIO:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_INGRESO_EXITO:
            return {
                ...state,
                presupuesto: [...state.presupuesto, action.payload],
                errorApi: false
            }
        case AGREGAR_INGRESO_ERROR:
        case OBTENER_INFOUSUARIO_ERROR:
            return {
                ...state,
                errorApi: true
            }
        case CUENTA_ACTUAL:
            return {
                ...state,
                cuentaActual: action.payload
            }
        case OBTENER_INFOUSUARIO_EXITO:
            return {
                ...state, 
                actualId: action.payload
            }
    }
}


