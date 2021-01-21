import { combineReducers } from "redux"

import  cuentasReducer from "./clienteReducers";
import presupuestoReducer from "./presupuestoReducers"

import calculosReducers from "./calculosReducer"



export default combineReducers ({
    cuentas: cuentasReducer,
    presupuesto: presupuestoReducer,
    calculos: calculosReducers
});