import React from "react";
import './Navbar.css';
import {Link} from 'react-router-dom';
import Log_In from './assets/login.png'
import Register from './assets/register.png'

const Navbar = () => {
  return (
    <>
      <div className="container">
          <a href="/"><img src="https://i.ibb.co/YbHsdnz/mp.png" className="logo" alt="website logo" /></a>
          
          <div className="heading">MedPal</div>
            <div className="buttons">
              <button><Link to={'/dashboard'}>Dashboard</Link></button>
              <Link to={'/login'}><img src={Log_In} className="login" alt="login"/></Link>
              <Link to={'/register'}><img src={Register} className="register" alt="register"/></Link>
            </div>
        </div>
    </>
  );
};
export default Navbar;
