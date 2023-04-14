import {Link, redirect} from 'react-router-dom'
import './sidenav.css'
import { AiOutlineHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { useLogout } from "../hooks/useLogout";

import { BsInfoCircle } from "react-icons/bs";
import {AiOutlineSearch} from 'react-icons/ai'
import { Button } from 'react-bootstrap';
const Sidenav = () =>{

    const { logout } = useLogout();

	const handleLogout = () => {
		logout();
        
	};

    return(
        <>
        <div className="sidenav">
            
                  <Link to='/'><AiOutlineHome/></Link>
                
              
                  <Link to={'/'} onClick={handleLogout}><CgLogOut/></Link>
              
              
                   <Link to='/about'><BsInfoCircle /></Link>

                   {/* <Link><button onClick={()=>{console.log("herdfdgde")}}><AiOutlineSearch/></button></Link>      */}
        
        </div>
        </>
    )
}

export default Sidenav;