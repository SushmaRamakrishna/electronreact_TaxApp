import React, {useState, useEffect } from "react"
import ContactInfoForm from '../components/ContactInfoForm'

const ContactInfoPage = ({ match }) => {
  const name = match.params.name;
  const [userInfo, setUserInfo] = useState('');


    useEffect(() => {
    const fetchData = async () => {
        const result = await fetch(`/api/taxes/${name}`);
        const body = await result.json();
        setUserInfo(body);
    }
    fetchData();
    }, [name]);

   
return (
<>
 <ContactInfoForm userInfo={userInfo} />
</>
);
};

export default ContactInfoPage;