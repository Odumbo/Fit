import {useState} from 'react'
import { Link, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Routines from "./routes/Routines";
import MyRoutines from "./routes/MyRoutines";
import Activities from "./routes/Activities";
import Register from "./routes/Register";
// import NoMatchPage from './NoMatchPage';
import Container from '@mui/material/Container';
import { logout } from "./utils/auth"
import './index.css';

function App() {
  const [token, setToken] = useState (window.localStorage.getItem('token'))
  
  return (
    
    <div className='app'>
      <h1 className='logo'>Fitness Tracker</h1>
      <nav className='nav'
        style={{
        
          borderBottom: "solid 2px",
          paddingBottom: "1rem",
          
        }}
      >
       {!token? <Link to="/home">Home</Link>: null}
       {!token? <Link to="/register">Register</Link>  :null}
        <Link to="/routines">Routines</Link> {" "}
        {token? <Link to="/myroutines">My Routines</Link> : null}
        <Link to="/activities">Activities</Link> {" "}
        {token? <button onClick={()=>logout(setToken)}>Logout</button> : null}
      </nav>
      <Container maxWidth="lg">
      <Routes>
    <Route path="home" element={<Home setToken={setToken}/>} />
    <Route path="register" element={<Register setToken={setToken} />} />
    <Route path="routines" element={<Routines />} />
    <Route path="myroutines/:postId" element={<MyRoutines token= {token}/>} />
    <Route path="activities" element={<Activities />} />
    {/* <Route path="*" component={NoMatchPage} /> */}
    </Routes>
    </Container>
    </div>
  );
}


       
      
        
      
      
    

export default App;
