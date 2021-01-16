
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { changeLayoutAction, activarErrorAction, crearNuevoIngresoAction } from "../../../../actions/presupuestoActions"


import AddIcon from '@material-ui/icons/Add';
import AddPresupuesto from "./addPresupuesto"
import Meta from "./Meta"


const TopPresupuesto = ({actualId}) => {

            const dispatch = useDispatch()

        



    //UseEffect 

        const errorApp = useSelector( state => state.presupuesto.error) 

        const goBack = e => dispatch( changeLayoutAction(e) )



    /*==========================================================
      ==========================================================
                              ADDPRESUPUESTO
        ==========================================================
        ==========================================================*/

        const crearIngreso = (ingreso, actualId) => dispatch( crearNuevoIngresoAction(ingreso, actualId) );

          const erroralaAPP = (state) => dispatch( activarErrorAction(state))

    //addPresupuesto variables
    const [ nombre, guardarNombre ] = useState("");
    const [ monto, guardarMonto ] = useState("");
    const [ tipo, guardarTipo ] = useState("");

    const submitPresupuesto = (e) => {

        


        if ( e === "presupuesto") {
        //validar
        if ( nombre === "" || monto <= 0  || tipo === "") {
            erroralaAPP(true)
            return;
        }
            erroralaAPP(false)
            goBack()


        //Convertir a objeto 
            const ingreso  = {
                nombre,
                monto,
                tipo
            };

        //Enviar a la API
            crearIngreso(ingreso, actualId)

        } 
       
    };

   




      /*==========================================================
      ==========================================================
                              TOPPRESUPUESTO
        ==========================================================
        ==========================================================*/



        //Variable para el show 

        const statepresupuesto = useSelector( state => state.presupuesto.showpresupuesto)
        const statemeta = useSelector( state => state.presupuesto.showmeta)

    




    const handleSubmit = e => {
        
       goBack(e)
    }
    
    
    

    return ( 
        
        <div className="all-container-top-presupuesto">
            <div className="content">
                <div className="type type-1">
                    <h3>Ingresos</h3>
                    <ul>
                        <li 
                            className="button button-top"
                            onClick={ e =>  handleSubmit("presupuesto")}
                        > <AddIcon />  Añadir/Cambiar</li>
                    </ul>
                </div>
                 <div className="type type-2">
                     <h3>Gastado</h3>
                      <ul>
                        <li>Fijo: <span></span></li>
                        <li>Básico: <span>anashee</span></li>
                        <li>Otros: <span>$</span></li>

                    </ul>
                    
                </div>
                 <div className="type type-3">
                     <h3>Restante</h3>
                      <ul>
                        <li
                            className="button"
                            onClick={ e =>  handleSubmit("meta")}

                        >  <AddIcon /> Meta: <span>$</span></li>
                        <li>Restante: <span>$</span></li>
                    </ul>
                    
                </div>
              <div className="type type-4">
                     <div className="right"> <p>Ingresos</p> </div>
                     <div className="right"> <p>Gastado</p></div>
                      <div className="right"><p>Restante</p> </div>
                                      
                </div>

            </div>
        <hr/>

        { statepresupuesto  ? 
         <AddPresupuesto 
                handleSubmit = {handleSubmit}
                guardarNombre = {guardarNombre}
                guardarMonto = {guardarMonto}
                guardarTipo = {guardarTipo}
                submitPresupuesto = {submitPresupuesto}
                errorApp = {errorApp}
        /> : null}

        {statemeta ? 
            <Meta 
                        handleSubmit = {handleSubmit}
            />
        :null}


        </div>
        );
}
 
export default TopPresupuesto;