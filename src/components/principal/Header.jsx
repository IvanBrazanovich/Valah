import React from 'react';
import {Fragment} from "react"
import  Logo from "../../img/valah/Valah-logos_black.png"

import { Link } from "react-router-dom"

import "./css/Basic.css"
import "./css/Header.css"

import { useHistory } from "react-router-dom"



const Header = () => {

     let history = useHistory();

    const redirect = () => {
        history.push('/registrar')
    }


    return ( 
        <Fragment>
           <header id="header">
            <div className="contenedor-izquierda">
                <div className="img-logo">
                    <img src = {Logo} className="logo"/>
                </div>

                <nav className="navegacion">
                    <ul>
                        <li>Nosotros</li>
                        <li>Historia</li>
                        <li>Descargar</li>
                    </ul>
                </nav>

            </div>

            <div className="contenedor-derecha">

                    <ul>
                    <Link to='/inicio' className="button-header"  >Iniciar Sesión</Link>
                    <Link to='/registrar' className="button-header"  >Registrar</Link>
                    </ul>
            </div>
        
    </header>

        <div className="hero-container">

      <div className="hero">
            <div className="hero-overlay"></div>
        </div>

        <div className="container-tlte">

        <div className="hero-title"><h1>Todo en uno <br/> <span>Tu vida organizada en un solo lugar</span></h1>
        
                <button onClick={redirect}>Comienza ahora</button>

        </div>
        </div>

        </div>

  

</Fragment>
     );
}
 
export default Header;