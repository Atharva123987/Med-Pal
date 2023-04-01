import './home-content.css'
import { Fade } from "react-awesome-reveal";
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import tempImage from '../assets/badge.png'
import { LazyLoadImage } from 'react-lazy-load-image-component';
const HomeContent = () => {
    return (
        <>
            <div className='container'>
                <Fade delay='10' direction='top' className='mb-5'>
                    <h2>For all your medical needs</h2>
                </Fade>
                <Row xs={1} md={3} className="g-4">
                    <Fade delay='50' damping={0.05} direction='left' triggerOnce='true'>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={tempImage} as={LazyLoadImage} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fade>
                    <Fade delay='20' damping={0.05} direction='left' triggerOnce='true'>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={tempImage} as={LazyLoadImage} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fade>
                    <Fade damping={0.05} direction='left' triggerOnce='true'>
                        <Col>
                            <Card>
                                <Card.Img variant="top" src={tempImage} as={LazyLoadImage} />
                                <Card.Body>
                                    <Card.Title>Card title</Card.Title>
                                    <Card.Text>
                                        This is a longer card with supporting text below as a natural
                                        lead-in to additional content. This content is a little bit
                                        longer.
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    </Fade>
                </Row>
            </div>
        </>
    )
}
export default HomeContent;