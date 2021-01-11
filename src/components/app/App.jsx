import { Fragment } from "react"
import "./styles.css"
//Partes
import Money from "./components/Money"
import Probar from "./components/Probar"
import Presupuestador from "./components/Presupuestador"
import Aside from "./components/Aside/Aside"
import Page from "./components/Aside/Page"

import { useEffect, useState } from "react"


import { useSelector, useDispatch } from "react-redux"
const App = () => {


            //Variables
    const [ money, guardarMoney ] = useState(false);
    const [ probando, guardarProbando ] = useState(false);
    const [ presupuestador, guardarPresupuestador ] = useState(false);


    const stateV = useSelector( state => state.presupuesto.pagactual)

    console.log(stateV)
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
                
                {presupuestador ? <Presupuestador /> : null}
                {money ? <Money /> : null}
                {probando ? <Probar /> : null}
            </div>
        </div >
    )
};

export default App;