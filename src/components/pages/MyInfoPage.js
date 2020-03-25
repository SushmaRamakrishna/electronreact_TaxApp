import React  from "react"
import UserLoginForm from '../Forms/UserLoginForm'

const MyInfo = ( { match }) => {
    const name = "Federal-Income-Tax";
    
    return ( 
    <>    
    <h1>{ name }</h1> 
     <UserLoginForm taxName={name} />
     
    </>
    );
}


export default MyInfo;