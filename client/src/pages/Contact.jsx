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
import { useState } from "react";

const Contact = () => {

  const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');


    const generateMailtoLink = () => {
      const subject = "Contact Form Submission";
      const body = `Name: ${name}%0D%0AEmail: ${email}%0D%0A%0D%0AMessage:%0D%0A${message}`;
  
      return `mailto:you@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  
    return ( 
        <div  >
          <Navbar buttons={true}/>
        <Container 
      className="border mt-5 mb-5 mt-md-4 mt-lg-5"
      style={{ minHeight:"100vh",maxWidth: "600px" }}
    >
        <h1 className="heading2">Contact Here</h1>
        <Form>
          <Form.Group controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>

          <Form.Group controlId="formBasicMessage">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Type your message here..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
          </Form.Group>

          <Button
            variant="success"
            type="button"
            className="my-2"
            onClick={() => (window.location.href = generateMailtoLink())}
          >
            Submit
          </Button>
        </Form>
      </Container>
    
      <Footer/>
    </div>
     );
}
 
export default Contact;
