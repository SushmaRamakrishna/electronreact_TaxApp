import React, {useState, useEffect } from "react"
import Uploadw2File from '../components/UploadW2Form';

const Uploadw2 = ({ match }) => {
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
 <Uploadw2File userInfo={userInfo} />
</>
);
};

export default Uploadw2;