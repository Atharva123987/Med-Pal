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
            
            <ul>
                <li>
                  <Link to='/'><AiOutlineHome style={{color: 'white', fontSize: '25px'}}/></Link>
                </li>
                <li>
                  <Link to='/logout'><CgLogOut style={{color:'white',fontSize:'25px'}}/></Link>
                </li>
                <li>
                   <Link to='/about'><BsInfoCircle style={{color:'white',fontSize:'20px'}}/></Link>
                </li>
            </ul>
        </div>
        </>
    )
}

export default Sidenav;