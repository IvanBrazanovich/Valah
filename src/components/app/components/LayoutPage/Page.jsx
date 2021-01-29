

const Page = ({escrito, elegirPage, cambiar}) => {
    
    const { page, id } = escrito;


    const handleClick = () => {
        cambiar("page")
        elegirPage(id)
    };
    
    return ( 
        
        <div className="template">
                    <h5>&rsaquo;</h5>
                    <p
                    onClick = {handleClick}
                    >{page}</p>
         </div>

     );
}
 
export default Page;