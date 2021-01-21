
import { useState } from "react"
import { useDispatch, useSelector } from "react-redux"

import TopPrespupuesto from "./Layout/TopPresupuesto"
import LowPresupuesto from "./Layout/LowPresupuesto"
import "./Aside/css/Presupuestador.css"
import { changeLayoutAction} from "../../../actions/presupuestoActions"

const Presupuestador = ({ actualId }) => {
                const dispatch = useDispatch()


    const goBack = e => dispatch( changeLayoutAction(e) )
    

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

    const handleEditar = (parte, tipo ) => {

        if (tipo === "gasto") {
            handleSubmit("gasto")
        } else {
            handleSubmit("presupuesto")

        }
    }
    
    const handleSubmit = e => {
        
        goBack(e)
     }
     
     
    return ( 

        <div className="presupuestador page">
            
        <TopPrespupuesto
            actualId = {actualId}
            handleEditar = {handleEditar}
            handleSubmit = {handleSubmit}


        />
        <LowPresupuesto 
        handleEditar = {handleEditar}
        />


          
        </div>
     );
}
 
export default Presupuestador;