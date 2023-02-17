import React, { useState } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Navbar";
import "../App.css";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <>
      
        <div className="App" style={{height: '100vh'}}>
            <div className="auth-form-container">
                <div className="buttons" style={{display: 'block', width:'100%'}}>
                <Link to={'/login'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Login</button></Link>
                    <Link to={'/register'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Register</button></Link>
                </div>
                <h2 style={{marginTop: '1rem'}}>Login </h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">Email
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" style={{fontSize: '1em', display:'block', width: '100%'}}/>
                    </label>
                    <label htmlFor="password">Password
                    <br />
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" style={{fontSize: '1em', display:'block', width: '100%'}}/>
                    </label>
                    <button type="submit" style={{marginTop: '1rem', borderRadius: '5px'}}>Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')} style={{marginTop: '1rem'}}>Don't have an account? Register here.</button>
            </div>
        </div>
        </>
    )
}

export default Login;