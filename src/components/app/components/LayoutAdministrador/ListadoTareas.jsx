import { useSelector } from "react-redux"
import Tarea from "../LayoutAdministrador/Tarea"

const ListadoTareas = ({tareasActual, proyectoActual, cuentaActual, editarTareaClick}) => {


    

    return ( 

       <div className="top-listado">
            <h2>Proyecto: {proyectoActual.name}</h2>

        <ul className="listado-tareas">
            { !tareasActual || tareasActual.length === 0 ?
            <li>No hay tareas</li>
            
            : 
            tareasActual.map( tarea => (
                <Tarea
                    key = {tarea.id}
                    tarea = {tarea}
                    proyectoActual = {proyectoActual}
                    cuentaActual = {cuentaActual}
                    editarTareaClick = {editarTareaClick}
                   
                />

            ))
        }
        </ul>
       </div>
     );
}
 
export default ListadoTareas;