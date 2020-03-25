import React  from "react"
import MaritalStatus from '../Forms/MaritalStatus'

const Marital = ( ) => {
    const name = "Federal-Income-Tax";
    
    return ( 
    <>   
     <MaritalStatus taxName={name} />     
    </>
    );
}


export default Marital;