import {Link, redirect} from 'react-router-dom'
import './sidenav.css'
import { AiOutlineHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { useLogout } from "../hooks/useLogout";

import { BsInfoCircle } from "react-icons/bs";
import {AiOutlineSearch} from 'react-icons/ai'
import {GiMedicines} from 'react-icons/gi'
import {FaRegHospital} from 'react-icons/fa'
import {AiOutlineAreaChart} from 'react-icons/ai'
import {TbReport} from 'react-icons/tb'
import { Button } from 'react-bootstrap';
const Sidenav = () =>{

    const { logout } = useLogout();

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }

	const handleLogout = () => {
		logout();
        
	};

    return(
        <>
        <div className="sidenav">
            
                  <Link to='/' ><AiOutlineHome/></Link>
                
              
                  <Link to={'/'} onClick={handleLogout}><CgLogOut/></Link>
              
              
                   <Link to='/about' onClick={scrollToTop}><BsInfoCircle /></Link>
                   <Link to='/medicines' onClick={scrollToTop}><GiMedicines /></Link>
                   <Link to='/appointments' onClick={scrollToTop}><FaRegHospital /></Link>
                   <Link to='/charts' onClick={scrollToTop}><AiOutlineAreaChart /></Link>
                   <Link to='/reports' onClick={scrollToTop}><TbReport /></Link>

                   {/* <Link><button onClick={()=>{console.log("herdfdgde")}}><AiOutlineSearch/></button></Link>      */}
        
        </div>
        </>
    )
}

export default Sidenav;