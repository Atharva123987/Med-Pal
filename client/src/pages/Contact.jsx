import { Button, Form, Container, Toast } from "react-bootstrap";
import '../App.css'
import { IconContext } from "react-icons";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import './contact.css'
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import emailjs from '@emailjs/browser';
import { useRef, useState } from "react";

const Contact = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [showSuccess,setShowSuccess] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_o7in3zf","template_003mf2t", form.current, "eunUXS9Pz6wes028U")
      .then((result) => {
        setShowSuccess(true);
      }, (error) => {
        console.log(error.text);
      });
  };


  return (
    <div  >
      				<Navbar buttons='true' LogButton='true' />


      <Toast
					onClose={() => {
						setShowSuccess(false);
					}}
					bg="success"
					show={showSuccess}
					delay={2000}
					autohide
					style={{ position: "absolute", zIndex: "20", right:"1rem" }}
				>
					<Toast.Header>
						<strong className="me-auto text-success">
							Form submitted successfully!
						</strong>
					</Toast.Header>
					<Toast.Body className="text-white">
						We will get back to you soon.
					</Toast.Body>
				</Toast>
      <Container
        className="border mt-5 mb-5 mt-md-4 mt-lg-5"
        style={{ minHeight: "100vh", maxWidth: "600px" }}
      >
        <h1 className="heading2">Contact Here</h1>

        <Form ref={form} onSubmit={sendEmail}>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" name="user_name" placeholder="Enter your name" required />
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" name="user_email" placeholder="Enter email" required />
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={3} name="message" placeholder="Type your message here..." required />
          <Button variant="success" type="submit" className="my-2">
            Send
          </Button>
        </Form>
      </Container>

      <Footer />
    </div>
  );
}

export default Contact;
