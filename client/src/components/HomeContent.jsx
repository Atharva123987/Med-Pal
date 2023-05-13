import './home-content.css';
import { Fade } from 'react-awesome-reveal';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Accordion from 'react-bootstrap/Accordion';
import { useEffect, useRef, useState } from 'react';
import { FaFilePrescription } from 'react-icons/fa';
import { VscGraphLine } from 'react-icons/vsc'
import { AiOutlineSearch } from 'react-icons/ai'
import { BsFillPinMapFill } from 'react-icons/bs'

const HomeContent = () => {
  const accordionRef = useRef(null);
  const buttonsRef = useRef([]);
  const[userClick, setUserClick] = useState(null)

  useEffect(() => {
    if (accordionRef.current) {
      buttonsRef.current = Array.from(
        accordionRef.current.querySelectorAll('.accordion-button')
      );
    }
  }, [accordionRef]);

  const isFirstButtonClicked = useRef(false);

useEffect(() => {
  let index = 0;
  let intervalId;

  const startInterval = () => {
    intervalId = setInterval(() => {
      index = (index + 1) % buttonsRef.current.length;
      buttonsRef.current[index].click();
    }, 5000);
  };

  if (userClick) {
    clearInterval(intervalId);
  } else {
    if (!isFirstButtonClicked.current) {
      buttonsRef.current[0].click();
      isFirstButtonClicked.current = true;
    }
    startInterval();
  }

  return () => clearInterval(intervalId);
}, [buttonsRef, userClick]);

  


  return (
    <>
      <div className='container home-content-container'>
        <Fade delay={10} direction='top' className='my-5 home-content-heading' triggerOnce>
          <h2>For all your medical needs</h2>
        </Fade>

        <Row xs={1} md={3} className='g-4 subsection1' >
          <Fade delay={100} damping={0.05} direction='left' triggerOnce>
            <Col>
              <Card c>
                <Card.Img
                  variant='top'
                  src='https://ik.imagekit.io/0qlf5pqwx/card-section-1.jpg?updatedAt=1681302671556'
                />
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Manage your prescriptions hassle-free</Card.Title>
                  <Card.Text>
                    No more misplaced prescriptions! Our medical tracker securely stores your doctor's prescriptions in one convenient location, so you can easily access them whenever you need
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Fade>
          <Fade delay={150} damping={0.05} direction='left' triggerOnce>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='https://ik.imagekit.io/0qlf5pqwx/top-view-clock-shape-pills__2_.jpg?updatedAt=1681302887405'
                />
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Stay on top of your healthcare appointments</Card.Title>
                  <Card.Text>
                    Never miss an appointment again! With our built-in calendar and appointment reminders, you'll always know when it's time to see your doctor, ensuring you stay on top of your healthcare journey.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Fade>
          <Fade delay={200} damping={0.05} direction='left' triggerOnce>
            <Col>
              <Card>
                <Card.Img
                  variant='top'
                  src='https://ik.imagekit.io/0qlf5pqwx/card-section-3.jpg?updatedAt=1681302671590'
                />
                <Card.Body style={{ minHeight: "200px" }}>
                  <Card.Title>Access your health data easily with our user-friendly dashboard</Card.Title>
                  <Card.Text>
                    Your health data at your fingertips! Our user-friendly dashboard consolidates your medical records, test results, and other important information, making it easy for you to monitor and manage your health.
                  </Card.Text>
                </Card.Body>
              </Card>
            </Col>
          </Fade>
        </Row>


        <Accordion className='my-5 subsection2' ref={accordionRef}>
          <Accordion.Item eventKey='0'>
            <Accordion.Header onFocus={()=>setUserClick(1)}><AiOutlineSearch style={{ marginRight: "10px" }} />Find a doctor that meets your needs</Accordion.Header>
            <Accordion.Body>
              <img alt='accordion image1' src="https://ik.imagekit.io/medpal/accordian1.webp?updatedAt=1683913601591" height={100} /><br></br>
              Our platform allows you to search for healthcare providers by name, specialty, location, and other filters, making it easy to find a doctor that fits your unique healthcare needs.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='1'>
            <Accordion.Header onFocus={()=>setUserClick(1)}><VscGraphLine style={{ marginRight: "10px" }} />Track Your Progress with Charts and Graphs</Accordion.Header>
            <Accordion.Body>
              <img alt='accordion image2' src="https://ik.imagekit.io/medpal/accordian2.webp?updatedAt=1683913602477" height={100} /> <br></br>
              Med Pal provides you with easy-to-read charts and graphs that allow you to track your progress and monitor your health goals. With just a glance, you can see how your tablets info, doctor appointments, and medical history are affecting your overall health. Plus, our dashboard feature allows you to view your health data in a comprehensive and organized way, making it easy to identify areas for improvement and stay on top of your health.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='2'>
            <Accordion.Header onFocus={()=>setUserClick(1)}> <FaFilePrescription style={{ marginRight: "10px" }} /> Access medical records and history</Accordion.Header>

            <Accordion.Body>
              <img alt='accordion image3' src="https://ik.imagekit.io/medpal/accordian3.webp?updatedAt=1683913602612" height={100} /> <br></br>
              With our platform, you can easily access your medical records and history, so you can share them with your healthcare provider. This feature allows for more personalized care, and helps your doctor make informed decisions about your health.
            </Accordion.Body>
          </Accordion.Item>
          <Accordion.Item eventKey='3'>
            <Accordion.Header onFocus={()=>setUserClick(1)}><BsFillPinMapFill style={{ marginRight: "10px" }} />Get directions and contact information</Accordion.Header>
            <Accordion.Body>
            <img alt='accordion image4' src="https://ik.imagekit.io/medpal/accordian4.webp?updatedAt=1683913602260" height={100} /> <br></br>
              Med Pal provides easy access to a doctor's contact information, office hours, and directions. This allows you to plan your visit more efficiently and make the most of your time at the doctor's office.
            </Accordion.Body>
          </Accordion.Item>
        </Accordion>
      </div>
    </>
  );
};

export default HomeContent;

