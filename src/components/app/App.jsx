import { Fragment } from "react"
import "./styles.css"
//Partes
import Money from "./components/Money"
import Probar from "./components/Probar"
import Presupuestador from "./components/Presupuestador"
import Aside from "./components/Aside/Aside"
import Page from "./components/Aside/Page"

import { obtenerInfoUsuarioAction } from "../../actions/presupuestoActions"

import { useEffect, useState } from "react"


import { useSelector, useDispatch } from "react-redux"
const App = () => {


 const dispatch = useDispatch()


         //Ver quien es el actual 
        const cuentaActual = useSelector( state => state.presupuesto.cuentaActual )
        const actualId = useSelector( state => state.presupuesto.actualId )




       

    //Obtener info de las cuentas 
        const obtenerInfoUsuario = (cuentaActual) => dispatch( obtenerInfoUsuarioAction(cuentaActual) );


             useEffect( () => {
            obtenerInfoUsuario(cuentaActual);
        }, []);

            //Variables
    const [ money, guardarMoney ] = useState(false);
    const [ probando, guardarProbando ] = useState(false);
    const [ presupuestador, guardarPresupuestador ] = useState(false);


    const stateV = useSelector( state => state.presupuesto.pagactual)

    useEffect ( () => {

                
        guardarPresupuestador(false);
        guardarProbando(false);
                
        if (stateV === "presupuestador") {
            guardarPresupuestador(true)
        }  else if (stateV === "probando") {
            guardarProbando(true)
        }

    }, [stateV]);



    return (
        <div className="contenedor-all" >
            <div className="contenedor-app">
                <Aside />
            </div>

            <div className="contenedor-principal">
                
                {presupuestador ? <Presupuestador 
                    actualId = {actualId}
                /> : null}
                {money ? <Money /> : null}
                {probando ? <Probar /> : null}
            </div>
        </div >
    )
};

export default App;