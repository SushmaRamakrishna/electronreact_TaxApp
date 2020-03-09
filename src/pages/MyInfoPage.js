import React  from "react"
import UserLoginForm from '../components/UserLoginForm'

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