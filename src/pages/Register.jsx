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
        <div className="App">
            <div className="auth-form-container">
            <div className="buttons" style={{display: 'block', width:'100%'}}>
            <Link to={'/login'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Login</button></Link>
                    <Link to={'/register'} style={{textDecoration: 'none'}}><button style={{float: 'left', width:'50%'}}>Register</button></Link>
                </div>
                <h2>Register</h2>
                <form className="register-form" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full name</label>
                        <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="full Name" />
                    <label htmlFor="email">Email
                        <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                    </label>
                    <label htmlFor="gender"> 
                        <input type="radio" name="gender" value="male"/> Male
                        <input type="radio" name="gender" value="female"/> Female
                    </label>
                    <label htmlFor="age"> Age
                        <input type="number" min="1" max="150"/>
                    </label>
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