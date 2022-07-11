import { useEffect } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import SecuritySettings from '../SecuritySettings';
import Messages from '../Messages';

const MyRoutines = ({token}) => {
    let navigate = useNavigate();
    useEffect(() => {
    fetch('http://fitnesstrac-kr.herokuapp.com/api/users/me', {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ${token}'
    },
  }).then(response => response.json())
    .then(result => {
      console.log(result);
      if (!result.success){
          navigate ("../home",  {replace: true})
      }
    })
    .catch(console.error);
}, [])
return (
    <main>
    <h2>My Routines</h2>
    <SecuritySettings />
    <Messages />
    </main>
    )
}

export default MyRoutines;