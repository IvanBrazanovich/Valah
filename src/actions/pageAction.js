import { 
    OBTENER_ESCRITOS,
    OBTENER_ESCRITOS_EXITO,
    OBTENER_ESCRITOS_ERROR,
    AGREGAR_ESCRITO,
    AGREGAR_ESCRITO_EXITO,
    AGREGAR_ESCRITO_ERROR,
    ELEGIR_ESCRITO,
    ACTUALIZAR_ESCRITO,
    ACTUALIZAR_ESCRITO_EXITO,
    ACTUALIZAR_ESCRITO_ERROR

} from "../types/index"

import clienteAxios from "../config/axios"


export function obtenerInfoUsuarioEscritos(cuentaActual) {

    

    return async (dispatch) => {
      dispatch( obtenerInfoUsuario() )

      try {

            

          
          const cuentas = await clienteAxios.get(`/cuentasInfo`) 
          const cuentasInfo = cuentas.data;
          const actualObject = cuentasInfo.filter( cuenta => cuenta.email === cuentaActual);

        

          if ( actualObject[0].escritos ) {
              dispatch( obtenerInfoUsuarioExito(actualObject[0].escritos) )
          } 
          
         

      } catch(error) {
          console.log(error)
           dispatch( obtenerInfoUsuarioError() ) 

      }
  };
}


const obtenerInfoUsuario = () => ({
    type: OBTENER_ESCRITOS
});



const obtenerInfoUsuarioExito = escritos => ({
    type: OBTENER_ESCRITOS_EXITO,
    payload: escritos
});

const obtenerInfoUsuarioError = () => ({
    type: OBTENER_ESCRITOS_ERROR
});




export function addPageAction(page, cuentaActual) {

    return async (dispatch)  => {

        dispatch( addPage() )

        const cuentas = await clienteAxios.get(`/cuentasInfo`);

        const cuentaObject = cuentas.data.filter( cuenta => cuenta.email === cuentaActual )

        const { id } = cuentaObject[0]; 


      

            const escritoArray = {
                page,
                id: new Date().getTime(),
                text: ""
            }



            if ( !cuentaObject[0].escritos ) {
        
                cuentaObject[0].escritos = [escritoArray]

                try {

                   await clienteAxios.put(`cuentasInfo/${id}`, cuentaObject[0])
                    dispatch ( addPageExito( escritoArray ))
                } catch (error) {
                    console.log(error)
                    dispatch ( addPageError())

                }
            } else if ( cuentaObject[0].escritos) {
                try {
                    cuentaObject[0].escritos = [ ...cuentaObject[0].escritos, escritoArray ];

                    clienteAxios.put(`cuentasInfo/${id}`, cuentaObject[0])

                    dispatch ( addPageExito( escritoArray ))

                } catch (error) {
                    console.log(error)
                    dispatch ( addPageError())
                }
                 


                }
         
    }   
};

const addPage = () => ({
    type: AGREGAR_ESCRITO
});



const addPageExito = escritos => ({
    type: AGREGAR_ESCRITO_EXITO,
    payload: escritos
});

const addPageError = () => ({
    type: AGREGAR_ESCRITO_ERROR
});


export function elegirPageAction(id ) {

    const idEscrito = id;

    return (dispatch) => {
        dispatch( addPageId(idEscrito) )
    };
}


const addPageId = (idEscrito) => ({
    type: ELEGIR_ESCRITO,
    payload: idEscrito
});





export function addEscritoAction(id, escrito, cuentaActual) {

       
    const escritoText = escrito;
    return async (dispatch) => {
       dispatch( actualizarEscrito( ) )
  
        try {
  
              
            
            const cuentas = await clienteAxios.get(`/cuentasInfo`) 
            const cuentasInfo = cuentas.data;
            const actualObject = cuentasInfo.filter( cuenta => cuenta.email === cuentaActual);
            
            const idObject = actualObject[0].id;
          
            const escritosNuevo = actualObject[0].escritos.map ( escrito => {

                if (escrito.id === id ) {
                    escrito.text = escritoText;
                }

                return escrito;
            } );

            
            

            actualObject[0].escritos = escritosNuevo;



                await clienteAxios.put(`cuentasInfo/${idObject}`, actualObject[0]);

                dispatch ( actualizarEscritoExito(escritosNuevo) )

            
        } catch(error) {
            console.log(error)
           
            dispatch ( actualizarEscritoError() )
        }
    };
}


const actualizarEscrito = () => ({
    type: ACTUALIZAR_ESCRITO
});



const actualizarEscritoExito = escritosNuevo => ({
    type: ACTUALIZAR_ESCRITO_EXITO,
    payload: escritosNuevo
});

const actualizarEscritoError = () => ({
    type: ACTUALIZAR_ESCRITO_ERROR
});




