import {useState} from 'react';
import React, {component} from "react";
import {authUser} from '../utils/auth';



const AuthForm = ({setToken, registerOrLogin}) => {
const [username,setUsername] = useState ('');
const [password,setPassword] = useState ('');


return(
    <div className="col-lg-9">
        <div className="form-group form-row">
<form onSubmit ={(e)=>authUser(e, registerOrLogin, setToken, username, password)}>
    <label className="col-lg-2">Username</label>
    <input type="text" className="form-contorl" value={username} onChange={(e) => setUsername(e.target.value)}/>
    <div className="form-group form-row">
    <label className="col-lg-2">Password</label>
    <input type= "password" className="form-contorl"value={password} onChange={(e) => setPassword(e.target.value)} />
    <div className="text-right">
    <button className="btn btn-primary m-1"type= "submit" >Submit</button>
    </div>
    </div>
</form>
</div>
</div>
)
};

export default AuthForm 