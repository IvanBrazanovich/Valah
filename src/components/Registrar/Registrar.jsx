import React, {Fragment, useState} from 'react';
import "./css/Basic.css"
import "./css/Registrar.css"
import Logo from "../../img/valah/Valah-logos_black.png"

import { useDispatch, useSelector } from "react-redux"

//Actions de redux
import { crearNuevaCuentaAction } from "../../actions/clientesActions"



const Registrar = () => {

    //UseState para las variables 
    const [ email, guardarEmail ] = useState("")
    const [ password, guardarPassword ] = useState("")


    //Utilizar useDispatch y te crea una funcion 
    const dispatch = useDispatch();

    const agregarCuenta = cuenta =>  dispatch( crearNuevaCuentaAction(cuenta) )
    //Cuando el usuario haga submit
     const submitCuenta = e => {
        e.preventDefault();

        //Validar formulario 
        if( email.trim() === "" || password.trim() === "" ) {
            return;
        }


        //Si no hay errores


        //Crear nueva cuenta 
        agregarCuenta({
            email,
            password
        });
    }

    return ( 
        <Fragment>
        <div className="all">
            <div className="container">
                <img src={Logo} alt=""/>
                <h2>Crear Cuenta</h2>
                <form
                    onSubmit={submitCuenta}               
                >
                    <div>
                        <input 
                        name=""
                         type="text" 
                         required=""
                         placeholder="alguien@example.com"
                         value={email}
                         onChange={ e => guardarEmail(e.target.value) }
                         />
                    </div>


                      <div>
                        <input 
                        name="" 
                        type="password" 
                        required="" 
                        placeholder="contraseña"
                        value={password}
                        onChange = { e => guardarPassword(e.target.value )}
                        />
                    </div>
                     
                      <button type="submit" > Registrarme</button>

                </form>


            </div>
        </div>

       
</Fragment>
        );
}
 
export default Registrar;


