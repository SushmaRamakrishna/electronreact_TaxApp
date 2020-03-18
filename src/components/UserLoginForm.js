import React ,{ useState } from 'react';
import "react-datepicker/dist/react-datepicker.css";
import {Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';


const UserLoginForm = ({taxName }) => {
    const [FirstName, setFirstname] = useState('');
    const [LastName, setLastname] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState(new Date());
    const [ZipCode, setZipCode] = useState('');
    const [FirstNameInvalid, setInvalid] = useState('');
    const [LastNameInvalid, setInvalidLastName] = useState('');
    const [ZipCodeInvalid, setInvalidZipCode] = useState('');
    const letters = /^[A-Za-z]+$/;
    let fullName= 'Welcome! to Tax App ' + FirstName + ' ' + LastName;
    
   
    UserLoginForm.prototypes = {
        FirstName: PropTypes.string.isRequired,
    };
    const validateFirstname = event => {
       
        setInvalid('');   
     
        if(!event.target.value.match(letters) || event.target.value.length > 15 || event.target.value.length === '')
            setInvalid("Please enter a Valid First Name");                     
        
        setFirstname(event.target.value); 
  }
  const validateLastname = event => {
       
        setInvalidLastName('');    
     
        if(!event.target.value.match(letters) || event.target.value.length > 15 || event.target.value.length === '')
            setInvalidLastName("Please enter a Valid Last Name");                    
        
        setLastname(event.target.value); 
  }
  const validateZipCode = event => {
       
        setZipCode('');    
     
        if(event.target.value.length > 5 || event.target.value.length === '')
            setInvalidZipCode("Please enter a Valid Zip Code");               
        
        setZipCode(event.target.value); 
  }
  return (
        <div>
           <p className="lead">We just need a few details to get us rolling.</p>         
                        <Form>                         
                            <Form.Row>
                                <Form.Group as={Col} controlId="formGridFirstName">
                                    <Form.Label >First Name</Form.Label>                               
                                    <Form.Control type="Text" pattern = "[A-Za-z]" value={FirstName} onChange={validateFirstname} 
                                    placeholder = "First Name"  required></Form.Control> 
                                    <Form.Label className="errors">{FirstNameInvalid}</Form.Label> 
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridLastName">
                                    <Form.Label>Last Name</Form.Label>  
                                    <Form.Control type="Text" value={LastName} onChange={validateLastname} 
                                    placeholder = "Last Name"  required></Form.Control>   
                                    <Form.Label className="errors">{LastNameInvalid}</Form.Label>                         
                                </Form.Group>
                            </Form.Row>      
                            <Form.Row>
                                 <Form.Group as={Col} controlId="formGridDateOfBirth">
                                    <Form.Label>Date of Birth</Form.Label>                                  
                                    <Form.Control
                                        type="date"
                                        showpopperarrow={ 0}
                                        selected={DateOfBirth}                                                                       
                                        onChange={date => setDateOfBirth(date)}
                                        showyeardropdown={1}
                                        dateformatcalendar="MMMM"
                                        yeardropdownitemnumber={15}
                                        scrollableyeardropdown={0}
                                        required
                                      ></Form.Control>
                                </Form.Group>
                                <Form.Group as={Col} controlId="formGridZipCode">
                                    <Form.Label>Zip Code</Form.Label>
                                    <Form.Control type="number" value={ZipCode} onChange={ validateZipCode } ></Form.Control>
                                    <Form.Label className="errors">{ZipCodeInvalid}</Form.Label>   
                                </Form.Group>
                                
                            </Form.Row>  
                            <Form.Row>
                                <Form.Group id="formGridCheckbox">
                                    <Form.Check type="checkbox" label="I Live outside the US" />
                                </Form.Group>
                            </Form.Row>                 
                                               
                            <Link class="btn btn-primary" to={`/uploadw2/${FirstName}`}>Continue</Link>
                           
                            <Form.Text> { fullName }</Form.Text> 
                           
            </Form> 
          </div>
  
);

} 

export default UserLoginForm;