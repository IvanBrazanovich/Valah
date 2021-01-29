
import {useDispatch, useSelector} from "react-redux"

import { useState, useEffect } from "react"
import { ShowAddFalseAction } from "../../../../actions/administradorActions"

const AddAdministrador = ( {addFunction} ) => {

  const dispatch = useDispatch();

  const cambiarFalse = () => dispatch( ShowAddFalseAction() )

  const showProyecto = useSelector( state => state.administrador.showProyecto )
    
  
  const [ proyecto, guardarProyecto ] = useState("")
  const [ tarea, guardarTarea ] = useState("")
  const [ showButton, guardarButton ] = useState(true)

    useEffect ( () => {
      if(proyecto !== "" || tarea !== "") {
        guardarButton(true)
      }
    }, [proyecto, tarea]);

  const handleSubmit = e => {
    e.preventDefault()


    if ( showProyecto === true) {
      if( proyecto.trim() === "") {
        guardarButton(false)

        return;
      }
    } else {
      if( tarea.trim() === "") {
        guardarButton(false)

        return;
      }
    }

    cambiarFalse();
    ( showProyecto ? addFunction(proyecto) : addFunction(tarea))
  };



    return ( 

        <div className="add-administrador">
            <form >

                { showProyecto ?
                 <div >
                 <label htmlFor="proyecto">Proyecto</label>
                    <input
                    name="proyecto"
                    type="text" 
                    onChange = { e => guardarProyecto(e.target.value)}
                    />
                  </div>
                
                : 
                <div >
                <label htmlFor="tarea">Tarea</label>
                   <input
                   name="tarea"
                   type="text" 
                   onChange = { e => guardarTarea(e.target.value)}
                   />
                 </div>

                }

                   
               
                
           
           
            {showButton
           
            ?
            <input 
            type="submit" 
            className="button"
            value="Done"
             onClick = {handleSubmit}
            />
            : 
            <p className="error">El campo es obligatorio</p>

            }
             
            </form>        </div>
     );
}
 
export default AddAdministrador;