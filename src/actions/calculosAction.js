import {
    OBTENER_DATOS
} from "../types/index"

export function obtenerDatosAction (ingresos, gastos, meta) {
    
    return (dispatch) => {
        dispatch( obtenerDatos ({ingresos, gastos, meta}))
    };
};


const obtenerDatos = (array) => ({
    type: OBTENER_DATOS,
    payload: array
});