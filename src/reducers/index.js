import { combineReducers } from "redux"

import  cuentasReducer from "./clienteReducers";
import presupuestoReducer from "./presupuestoReducers"
import administradorReducer from "./administradorReducer"
import calculosReducers from "./calculosReducer"
import pageReducer from "./pageReducer"



export default combineReducers ({
    cuentas: cuentasReducer,
    presupuesto: presupuestoReducer,
    calculos: calculosReducers,
    administrador: administradorReducer,
    escritos: pageReducer
});