
import AssessmentIcon from '@material-ui/icons/Assessment';
import AddIcon from '@material-ui/icons/Add';

const LowPresupuesto = () => {
    return ( 

        <div className="low-content">
               <div className="top-of-table">
                      <h2>Gastos</h2>
                        <div className="add"> <AddIcon /> Añadir gasto</div>
                    </div>
            <table className="table-presupuesto">
                
                        <thead className="table-header">
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Horas gastadas</td>
                    <td>Tipo de gasto</td>
                        <th className="icon-value"> <AssessmentIcon /></th>
                </thead>
                
                
                 <tr>
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Horas gastadas</td>
                    <td>Tipo de gasto</td>
                    <td></td>
                </tr>
                 <tr>
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Horas gastadas</td>
                    <td>Tipo de gasto</td>
                    <td></td>
                </tr>
                 <tr>
                    <td>Gasto</td>
                    <td>Cantidad</td>
                    <td>Horas gastadas</td>
                    <td>Tipo de gasto</td>
                    <td></td>
                </tr>
            </table>
        </div>
        );
}
 
export default LowPresupuesto;