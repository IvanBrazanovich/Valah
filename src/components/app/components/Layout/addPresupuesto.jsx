

const addPresupuesto = ({guardarMonto, guardarNombre, guardarTipo, submitPresupuesto, errorApp}) => {

   

    const handleSubmitHome = e => {
        e.preventDefault();

        submitPresupuesto("presupuesto");
    };

    return ( 

        <div className="contenedor-add content-form content-form-presupuesto">
            <form 
                onSubmit={ e => handleSubmitHome(e)}
            >
                <div className="user-input">
                     <label htmlFor="ingreso">Ingreso</label>
                        <input
                        name="ingreso"
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
                    <option value="Activo">Activo</option>
                    <option value="Pasivo">Pasivo</option>
                </select>
             </div>

             <input type="submit" className="button" value="Done"/>
            </form>
             {errorApp ? <div className="error-text-presupuestador"> Todos los campos son obligatorios y los montos deben ser mayores a 0</div> :null}

        </div>
     );
}
 
export default addPresupuesto;