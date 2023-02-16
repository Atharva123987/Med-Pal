import './footer.css'
import {Link} from 'react-router-dom'
import { HashLink as L } from 'react-router-hash-link';
import {BsArrowUpCircle} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {CiLinkedin} from 'react-icons/ci';
import {AiOutlineMail} from 'react-icons/ai';

const Footer = ()=>{
    
    return(
        <>
        <footer>
            <div id='footer-top'>
            <L smooth to="/#" className='footer-links'>
                <BsArrowUpCircle/>
                <span>   Back to Top</span>
                </L>
            </div>
            <div id='footer-bottom'>
                <div id='footer-left'>
                <Link to='/about' className='footer-links'>About</Link>
                <Link to='/contact' className='footer-links'>Contact Us</Link>
            </div>
            
            <div id='footer-right'>
                <span><a href='http://www.google.com'><AiFillGithub/></a> </span>
                <span><a href='http://www.google.com'><CiLinkedin/></a> </span>
                <span><a href='http://www.google.com'><AiOutlineMail/></a> </span>
                
            </div>
            </div>
        </footer>
        </>
    );
}
export default Footer;