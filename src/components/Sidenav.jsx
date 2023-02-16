import {Link} from 'react-router-dom'
import './sidenav.css'
import { AiOutlineHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
import {AiOutlineSearch} from 'react-icons/ai'
const Sidenav = () =>{
    return(
        <>
        <div className="sidenav">
            
                  <Link to='/'><AiOutlineHome/></Link>
                
              
                  <Link to='/logout'><CgLogOut/></Link>
              
              
                   <Link to='/about'><BsInfoCircle /></Link>

                   {/* <Link><button onClick={()=>{console.log("herdfdgde")}}><AiOutlineSearch/></button></Link>      */}
        
        </div>
        </>
    )
}

export default Sidenav;