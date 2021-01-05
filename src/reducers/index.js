import { combineReducers } from "redux"

import  cuentasReducer from "./clienteReducers";
import appReducer from "./appReducers"


export default combineReducers ({
    cuentas: cuentasReducer,
    app: appReducer
});