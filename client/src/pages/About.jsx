import Navbar from "../components/Navbar";
import sampleImg from "../assets/sample-avatar.png";
import "../App.css";
import "./about.css";
import Footer from "../components/Footer";
import { Fade } from 'react-awesome-reveal';
import { Card, Col} from "react-bootstrap";
import { AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
	return (
		<>
			<Navbar buttons={true} />
<div id="about-container">
				<div id="about-left-container">
					<Fade delay={10} direction='top' style={{ color: "black" }} triggerOnce>
						<h2>About Us</h2>
					</Fade>

					<p
						id="about-text"
					>
						We are a passionate group of student developers who started
						working on this project as part of our university
						curriculum. But over the course of this project, we have
						grown to love this project and we are now working on it as a
						hobby. Our mission is to scale this project up further and
						make it available to everyone.
					</p>
				</div>

				<div className="d-flex">
					<div>
					<Fade delay={100} damping={0.05} triggerOnce>
						<img src={sampleImg} />
						<p style={{textAlign:"center"}}>Atharva Amberkar</p>

						<a className="about-links" href='https://github.com/Atharva123987' style={{textAlign:"center"}}><AiFillGithub/>Atharva123987</a>

						<p style={{textAlign:"center"}}>Front End Developer</p>
					</Fade>
					</div>
					<div>
					<Fade delay={100} damping={0.05} triggerOnce>
						<img src={sampleImg} />
						<p style={{textAlign:"center"}}>Aastle Stephno</p>

						<a className="about-links" href='https://github.com/spursycoder' style={{textAlign:"center"}}><AiFillGithub/>spursycoder</a>

						<p style={{textAlign:"center"}}>Back End Developer</p>
					</Fade>
					</div>
					<div>
					<Fade delay={100} damping={0.05} triggerOnce>
						<img src={sampleImg} />
						<p style={{textAlign:"center"}}>Pankaj Sirari</p>

						<a className="about-links" href='https://github.com/pankajsirari222' style={{textAlign:"center"}}><AiFillGithub/>pankajsirari222</a>
						
						<p style={{textAlign:"center"}}>Front End Developer</p>
					</Fade>
					</div>
					
				</div>
				</div>
			<Footer />
		</>
	);
};

export default About;
