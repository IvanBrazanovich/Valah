import { Fragment } from "react"
import "./styles.css"
//Partes
import Presupuestador from "./components/Presupuestador"
import Administrador from "./components/Administrador"
import Escrito from "./components/LayoutPage/Escrito"
import Aside from "./components/Aside/Aside"

import { obtenerInfoUsuarioAction } from "../../actions/presupuestoActions"

import { useEffect, useState } from "react"

import { addEscritoAction } from "../../actions/pageAction"

import { useSelector, useDispatch } from "react-redux"
const App = () => {


 const dispatch = useDispatch()


         //Ver quien es el actual 
        const cuentaActual = useSelector( state => state.presupuesto.cuentaActual )
        const actualId = useSelector( state => state.presupuesto.actualId )
        const idEscrito = useSelector( state => state.escritos.idEscrito )
        const escritoStore = useSelector(state => state.escritos.escritos)
       

        const escritoActual = escritoStore.filter( escrito => escrito.id === idEscrito )

       

    //Obtener info de las cuentas 
        const obtenerInfoUsuario = (cuentaActual) => dispatch( obtenerInfoUsuarioAction(cuentaActual) );

        const enviarEscrito = (id, escrito, cuentaActual) => dispatch( addEscritoAction(id, escrito, cuentaActual) );


             useEffect( () => {
            obtenerInfoUsuario(cuentaActual);
        }, []);

            //Variables
    const [ administrador, guardarAdministrador ] = useState(false);
    
    const [ presupuestador, guardarPresupuestador ] = useState(false);

    const [ page, guardarPage ] = useState(false);

    const [ escritoText, guardarEscritoText ] = useState("");

    const [ idTextActual , guardaridTextActual ] = useState();


    
        useEffect( () => {
            enviarEscrito(idEscrito, escritoText, cuentaActual)
        }, [ escritoText ] );


    const stateV = useSelector( state => state.presupuesto.pagactual)

    useEffect ( () => {

                
        guardarPresupuestador(false);
        guardarAdministrador(false);
        guardarPage(false);
                
        if (stateV === "presupuestador") {
            guardarPresupuestador(true)
        }  else if (stateV === "administrador") {
            guardarAdministrador(true)
        } else if (stateV === "page") {
            guardarPage(true)
        }

    }, [stateV]);


    const cambiaElId = (id) => {
        guardaridTextActual(id)
    };

    return (
        <div className="contenedor-all" >
            <div className="contenedor-app">
                <Aside
                cambiaElId = {cambiaElId}
                />
            </div>

            <div className="contenedor-principal">
                
                {presupuestador ? <Presupuestador 
                    actualId = {actualId}
                /> : null}

                {administrador ? <Administrador 
                /> : null}

                 {page ? <Escrito 
                 escritoActual = {escritoActual}
                 guardarEscritoText = {guardarEscritoText}
                 idTextActual={idTextActual}
                   /> : null}
            </div>
        </div >
    )
};

export default App;