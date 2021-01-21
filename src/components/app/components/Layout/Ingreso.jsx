

const Ingreso = ({ingreso, eliminarObjecto, editarObjecto}) => {

 const { nombre, monto, tipo, id } = ingreso;



    return ( 
                  <tr>
                    <td>{nombre}</td>
                    <td>{monto}</td>
                    <td>{tipo}</td>
                    <td>
                    <button className="button-inside editar btn-primary"
                     onClick={ e => editarObjecto(id, "ingreso")}

                    >Editar</button>
                    <button
                     className="button-inside eliminar btn-danger"
                     onClick={ e => eliminarObjecto(id, "ingreso")}
                     >Eliminar</button>

                    </td>
                </tr>

     );
}
 
export default Ingreso;