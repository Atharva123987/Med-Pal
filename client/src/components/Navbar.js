import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Log_In from '../assets/login.png'
import Register from '../assets/register.png'
import Logo from '../assets/logo2.png'

const Navbar = (props) => {
  return (
    <>
      <div className="nav-container">
          
          <a href="/"><img src={Logo} className="logo" alt="website logo" /></a>
          <div className="heading">MEDPAL</div>
            <div className="navbar-buttons">
              {
                props.buttons && 
                (
                <>
                <Link to={'/login'}><img src={Log_In} id='login-button'alt="login"/></Link>
                <Link to={'/register'}><img src={Register}  id='register-button' alt="register"/></Link>
                </> 
                )
              }
              {
                !props.buttons &&
                (
                  <>
                  <Link to={'/dashboard'} className="btn btn-primary">Dashboard</Link>
                  </>
                )
              }
              
            </div>
        </div>
    </>
  );
};
export default Navbar;
