import { combineReducers } from "redux"

import  cuentasReducer from "./clienteReducers"


export default combineReducers ({
    cuentas: cuentasReducer
});