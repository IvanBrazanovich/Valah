import {
    CAMBIAR_PAG
} from "../types/index"


const initialState = {
    pagactual: ""
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