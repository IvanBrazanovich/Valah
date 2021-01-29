
import "./css/aside.css"

import { Search, Update, Tune, Delete, ImportExport, Publish  } from "@material-ui/icons"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';

import Page from "../LayoutPage/Page"


import { useState, useEffect }  from "react"
import { useSelector, useDispatch } from "react-redux"

import { CambiarPagAction } from "../../../../actions/presupuestoActions"

import { addPageAction, obtenerInfoUsuarioEscritos } from "../../../../actions/pageAction"
import { elegirPageAction } from "../../../../actions/pageAction"


const Side = ({cambiaElId}) => {

    const [ agregar, guardarAgregar ] = useState(false)

    const [ pageNew, guardarPageNew ] = useState("")

    const dispatch = useDispatch();

    const mandarCambiar = nombre => dispatch( CambiarPagAction(nombre) )

    const addPage = (pageNew, cuentaActual) => dispatch( addPageAction(pageNew, cuentaActual) )

    const obtener = (cuentaActual) => dispatch( obtenerInfoUsuarioEscritos(cuentaActual) )


    //UseSelector
    const cuentaActual = useSelector(state => state.presupuesto.cuentaActual)

    const elegirPageEnviar = (id) => dispatch( elegirPageAction(id) );

    //UseEffect
    useEffect ( ( ) => {
        obtener(cuentaActual)
    }, [] );

    const escritos = useSelector(state => state.escritos.escritos)
    const state = useSelector(state => state)



    const cambiar =  (nombre) => {
         mandarCambiar(nombre);
    }


   


    const submitPage = () => {

        //Validar
        if ( pageNew  === "") {
            return;
        }

        addPage(pageNew, cuentaActual)
        guardarPageNew("")
        guardarAgregar(false)
    };


    //Elegir page 
    const elegirPage = (id) => {
        elegirPageEnviar(id)
        cambiaElId(id)

    };

    return ( 

        <div className="contenedor-side">
            <div className="nombre-usuario"> 
            <PermIdentityIcon id="icon-user" />
            <h5>José</h5>
            </div>

            <div className="relleno">
                
                <div className="relleno-div">
                    <Search />
                    <p>Quick Find</p>
                </div>

                <div className="relleno-div">
                    <Update />
                    <p>All Updates</p>
                </div>

                <div className="relleno-div">
                    <Tune />
                    <p>Settings</p>
                </div>
            </div>

            <hr/>
            { agregar ? 
                
                <div className="add-page ">
                <input 
                 onChange = { e => guardarPageNew   (e.target.value)}
                type="text"/>    

                <button
                 className="button"
                 onClick = { submitPage }
                >Agregar</button>
                 </div>

            
                : null}
                

            <div className="contenedor-templates">

                <div onClick ={ () => cambiar("presupuestador")} className="template">
                    <h5>&rsaquo;</h5>
                    <p>Presupuestador</p>
                </div>
                
                 <div onClick ={ () => cambiar("administrador")}  className="template">
                    <h5>&rsaquo;</h5>
                    <p>Administrador</p>
                </div>

                { escritos ?
                    escritos.map(escrito => (
                        <Page 
                        escrito = {escrito}
                        key = {escrito.id}
                        elegirPage = {elegirPage}
                        cambiar = {cambiar}
                        />
                    
                    )    )
                    :  null}
                
                <div className="add-template ">
                    <span>+</span>
                    <p
                        onClick = { e => guardarAgregar(true)}
                    >  Add a page</p>
                </div>
            </div>

            <hr/>

            <div className="relleno">
                <div className="relleno-div">
                    <Publish />
                    <p>Templates</p>
                </div>

                <div className="relleno-div">
                    <ImportExport />
                    <p>Import </p>
                </div>

                <div className="relleno-div">
                    <Delete />
                    <p>Trash</p>
                </div>
            </div>


                
        </div>

     );
}
 
export default Side;