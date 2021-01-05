import React, {Fragment, useEffect, useState} from 'react';
import "./css/Basic.css"
import "./css/Inicio.css"
import Logo from "../../img/valah/Valah-logos_black.png"

//Redux
import { useSelector, useDispatch } from "react-redux";


import { obtenerCuentasAction } from "../../actions/clientesActions"


const Inicio = () => {

    //State para las variables 
    const [ email, guardarEmail ] = useState("")
    const [ password, guardarPassword ] = useState("")

    //State para el error
    const [ error, actualizarError ] = useState(false);
    const [ errorexiste, guardarErrorExiste ] = useState(false)


    //Obtener cuentas

    useEffect( () => {

         obtenerCuentas()

    }, [])

        const cuentas = useSelector(state => state.cuentas.cuentas)
        const errorCuenta = useSelector(state => state.cuentas.error)


    //Crear el dispatch
     const dispatch = useDispatch();

     //Mandar a llamar a la función en clienteAcions
     const obtenerCuentas = () => dispatch( obtenerCuentasAction() )


    //Submit
    const handleSubmit = (e) => {
        e.preventDefault();

        //Validar formulario 
        if (email.trim() === "" || password.trim() === "") {
            actualizarError(true)
            return;
        }

        actualizarError(false);


        const existe = cuentas.some(cuenta => cuenta.email === email & cuenta.password === password);


        if(!existe) {
            guardarErrorExiste(true);
            return;
        }

        guardarErrorExiste(false)

        console.log("pasastes")

    };

    return ( 
        <Fragment>
        <div className="all">
            <div className="container">
                <img src={Logo} alt=""/>
                <h2>Iniciar Sesión</h2>
                <form
                onSubmit={handleSubmit}
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
                        onChange = { e => guardarPassword(e.target.value) }
                        />

                    </div>

                <button className="button-inicio" type="submit">Siguiente</button>

                {error ? <p className="error-text">Todos los campos son obligatorios</p> : null}
                {errorexiste ? <p className="error-text">Cuenta Inválida</p> : null}
                {errorCuenta ? <p className="error-text">Hubo un error con el servidor</p> : null}
                

                </form>


            </div>
        </div>

       
</Fragment>
        );
}
 
export default Inicio;