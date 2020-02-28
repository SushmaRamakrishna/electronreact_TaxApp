import React from "react"
//import ReactDOM from 'react-dom';
import { Link } from "react-router-dom"
import "../App.css"
//import { MongoClient } from "mongodb"


class About extends React.Component {
    constructor(props) {
    super(props);
    this.state = { firstname: '' , lastname: '', submit: '' };
    this.handleSubmit = this.handleSubmit.bind(this);
  }
 
 handleSubmit(event) {
    event.preventDefault()
    const data = new FormData(event.target);
    const name = 'Hello! We would love to know you more ' +data.get('FirstName') + ' ' + data.get('LastName')
    this.setState({ submit : name })    
    
  }

    render() {
    return (
       
        <div className="about">
            <p>We just need a few details to get us rolling</p>
            <div className="container mt-3"> 
                <ul className="nav nav-tabs">
                    <li className="nav-item">
                        <a className="nav-link active " data-toggle="tab" href="#wages">Wages & Income</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#Credits">Deduction & Credits</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" data-toggle="tab" href="#health">Health Insurance</a>
                    </li>
                </ul>
                <div className="tab-content">       
                    <div id="wages" className="container tab-pane active">    
                     <form onSubmit={this.handleSubmit}>
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
                        <p> {this.state.submit}</p>                  
                    </form>
                    
                      <Link className ="App-link" to= "/">Link to Home</Link>      
                    </div>
                    <div id="Credits" className="container tab-pane fade">
                        <h3>Deduction & Credits</h3>
                        <p>Please give us information about your donations.</p>        
                    </div>
                    <div id="health" className="container tab-pane fade">
                        <h3>Health Insurance</h3>
                        <p>Who is your Health Insurance Provider.</p>
                    </div>
                </div>
            </div> 
           
        </div>
    
    
    )
 }
}

export default About