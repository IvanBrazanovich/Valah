 import {Fragment} from "react"
 
 import Header from "./Header"
import SecondLoad from "./SecondLoad"
import FirstLoad from "./FirstLoad"

import "./css/Basic.css"

const Principal = () => {
    return ( 
        <Fragment>
            
            <Header />
            <FirstLoad />
            <SecondLoad />



        </Fragment>

     );
}
 
export default Principal;