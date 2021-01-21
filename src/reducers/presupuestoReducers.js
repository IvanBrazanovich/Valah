import {
    CAMBIAR_PAG,
    CHANGE_LAYOUT,
    CHANGE_LAYOUT_SHOW,
    CHANGE_META,
    ACTIVAR_ERROR,
    AGREGAR_INGRESO,
    AGREGAR_INGRESO_EXITO,
    AGREGAR_INGRESO_ERROR,
    AGREGAR_GASTO,
    AGREGAR_GASTO_EXITO,
    AGREGAR_GASTO_ERROR,
    CUENTA_ACTUAL,
    OBTENER_INFOUSUARIO_EXITO,
    OBTENER_INFOUSUARIO,
    OBTENER_INFOUSUARIO_ERROR,
    AGREGAR_META,
    AGREGAR_META_ERROR,
    AGREGAR_META_EXITO,
    OBTENER_INGRESOS,
    OBTENER_META,
    OBTENER_GASTOS,
    CHANGE_GASTO,
    ELIMINAR_GASTO,
    ELIMINAR_GASTO_ERROR,
    ELIMINAR_GASTO_EXITO,
    ELIMINAR_INGRESO,
    ELIMINAR_INGRESO_ERROR,
    ELIMINAR_INGRESO_EXITO
    
} from "../types/index"


const initialState = {

    cuentaActual: "",
    /*El presupuesto va a tener diferentes provenientes de y al final se suman
        el objeto sería así
        {nombre del ingreso, monto, tipo: pasivo/activo}
        {Tengo 4 casas, 20 mil los alquileres, tipo: pasivo}
    */
    ingresos:[],
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
    actualId: "",
    showGasto: false
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
                showmeta: false,
                showGasto: false
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
        case CHANGE_GASTO:
            return {
                ...state,
                showGasto: true
            }
        case ACTIVAR_ERROR:
            return {
                ...state,
                error: action.payload
            }
        case AGREGAR_INGRESO:
        case OBTENER_INFOUSUARIO:
        case AGREGAR_META:
        case AGREGAR_GASTO:
        case ELIMINAR_GASTO:
        case ELIMINAR_INGRESO:
            return {
                ...state,
                loading: true
            }
        case AGREGAR_META_EXITO:
            return {
                ...state,
                meta: action.payload,
                errorApi: false
            }
        case AGREGAR_INGRESO_EXITO:
            return {
                ...state,
                ingresos: [...state.ingresos, action.payload],
                errorApi: false
            }
        case AGREGAR_GASTO_EXITO:
            return {
                ...state,
                gastos: [...state.gastos, action.payload],
                errorApi: false
            }
        case AGREGAR_META_ERROR:
        case OBTENER_INFOUSUARIO_ERROR:
        case AGREGAR_INGRESO_ERROR:
        case ELIMINAR_GASTO_ERROR:
        case ELIMINAR_INGRESO_ERROR:
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
                actualId: action.payload,
                errorApi: false
            }
        case OBTENER_INGRESOS:
            return {
                ...state,
                ingresos: action.payload
            }
        case OBTENER_META:
            return {
                ...state,
                meta: action.payload
            }
        case OBTENER_GASTOS:
            return {
                ...state,
                gastos: action.payload
            }
        case ELIMINAR_GASTO_EXITO:
            return {
                ...state,
                gastos: action.payload,
                errorApi: false
            }
        case ELIMINAR_INGRESO_EXITO:
            return {
                ...state,
                errorApi: false,
                ingresos: action.payload
            }
    }
}


