
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux"

import Gasto from "./Gasto"
import Ingreso from "./Ingreso"
import { changeLayoutAction, eliminarGastoAction, eliminarIngresoAction } from "../../../../actions/presupuestoActions"

const LowPresupuesto = ({ handleEditar }) => {
    
    const gastos = useSelector(state => state.presupuesto.gastos)

    const ingresos = useSelector(state => state.presupuesto.ingresos)

    const cuentaActual = useSelector(state => state.presupuesto.cuentaActual)

    


            const dispatch = useDispatch()

           const goBack = e => dispatch( changeLayoutAction(e) )

           const eliminarGasto = (id, cuentaActual)  => dispatch( eliminarGastoAction(id, cuentaActual) )

           const eliminarIngreso = (id, cuentaActual)  => dispatch( eliminarIngresoAction(id, cuentaActual) )

    const handleClick = e => {
        
       goBack(e)
    }



    const eliminarObjecto= (id, tipo ) => {

        if(tipo === "gasto") {
            eliminarGasto(id, cuentaActual) 
        }

        if (tipo === "ingreso") {
            eliminarIngreso(id, cuentaActual) 

        }

    };

    const editarObjecto= (id, tipo ) => {


        if(tipo === "gasto") {
            handleEditar("low", "gasto")
            eliminarGasto(id, cuentaActual) 

        }

        if (tipo === "ingreso") {
            handleEditar("low", "ingreso")
            eliminarIngreso(id, cuentaActual) 

        }

    };
    
    
    return ( 

        

        <div className="low-content">

           
               <div className="top-of-table">
                      <h2>Gastos</h2>
                        <div 
                        className="add"
                        onClick={ e => handleClick("gasto")}
                        > <AddIcon /> Añadir gasto</div>
                    </div>
            <table className="table-presupuesto">
                
                        <thead className="table-header">
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Tipo de gasto</td>
                        <th className="icon-value"> <AssessmentIcon /></th>
                </thead>
                
                { gastos.map( gasto => (
                    <Gasto
                    gasto = {gasto}
                    key = {gasto.id}
                    eliminarObjecto = {eliminarObjecto}
                    editarObjecto = {editarObjecto}

                    />
                ))}
               
            </table>

                    <div className="low-ingresos">

      <div className="top-of-table">
                      <h2>Ingresos</h2>
                    
                    </div>
            <table className="table-presupuesto">
                
                        <thead className="table-header">
                    <td>Ingreso</td>
                    <td>Cantidad</td>
                    <td>Tipo de ingreso</td>
                        <th className="icon-value"> <AssessmentIcon /></th>
                </thead>
                
                { ingresos.map( ingreso => (
                    <Ingreso
                    ingreso = {ingreso}
                    key = {ingreso.id}
                    eliminarObjecto = {eliminarObjecto}
                    editarObjecto = {editarObjecto}
                    />
                ))}
               
            </table>
                    </div>
            
         

        </div>

        );
}
 
export default LowPresupuesto;