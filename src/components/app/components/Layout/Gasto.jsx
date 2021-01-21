

const Gasto = ({gasto, eliminarObjecto, editarObjecto}) => {

 const { nombre, monto, tipo, id } = gasto;




    return ( 
                  <tr>
                    <td>{nombre}</td>
                    <td>{monto}</td>
                    <td>{tipo}</td>
                    <td> 
                    <button className="button-inside editar btn-primary"
                  onClick={ e => editarObjecto(id, "gasto")}
                    >Editar</button>
                    <button className="button-inside eliminar btn-danger"
                    onClick={ e => eliminarObjecto(id, "gasto")}
                    >Eliminar</button>

                    </td>
                </tr>

     );
}
 
export default Gasto;