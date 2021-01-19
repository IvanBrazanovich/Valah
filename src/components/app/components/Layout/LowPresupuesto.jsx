
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';
import { useDispatch, useSelector } from "react-redux"

import Gasto from "./Gasto"
import Ingreso from "./Ingreso"
import { changeLayoutAction } from "../../../../actions/presupuestoActions"

const LowPresupuesto = () => {
    
    const gastos = useSelector(state => state.presupuesto.gastos)

    const ingresos = useSelector(state => state.presupuesto.ingresos)

    


            const dispatch = useDispatch()

           const goBack = e => dispatch( changeLayoutAction(e) )

    const handleClick = e => {
        
       goBack(e)
    }
    
    
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
                    />
                ))}
               
            </table>

                    <div className="low-ingresos">

      <div className="top-of-table">
                      <h2>Ingresos</h2>
                    
                    </div>
            <table className="table-presupuesto">
                
                        <thead className="table-header">
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Tipo de gasto</td>
                        <th className="icon-value"> <AssessmentIcon /></th>
                </thead>
                
                { ingresos.map( ingreso => (
                    <Ingreso
                    ingreso = {ingreso}
                    key = {ingreso.id}
                    />
                ))}
               
            </table>
                    </div>
            
         

        </div>

        );
}
 
export default LowPresupuesto;