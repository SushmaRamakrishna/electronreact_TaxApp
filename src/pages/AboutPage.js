import React from "react"

const About = () => {
    return ( 
        <>      
        <div className="about">
         
            <div className="container mt-3">          
                    <form >
                        <p className="lead">We just need a few details to get us rolling.</p>         
                        <div className="input-group mb-3">
                            <div className="input-group-pretend">
                                <span className="input-group-text">Person</span>
                            </div>
                            <input type = "text" className="form-control" name = "FirstName"   id = "FirstName" 
                                    placeholder = "First Name"  required></input>                     
                            <input type = "text" className="form-control" name = "LastName"  id = "LastName" 
                                    placeholder = "Last Name"  required></input>                             
                        </div>      
                        <div className="input-group mb-3">
                            <span className="input-group-text">Date of Birth</span>
                            <input type = "text" className="form-control" name = "DateOfBirth" id = "DateOfBirth"          
                                placeholder = "MM/DD/YYY"  required></input>  
                        
                            <span className="input-group-text">Zip Code</span>
                            <input type = "text" className="form-control" name = "ZipCode"  id = "ZipCode" 
                                placeholder = "Zip Code"  required></input>  
                        </div>
                        <div className = "lead">
                            <input type="submit" className = "btn btn-info"  value="submit" />
                        </div>     
                        <p></p>                  
                    </form>
                    
                </div> 
            </div>         
    </>
    );
}


export default About;