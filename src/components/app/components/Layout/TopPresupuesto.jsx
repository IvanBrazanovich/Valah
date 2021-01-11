
import AddIcon from '@material-ui/icons/Add';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const TopPresupuesto = () => {

    const showPresupuestoForm = () => {
        console.log("hola")
    };

    return ( 

        <div className="all-container-top-presupuesto">
            <div className="content">
                <div className="type type-1">
                    <h3>Ingresos</h3>
                    <ul>
                        <li 
                            className="button button-top"
                            onClick={ showPresupuestoForm}
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
        </div>
        );
}
 
export default TopPresupuesto;