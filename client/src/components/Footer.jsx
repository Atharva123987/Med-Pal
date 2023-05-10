import './footer.css'
import {Link} from 'react-router-dom'
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
            <Link className='footer-links d-flex' onClick={scrollToTop}>
                <BsArrowUpCircle/>
                <h4>   Back to Top</h4>
                </Link>
            </div>
            <div id='footer-bottom'>

            <div id='footer-left'>
            
                <Link to='/about' className='footer-links' onClick={scrollToTop}>About</Link>
                
                <Link to='/contact' className='footer-links' onClick={scrollToTop}>Contact Us</Link>
              
            </div>
            
            <div id='footer-right'>
                <span><a href='https://github.com/spursycoder/Med-Pal/blob/2271633f51fac523a066d9803d49117dff18a092/README.md'><AiFillGithub style={{fontSize:'1.5rem', margin:'5px'}}/></a> </span>
                <span><a href="mailto:medpal96@gmail.com"><AiOutlineMail style={{fontSize:'1.5rem', margin:'5px'}}/></a> </span>
                
            </div>
            </div>
        </footer>
        </>
    );
}

export default Footer;
