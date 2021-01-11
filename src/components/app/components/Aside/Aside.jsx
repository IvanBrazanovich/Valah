
import "./css/aside.css"

import { ThreeDRotation, Search, Update, Tune, Delete, ImportExport, Publish  } from "@material-ui/icons"
import PermIdentityIcon from '@material-ui/icons/PermIdentity';



import { useEffect, useState } from "react"


import { useSelector, useDispatch } from "react-redux"

import { CambiarPagAction } from "../../../../actions/presupuestoActions"


const Side = () => {


    const dispatch = useDispatch();

    const mandarCambiar = nombre => dispatch( CambiarPagAction(nombre) )

    const cambiar =  (nombre) => {
         mandarCambiar(nombre);
    }

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

            <div className="contenedor-templates">
                <div onClick ={ () => cambiar("presupuestador")} className="template">
                    <h5>&rsaquo;</h5>
                    <p>Presupuestador</p>
                </div>
                 <div onClick ={ () => cambiar("probando")}  className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>
                 <div className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>
                 <div className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>
                 <div className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>
                 <div className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>
                 <div className="template">
                    <h5>&rsaquo;</h5>
                    <p>Economía</p>
                </div>

                <div className="add-template ">
                    <span>+</span>
                    <p>  Add a page</p>
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


          {/*
           <button onClick= { () => cambiar("money")}>Money</button>
                <button onClick= { () => cambiar("probando")}>Probando</button>
              */
          }       
        </div>

     );
}
 
export default Side;