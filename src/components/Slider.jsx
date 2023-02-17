import Carousel from 'react-bootstrap/Carousel';
import ProfilePic from '../assets/profilepic.png'
import Car1 from '../assets/carousel1.jpg'
import Car2 from '../assets/carousel2.jpg'
import Car3 from '../assets/carousel3.jpg'
import './slider.css'
const Slider =()=> {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car1}
          alt="First slide"
          style={{width:"100%"}}
        />
        <Carousel.Caption>
          <h3 class="headings">Track all your health related needs from one place</h3>
          <p>Our all-in-one dashboard makes sure all the medical needs are in one place</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car2}
          alt="Second slide"
          style={{width:"100%", alignContent:"center"}}
        />

        <Carousel.Caption>
          <h3 class="headings">Health First</h3>
          <p>MedPal gives tips that ensure that health is always the priority</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car3}
          alt="Third slide"
          style={{width:"100%", alignContent:"center"}}
        />

        <Carousel.Caption>
          <h3 class="headings">User friendly interface</h3>
          <p>
            MedPal's interface is simplistic so that people of all ages can use it.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Slider;