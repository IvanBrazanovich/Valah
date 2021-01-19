


const addGasto = ({guardarMonto, guardarNombre, guardarTipo, submitPresupuesto, errorApp}) => {


      const handleSubmitHome = e => {
        e.preventDefault();
        submitPresupuesto("gasto")
    };

    return (  
            <div className="contenedor-add content-form content-form-presupuesto">
            <form 
                onSubmit={ e => handleSubmitHome(e)}
            >
                <div className="user-input">
                     <label htmlFor="nombre">Nombre</label>
                        <input
                        name="nombre"
                        type="text" 
                         onChange= { e => guardarNombre(e.target.value)}
                        />
                </div>
                
                        <div className="user-input">
                            <label htmlFor="monto">Monto</label>
                            <input
                            name="monto"
                            type="number"             
                            onChange= { e => guardarMonto(e.target.value)}         
                                   
                            />
                            
                    </div>
             <div className="user-input">
                 <label htmlFor="tipo">Tipo</label>
                <select 
                   onChange= { e => guardarTipo(e.target.value)}
                name="tipo" id="tipos">
                    <option value=""></option>
                    <option value="Fijo">Fijo</option>
                    <option value="Variable">Variable</option>
                    <option value="Hormiga">Hormiga</option>
                    <option value="Discrecional">Discrecional</option>
                    <option value="Ocio">Ocio</option>
                </select>
             </div>

             <input type="submit" className="button" value="Done"/>
            </form>
             {errorApp ? <div className="error-text-presupuestador"> Todos los campos son obligatorios y los montos deben ser mayores a 0</div> :null}

        </div>
     );
}
 
export default addGasto;