

const Ingreso = ({ingreso}) => {

 const { nombre, monto, tipo } = ingreso;



    return ( 
                  <tr>
                    <td>{nombre}</td>
                    <td>{monto}</td>
                    <td>{tipo}</td>
                    <td></td>
                </tr>

     );
}
 
export default Ingreso;