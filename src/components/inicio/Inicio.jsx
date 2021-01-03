import React, {Fragment} from 'react';
import "./css/Basic.css"
import "./css/Inicio.css"
import Logo from "../../img/valah/Valah-logos_black.png"


const Inicio = () => {

    return ( 
        <Fragment>
        <div className="all">
            <div className="container">
                <img src={Logo} alt=""/>
                <h2>Iniciar Sesión</h2>
                <form
                >
                    <div>
                        <input name="" type="text" required="" placeholder="alguien@example.com"/>
                    </div>


                      <div>
                        <input name="" type="password" required="" placeholder="contraseña"/>
                    </div>
                </form>

                <button type="submit">Siguiente</button>

            </div>
        </div>

       
</Fragment>
        );
}
 
export default Inicio;