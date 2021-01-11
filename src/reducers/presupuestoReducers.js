import {
    CAMBIAR_PAG
} from "../types/index"


const initialState = {
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
    meta: ""
}


export default function ( state = initialState, action ) {

    switch(action.type) {
        case CAMBIAR_PAG:
            return {
                ...state,
                pagactual: action.payload
            }


            default:
                return state;
    }
}