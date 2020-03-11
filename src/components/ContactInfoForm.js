import React from 'react';
import {Form} from 'react-bootstrap';
import Col from 'react-bootstrap/Col'

const ContactInfo = ({ userInfo }) => {
  const fileupload = e => {
     let files = e.target.files;
     let reader = new FileReader();
     reader.readAsDataURL(files[0]);
     reader.onload=(e) => {
         console.warn('img' , e.target.result);
     }
  }
  return(
    <>
      <div className="container">
	     <div className="row">
	       <div className="col-md-6">
	          <form method="post" action="#" id="#">                
              <div className="form-group files color">
                   <label>Next, { userInfo.firstname} { userInfo.lastname } please upload your W2 file..  </label>
                   <input type="file" className="form-control" multiple=""></input>
              </div>                       
            </form>	      	      
	        </div>
	      </div>
      </div>
    </>
  );

 };

 export default ContactInfo;

 