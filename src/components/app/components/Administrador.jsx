import {useDispatch, useSelector} from "react-redux"

import { useEffect, useState } from "react"



import "./LayoutAdministrador/administrador.css"
import AddIcon from '@material-ui/icons/Add';
import ListadoTareas from "./LayoutAdministrador/ListadoTareas"
import Logo from "../../../img/valah/Valah-logos_black.png"

import AddAdministrador from "./LayoutAdministrador/AddAdministrador"

import Proyecto from "./LayoutAdministrador/Proyecto"

import { cambiarShowAction, addProyectoAction, obtenerProyectosAction, enviarTareaAction, EditarTareaAction, EliminarProyectoAction, escribiendoAction } from "../../../actions/administradorActions"


const Administrador = () => {


    

    //State
    const [ proyectoActual, guardarProyectoActual ] = useState({});

    const [ tareasActual, guardarTareasActual ] = useState([]);

    const [ proyectoId, guardarProyectoId ] = useState("");

    const [ modoEdicion, guardarModoEdicion ] = useState(false);

    const [ idTareaEdicion, guardaridTareaEdicion] = useState("");

  

    const [ mostrar, guardarMostrar ] = useState(false);

    const [ proyectosHay, guardarProyectosHay ] = useState(false);

    const [ proyectoSeleccionado, guardarProyectoSeleccionado ] = useState(false);

    
    //dispatch
    const dispatch = useDispatch();

    //State para el show
    const showAdd = useSelector( state => state.administrador.showAdd)

    const showProyecto = useSelector( state => state.administrador.showProyecto)

    const cuentaActual = useSelector( state => state.presupuesto.cuentaActual)

    const proyectos = useSelector( state => state.administrador.proyectos)

    const escribiendo = useSelector( state => state.administrador.escribiendo)



    //NewFunctionsActions
    const cambiarShow = type => dispatch( cambiarShowAction(type) );
    const enviarProyecto = (name, cuentaActual) => dispatch( addProyectoAction(name, cuentaActual)  );
    const obtenerProyectos = (cuentaActual) => dispatch( obtenerProyectosAction(cuentaActual)  );
    const enviarTarea = (name, proyectoId, cuentaActual) => dispatch( enviarTareaAction(name, proyectoId, cuentaActual)  );
    const editarTarea = (idTareaEdicion, proyectoId, cuentaActual, name) => dispatch( EditarTareaAction(idTareaEdicion, proyectoId, cuentaActual, name) );
    const eliminarProyectoDispatch = (id, cuentaActual) => dispatch( EliminarProyectoAction(id, cuentaActual)  );

    const escribiendoDispatch = (type) => dispatch( escribiendoAction(type)  );


    //UseEffect
    useEffect ( () => {
        obtenerProyectos(cuentaActual)    
        obtenerProyecto( proyectoId )    
        

        
    }, []);

    useEffect ( () => {
        privar()
        obtenerProyecto(proyectoId)
    }, [escribiendo, proyectos, proyectoId, proyectoActual]);


    useEffect ( () => {
        actualizarTareas()

    }, [proyectos]);


    const handleClick = (type) => {

        if( showAdd !== true )  {
            cambiarShow(type)
            escribiendoDispatch(true)
        }


        
    };

    


    //  Agregar proyecto o tarea
    const addFunction = (name) => {

        if (showProyecto === true) {
            enviarProyecto(name, cuentaActual)
        } else {

            if ( modoEdicion === true ) {

                editarTarea(idTareaEdicion, proyectoId, cuentaActual, name)
                guardarModoEdicion(false)
                
            } else {
                enviarTarea(name, proyectoActual.id , cuentaActual)
            }
        }

        escribiendoDispatch(false)
    };


    //Obtener proyecto actual
    const obtenerProyectoId = ( proyectoId ) => {
        
        guardarProyectoId(proyectoId)
        obtenerProyecto(proyectoId)


    };


    const obtenerProyecto = ( proyectoId ) => {

      

        if( proyectoId !== "") {

           
            
                const proyectoArray = proyectos.filter( proyecto => proyecto.id === proyectoId);
                

            if(proyectoArray.length !== 0 ){
                guardarProyectoActual(proyectoArray[0])
                guardarTareasActual(proyectoArray[0].tareas)  
                guardarProyectoSeleccionado(true)
             } else {
                 guardarProyectoActual({})
                 guardarProyectoSeleccionado(false)
             }
         
        } else {
            guardarProyectoSeleccionado(false)
        }

    };


     const actualizarTareas = () => {

        if ( Object.keys(proyectoActual).length !== 0 )  {
            const proyectoArray = proyectos.filter( proyecto => proyecto.id === proyectoActual.id);
            if(proyectoArray && proyectoArray.length !== 0) {
                guardarTareasActual(proyectoArray[0].tareas)

            }
        }
       
    };
    

    


    //Editar tarea
    const editarTareaClick = (id) => {
        guardarModoEdicion(true)

        handleClick("tarea")

        guardaridTareaEdicion(id)
        
    };


    //Eliminar Proyecto
    const eliminarProyecto = (id) => {
        if (!escribiendo ) {
            eliminarProyectoDispatch(id, cuentaActual)
            obtenerProyecto(proyectoId)

           
                
          
            
        }
    };


    
    const privar = () => {



       
        
        if(proyectos.length === 0) {
            guardarProyectosHay(false)
        } else {
            guardarProyectosHay(true)
        }
     
        if( escribiendo || !proyectosHay || !proyectoSeleccionado ) {
            guardarMostrar(true)
            
            return;
        }

        guardarMostrar(false)
        
      

    }
   

    
    return (
    
        <div className="contenedor-administrador" >
            
            <div className="contenedor-topadministrador">
            <img src={Logo} alt="" className="img-logo"/>

           { showAdd ? <AddAdministrador 
            addFunction={addFunction}
           /> : null}
            </div>

            <div className="contenedor-low-administrador">

                <div className="contenedor-proyectos">
                    <h2>Proyectos</h2>



                    <ul>
                        <li> <button
                            disabled = {escribiendo}
                            
                            onClick = { e => handleClick("proyecto")}
                        > <AddIcon /> Añadir Proyecto</button>
                        </li>
                       
                        <li>
                        
                        <button
                            disabled = {mostrar}
                           onClick = { e => handleClick("tarea")}
                         > <AddIcon /> Añadir Tarea</button>

                        </li>


                        { proyectos.length  !== 0 ?   proyectos.map( proyecto => (
                            <Proyecto 
                                key = {proyecto.id}
                                proyecto = {proyecto}
                                obtenerProyectoId = {obtenerProyectoId}
                                eliminarProyecto = {eliminarProyecto}
                            />
                        ) ) : 
                            <li>No hay proyectos, crea uno</li>
                        }
                       
                    </ul>
                </div>  

                <div className="contenedor-tareas">
                    <ListadoTareas
                        tareasActual = {tareasActual}
                        proyectoActual = {proyectoActual}
                        cuentaActual = {cuentaActual}
                        editarTareaClick = {editarTareaClick}
                     />
                </div>
            </div>
        </div>
        
     );
}
 
export default Administrador;