
 
 import { useEffect, useState } from "react";

const Escrito = ({ guardarEscritoText, escritoActual, idTextActual }) => {
    

    const [ textoActual, guardarTexto ] = useState("");

    useEffect ( () => {
       
        guardarTexto(escritoActual[0].text)
    }, [idTextActual]);


    const mandarEscrito = (escrito) => {

        guardarTexto(escrito)
        

        if(escrito.length %10 === 0) {
                guardarEscritoText(escrito)
        }
    };
    return (
        
        <div className="escritos">
            <textarea className="escrito-input"  
                onChange = {e => mandarEscrito(e.target.value)}
                value = {textoActual}
            ></textarea>
        </div>
        
        
        );
}
 
export default Escrito;