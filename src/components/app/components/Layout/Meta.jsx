
const Meta = ({handleSubmit}) => {

const handleSubmitHome = e => {
        e.preventDefault()
        handleSubmit()
    };

    return ( 

        <div className="contenedor-add content-form-meta content-form">
            <form 
              onSubmit={ e => handleSubmitHome(e)}
            >
                <div className="user-input">
                     <label htmlFor="meta">Meta</label>
                        <input
                        name="meta"
                        type="number" 
                        />
                </div>
                
           
           

             <input type="submit" className="button" value="Done"/>
            </form>
        </div>
     );
}
 
export default Meta;