import React from 'react';


const ContactInfo = ({ userInfo }) => {
  

  return(
    <>
  <h1>You reached the Contact Info Page { userInfo.firstname} { userInfo.lastname } </h1>

    </>
  );

 };

 export default ContactInfo;

 