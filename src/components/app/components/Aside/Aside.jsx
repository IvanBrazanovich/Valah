
import "./css/aside.css"

import { ThreeDRotation  } from "@material-ui/icons"



import { useEffect, useState } from "react"


import { useSelector, useDispatch } from "react-redux"

import { CambiarPagAction } from "../../../../actions/appActions"


const Side = () => {


    const dispatch = useDispatch();

    const mandarCambiar = nombre => dispatch( CambiarPagAction(nombre) )

    const cambiar =  (nombre) => {
         mandarCambiar(nombre);
    }

    return ( 

        <div className="contenedor-side">
            <div className="nombre-usuario"> 
            <ThreeDRotation />
            </div>

                            <button onClick= { () => cambiar("money")}>Money</button>
                <button onClick= { () => cambiar("probando")}>Probando</button>
        </div>

     );
}
 
export default Side;