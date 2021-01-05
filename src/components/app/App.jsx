import { Fragment } from "react"
import "./styles.css"
//Partes
import Money from "./components/Money"
import Probar from "./components/Probar"
import Aside from "./components/Aside/Aside"

import { useEffect, useState } from "react"


import { useSelector, useDispatch } from "react-redux"
const App = () => {


            //Variables
    const [ money, guardarMoney ] = useState(false);
    const [ probando, guardarProbando ] = useState(false);


    const stateV = useSelector( state => state.app.pagactual)

    useEffect ( () => {

                
        guardarMoney(false);
        guardarProbando(false);
                
        if (stateV === "money") {
            guardarMoney(true)
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


                {money ? <Money /> : null}
                {probando ? <Probar /> : null}
            </div>
        </div >
    )
};

export default App;