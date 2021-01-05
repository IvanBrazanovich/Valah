import React, {Fragment, useState} from 'react';
import "./css/Basic.css"
import "./css/Registrar.css"
import Logo from "../../img/valah/Valah-logos_black.png"

import { useDispatch, useSelector } from "react-redux"

//Actions de redux
import { crearNuevaCuentaAction, obtenerCuentasAction } from "../../actions/clientesActions"



const Registrar = () => {


    //States para los errores 
    const [ erroremail, guardarErrorEmail ] = useState(false)
    const [ errorpassword, guardarErrorPassword ] = useState(false)

    //Expresiones regular |
    const er = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

    const passwordregex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
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
        
        if (!er.test(email)){
            return;
        }

        if (!passwordregex.test(password)) {
            //8 carácteres, 1 letra mayúscula y 1 número
            return;
        }


        //Si no hay errores


        //Crear nueva cuenta 
        agregarCuenta({
            email,
            password
        });
    }

   

    const dobleFunctionEmail = (e) => {
        //State del email
        guardarEmail(e.target.value);

        //Para ver errores
        errorEmail(e)

    }

    //Errores en email
    const errorEmail = e => {
        if (!er.test (e.target.value)) {
            guardarErrorEmail(true)
            return;
        }
        guardarErrorEmail(false)
    };


    //Doble password
     const dobleFunctionPassword = e => {
        //State del email
        guardarPassword(e.target.value);

        //Para ver errores
        errorPassword(e)
    }

    const errorPassword = e => {
        if (!passwordregex.test (e.target.value)) {
            guardarErrorPassword(true)
            return;
        }
        guardarErrorPassword(false)
    };
 

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
                         onChange={ e => dobleFunctionEmail(e) }
                         />

                         {erroremail ? <p className="errorForm">El email no es válido</p> : null}
                    </div>


                      <div>
                        <input 
                        name="" 
                        type="password" 
                        required="" 
                        placeholder="contraseña"
                        value={password}
                        onChange = { e => dobleFunctionPassword(e) }
                        />
                         {errorpassword ? <p className="errorForm">8 carácteres, 1 mayúscula, 1 número</p> : null}

                    </div>
                     
                      <button className="button-registrar" type="submit" > Registrarme</button>

                </form>


            </div>
        </div>

       
</Fragment>
        );
}
 
export default Registrar;


