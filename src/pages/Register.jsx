import React, { useState } from "react";
import {Link} from 'react-router-dom';
import Navbar from "../Navbar";
import '../App.css';

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');
    const [gender, setGender] = useState('');

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
                    <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Full Name" style={{fontSize: '1em', display:'block', width: '100%'}}/>
                    <label htmlFor="email">Email</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" style={{fontSize: '1em', display:'block', width: '100%'}}/>
                    <label htmlFor="password">Password</label>
                    <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                    <label htmlFor="gender"> Gender
                    <br />
                        <input type="radio" name="gender" value="male" onChange={(e)=>setGender(e.target.value)}/> Male
                        <input type="radio" name="gender" value="female" onChange={(e)=>setGender(e.target.value)}/> Female
                    </label>
                    <label htmlFor="age"> Age
                        <input type="number" min="1" max="150" style={{marginLeft:'2em', width:'75%'}}/>
                    </label>
                    <label htmlFor="height"> Height
                        <input type="number" style={{marginLeft:'1em', width:'73.5%'}}/>
                    </label>
                    <label htmlFor="width"> Width
                        <input type="number" style={{marginLeft:'1em', width:'73.5%'}}/>
                    </label>
                    <button type="submit" style={{marginTop: '1rem', borderRadius: '5px'}}>Register</button>
                </form>
                <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Already have an account? Login here.</button>
            </div>
    </div>
    </>
    )
}
export default Register;