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
      
        <div className="App">
            <div className="auth-form-container">
                <div className="buttons" style={{display: 'block', width:'100%'}}>
                <Link to={'/login'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Login</button></Link>
                    <Link to={'/register'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Register</button></Link>
                </div>
                <h2>Login </h2>
                <form className="login-form" onSubmit={handleSubmit}>
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Log In</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here.</button>
            </div>
        </div>
        </>
    )
}

export default Login;