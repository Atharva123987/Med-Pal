import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar";
import '../App.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        props.onFormSwitch('login');
    }

    return (
        <>
        <Navbar />
        <div className="App">
            <div className="auth-form-container">
            <div className="buttons" style={{display: 'block', width:'100%'}}>
                    <button style={{float: 'left', width:'50%'}}><Link to={'/login'} style={{textDecoration: 'none'}}>Login</Link></button>
                    <button style={{float: 'left', width:'50%'}}><Link to={'/register'} style={{textDecoration: 'none'}}>Register</Link></button>
                </div>
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    <label htmlFor="password">password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <button type="submit">Register</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
    </div>
    </>
    )
}
export default Register;