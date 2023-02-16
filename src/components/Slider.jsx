import Carousel from "react-bootstrap/Carousel";
import Car1 from "../assets/carousel1.jpg";
import Car2 from "../assets/carousel2.jpg";
import Car3 from "../assets/carousel3.jpg";
import "./slider.css";
const Slider = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car1}
          alt="First slide"
          style={{ width: "100%" }}
        />
        <Carousel.Caption>
          <h3 class="headings">First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car2}
          alt="Second slide"
          style={{ width: "100%", alignContent: "center" }}
        />

        <Carousel.Caption>
          <h3 class="headings">Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="slider-img"
          src={Car3}
          alt="Third slide"
          style={{ width: "100%", alignContent: "center" }}
        />

        <Carousel.Caption>
          <h3 class="headings">Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;
