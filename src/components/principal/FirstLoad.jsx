import React from 'react';
import "./css/Basic.css";
import "./css/FirstLoad.css";

import feature1 from "../../img/valah/features/1.png"
import feature2 from "../../img/valah/features/2.png"
import feature3 from "../../img/valah/features/3.png"
import feature4 from "../../img/valah/features/4.png"
import feature5 from "../../img/valah/features/5.png"
import feature6 from "../../img/valah/features/6.png"


const FirstLoad = () => {
    return ( 

        <div className="contenedor">


            <div className="first-text">
            <h1>Libera espacio mental</h1>
            <p>Recupera tu claridad y tranquilidad sacando todas esas tareas de tu cabeza para ponerlas en tu lista de tareas (sin importar dónde estés o el dispositivo que estés utilizando).</p>
            </div>

            <div className="feature-content">
                <div className="feature border-bottom border-right">
                    <img src={feature1} alt="f1"/>
                    <h2>Producto</h2>
                    <p>Visualize your product roadmap
                    Write feature specs
                    Cross-functional collaboration</p>
                </div>

                    <div className="feature border-bottom border-right">
                    <img src={feature2} alt="f1"/>
                    <h2>Engineering</h2>
                    <p>Coordinate releases
                        Codify processes
                        Write docs to ship fast</p>
                </div>

                    <div className="feature border-bottom">
                    <img src={feature3} alt="f1"/>
                    <h2>HR</h2>
                    <p>Create a company wiki
                        Answer questions at scale
                        Onboard new employees</p>
                </div>

                    <div className="feature border-right">
                    <img src={feature4} alt="f1"/>
                    <h2>Design</h2>
                    <p>Track every project
                    Catalog logos, fonts, and assets
                    Publish a design system</p>
                </div>

                    <div className="feature border-right">
                    <img src={feature5} alt="f1"/>
                    <h2>Sales</h2>
                    <p>Build a flexible CRM
                        Organize all meeting notes
                        Share a single playbook</p>
                </div>

                    <div className="feature">
                    <img src={feature6} alt="f1"/>
                    <h2>Marketing</h2>
                    <p>Make a style guide
                        Track your content calendar
                        Keep tabs on everything</p>
                </div>
            </div>

        </div>
     );
}
 
export default FirstLoad;