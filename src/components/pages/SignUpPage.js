import React  from "react"
import UserLoginForm  from './components/SignUpForm'

const SignUp = ( { match }) => {
    const name = "Federal-Income-Tax";
    
    return ( 
    <>    
    <h1>{ name }</h1> 
     <UserLoginForm taxName={name} />
     
    </>
    );
}


export default SignUp