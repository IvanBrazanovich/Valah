import React from 'react';
import {Fragment} from "react"
import  Logo from "../../img/valah/Valah-logos_black.png"

import "./css/Basic.css"
import "./css/Header.css"




const Header = () => {
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
                    <li>Iniciar Sesión</li>
                    <li>Registrarse</li>
                    </ul>
            </div>
        
    </header>

        <div className="hero-container">

      <div className="hero">
            <div className="hero-overlay"></div>
        </div>

        <div className="container-tlte">

        <div className="hero-title"><h1>Todo en uno <br/> <span>Tu vida organizada en un solo lugar</span></h1>
        
                <button>Comienza ahora</button>

        </div>
        </div>

        </div>

  

</Fragment>
     );
}
 
export default Header;