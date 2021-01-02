import React from 'react';
import "./css/Basic.css";
import "./css/SecondLoad.css";
import History from "../../img/valah/history-1.jpg"
const SecondLoad = () => {
    return ( 

        <div className="contenedor">
                {/*History*/}

            <div className="divider">
                <div className="left">
                    <h2>Un administrador de tareas en el que puedes confiar de por vida</h2>
                    <p>En los 13 años y 332 días que hemos estado construyendo Valah, nunca hemos considerado ser absorbidos o poner la compañía en venta.

                        <br/>
                  <br/>  Nuestro equipo está comprometido con seguir siendo independiente y merecer tu confianza por el tiempo que necesites nuestras aplicaciones.</p>
                </div>
           
           
            <div className="right">
                <img src={History} alt="hist"/>
            </div>
            </div>
        

                {/*Footer*/}

                <div className="footer contenedor">
                    <div className="first">
                        <p>Únete a millones de personas que organizan sus proyectos profesionales y personales con Todoist.</p>
                    </div>

                <div className="second">
                    <h3>Características</h3>
                    <div className="links">
                        <ul>
                            <li>Cómo funciona</li>
                            <li>Premium</li>
                            <li>Para equipos</li>
                            <li>Precios</li>
                            <li>Plantillas</li>
                        </ul>
                    </div>
                </div>


                {/* Third*/}

                  <div className="third">
                    <h3>Recursos</h3>
                    <div className="links">
                        <ul>
                            <li>Descarga las apps</li>
                            <li>Centro de ayuda</li>
                            <li>Métodos de productividad </li>
                            <li>Recomienda Valah</li>
                            <li>Integraciones</li>
                            <li>Socios de Valah</li>
                            <li>API de desarrollador</li>
                        </ul>
                    </div>
                </div>

                {/*Fourth*/}
                  <div className="fourth">
                    <h3>Compañía</h3>
                    <div className="links">
                        <ul>
                            <li>Acerca de Doist</li>
                            <li>¡Trabaja con nosotros!</li>
                            <li>Blog</li>
                            <li>Prensa</li>
                            <li>Twist</li>
                        </ul>
                    </div>
                </div>


                </div>
        </div>
        );
}
 
export default SecondLoad;