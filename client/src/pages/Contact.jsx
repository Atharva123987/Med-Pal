import {Button, Form, Container} from "react-bootstrap";
import '../App.css'
import {IconContext} from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './contact.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Contact = () => {
    return ( 
        <div>
          <Navbar buttons={true}/>
        <Container
      className="border mt-5 mb-5 mt-md-4 mt-lg-5"
      style={{ maxWidth: "600px" }}
    >
        <h1 className="heading2">Contact Here</h1>
        <Form>
          <Form.Group controlId = "formBasicName">           
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
          </Form.Group>
        <br/>
         <Form.Group controlId="formBasicEmail">
         <Form.Label>Email</Form.Label>
         <Form.Control type="email" placeholder="Enter your email"/>
         </Form.Group>
        <br/>
        <Form.Group controlId="formBasicTextArea">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={3} placeholder="Type your message here..."/>
        </Form.Group>
        <br/>
        <Button variant="success" type="submit" className="my-2">Submit
        </Button>
        <br/>
        <h2 className="heading2"> Also, Connect With Us at... </h2>
        <br/>
      </Form>
      <div className='d-flex align-items-center'>
      <IconContext.Provider value={{size: 30}}>
      <p className="nav-item"  ><a href="#"><FaTwitter style={{color:"black"}} className="social-icon"/></a></p>
      <p className="nav-item" ><a href="#"><FaInstagram style={{color:"black"}} className="social-icon"/></a></p>
      <p className="nav-item" ><a href="#"><FaLinkedin style={{color:"black"}} className="social-icon"/></a></p>
      <p className="nav-item" ><a href="#"><SiGmail style={{color:"black"}} className="social-icon"/></a></p>
      </IconContext.Provider>
      </div>
      </Container>
      <Footer/>
    </div>
     );
}
 
export default Contact;
