import { combineReducers } from "redux"

import  cuentasReducer from "./clienteReducers";
import presupuestoReducer from "./presupuestoReducers"


export default combineReducers ({
    cuentas: cuentasReducer,
    presupuesto: presupuestoReducer
});