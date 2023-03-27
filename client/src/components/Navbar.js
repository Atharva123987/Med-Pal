import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Log_In from '../assets/login.png'
import Register from '../assets/register.png'
import Logo from '../assets/logo.png'
const Navbar = () => {
  return (
    <>
      <div className="nav-container">
          
          <a href="/"><img src={Logo} className="logo" alt="website logo" /></a>
          <div className="heading">MEDPAL</div>
            <div className="buttons">
              <Link to={'/login'}><img src={Log_In} id='login'alt="login"/></Link>
              
              <Link to={'/register'}><img src={Register}  id='register' alt="register"/></Link>
            </div>
        </div>
    </>
  );
};
export default Navbar;
