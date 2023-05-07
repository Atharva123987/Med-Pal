import './footer.css'
import {Link} from 'react-router-dom'
import { HashLink as L } from 'react-router-hash-link';
import {BsArrowUpCircle} from 'react-icons/bs';
import {AiFillGithub} from 'react-icons/ai';
import {CiLinkedin} from 'react-icons/ci';
import {AiOutlineMail} from 'react-icons/ai';
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
}

const Footer = ()=>{
    
    return(
        <>
        <footer style={{width:"100%"}}>
            <div id='footer-top'>
            <L smooth to="#" className='footer-links d-flex' onClick={scrollToTop}>
                <BsArrowUpCircle/>
                <h4>   Back to Top</h4>
                </L>
            </div>
            <div id='footer-bottom'>

            <div id='footer-left'>
            
                <Link to='/about' className='footer-links' onClick={scrollToTop}>About</Link>
                
                <Link to='/contact' className='footer-links' onClick={scrollToTop}>Contact Us</Link>
              
            </div>
            
            <div id='footer-right'>
                <span><a href='http://www.google.com'><AiFillGithub style={{fontSize:'1.5rem', margin:'5px'}}/></a> </span>
                <span><a href='http://www.google.com'><CiLinkedin style={{fontSize:'1.5rem', margin:'5px'}}/></a> </span>
                <span><a href='http://www.google.com'><AiOutlineMail style={{fontSize:'1.5rem', margin:'5px'}}/></a> </span>
                
            </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
