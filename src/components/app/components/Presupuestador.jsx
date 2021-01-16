
import { useState } from "react"

import TopPrespupuesto from "./Layout/TopPresupuesto"
import LowPresupuesto from "./Layout/LowPresupuesto"
import "./Aside/css/Presupuestador.css"


const Presupuestador = ({ actualId }) => {
    

    const [ showb, guardarShowb ] = useState(true);

    const [ show, guardarShow ] = useState(false)

    const showNewPresupuesto = () => {
        if ( show === false ) {
            guardarShow(true);
            guardarShowb(false)
        }
    }
    
    const closePrespuesto = () => {
        if ( show === true ) {
            guardarShow(false);
            guardarShowb(true)
        }
    }
    
    
    return ( 

        <div className="presupuestador page">
            
        <TopPrespupuesto
            actualId = {actualId}
        />
        <LowPresupuesto />


          
        </div>
     );
}
 
export default Presupuestador;