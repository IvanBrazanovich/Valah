

const Gasto = ({gasto}) => {

 const { nombre, monto, tipo } = gasto;



    return ( 
                  <tr>
                    <td>{nombre}</td>
                    <td>{monto}</td>
                    <td>{tipo}</td>
                    <td></td>
                </tr>

     );
}
 
export default Gasto;