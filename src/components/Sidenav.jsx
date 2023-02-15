import {Link} from 'react-router-dom'
import './sidenav.css'
import { AiOutlineHome } from "react-icons/ai";
import { CgLogOut } from "react-icons/cg";
import { BsInfoCircle } from "react-icons/bs";
const Sidenav = () =>{
    return(
        <>
        <div className="sidenav">

            {/* <Link to="/"><p>Home</p></Link>
            <Link to="/logout"><p>Logout</p></Link>
            <Link to="/reminders"><p>Reminders</p></Link>
            <Link to="/about"><p>About</p></Link> */}
            
          
            
                  <Link to='/'><AiOutlineHome style={{color: 'white', }}/></Link>
                
              
                  <Link to='/logout'><CgLogOut style={{color:'white',}}/></Link>
              
              
                   <Link to='/about'><BsInfoCircle style={{color:'white'}}/></Link>
                
        
        </div>
        </>
    )
}

export default Sidenav;