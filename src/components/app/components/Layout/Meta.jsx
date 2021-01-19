

const Meta = ({submitPresupuesto, errorApp, guardarMeta }) => {





    const handleMeta = (e) => {
        e.preventDefault()

    

         submitPresupuesto("meta")

           /*   */
    };

    return ( 

        <div className="contenedor-add content-form-meta content-form">
            <form 
              onSubmit={ e => handleMeta(e)}
            >
                <div className="user-input">
                     <label htmlFor="meta">Meta</label>
                        <input
                        name="meta"
                        type="number" 
                        onChange = {e => guardarMeta(e.target.value) }
                        />
                </div>
                
           
           

             <input type="submit" className="button" value="Done"/>
            </form>
                         {errorApp ? <div className="error-text-presupuestador"> Todos los campos son obligatorios y los montos deben ser mayores a 0</div> :null}

        </div>
     );
}
 
export default Meta;