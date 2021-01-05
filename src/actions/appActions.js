import { 
    CAMBIAR_PAG
} from "../types/index"


export function CambiarPagAction(nombre) {
    return (dispatch) => {
        dispatch ( CambiarPag(nombre) )
    }
}


const CambiarPag = nombre => ({
    type: CAMBIAR_PAG,
    payload: nombre
});