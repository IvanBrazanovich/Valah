import { useDispatch, useSelector } from "react-redux"
import { EliminarTareaAction, cambiarStateAction } from "../../../../actions/administradorActions"

    


const Tarea = ({tarea, proyectoActual, cuentaActual, editarTareaClick}) => {
    

    const escribiendo = useSelector( state => state.administrador.escribiendo)


    const dispatch = useDispatch();

    const eliminarTarea = (id, proyectoActual, cuentaActual) => dispatch ( EliminarTareaAction(id, proyectoActual, cuentaActual) ) 
    const cambiarState = (id, proyectoActual, cuentaActual, state) => dispatch ( cambiarStateAction(id, proyectoActual, cuentaActual, state) ) 

    const { name, id, state } = tarea;

    const deleteTarea = () => {
        eliminarTarea(id, proyectoActual, cuentaActual)
    };

    
   
    return ( 
       <li className="tarea sombra">
           <p>{name}</p>

           <div className="estado">
               {tarea.state === "completo" ?
                (
                    <button 
                    disabled = {escribiendo}
                    type="button"
                    className="completo"
                    onClick={ e =>  cambiarState(id, proyectoActual, cuentaActual, "incompleto")}
                    > Completo</button>

                )
               
               :
               (
                <button 
                disabled = {escribiendo}
                type="button"
                className="incompleto"
                onClick={ e =>  cambiarState(id, proyectoActual, cuentaActual, "completo")}
                > Incompleto</button>   
               )
               }
           </div>

           <div className="acciones">
               <button
                  disabled = {escribiendo}
                  type="button"
                  className="editar"
                  onClick = {e => editarTareaClick(id)}
               >Editar</button>

                <button
                disabled = {escribiendo}
                  type="button"
                  className="eliminar"
                  onClick={deleteTarea}
               >Eliminar</button>
           </div>

       </li>

     );
}
 
export default Tarea;