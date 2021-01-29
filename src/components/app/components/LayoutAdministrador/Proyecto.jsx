
    import { useSelector } from "react-redux"
    

import HighlightOffIcon from '@material-ui/icons/HighlightOff';

const Proyecto = ({ proyecto, obtenerProyectoId, eliminarProyecto }) => {

    const {id, name} = proyecto;

    const escribiendo = useSelector( state => state.administrador.escribiendo)


    let clase;

    if ( escribiendo ) {
        clase = "hoverapagado item-proyecto"
    } else {
        clase = "item-proyecto"
    }

    return ( 

        <li 
        className = {clase}
        
        ><p
        onClick = {e  => obtenerProyectoId(id)}
        className = {clase}

        >{name}</p>
        
        <span
        className = {clase}

                onClick ={e => eliminarProyecto(id)}
        >  <HighlightOffIcon /> </span></li>
     );
}
 
export default Proyecto;