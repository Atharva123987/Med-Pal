import Carousel from "react-bootstrap/Carousel";
import Car1 from "../assets/carousel1.jpg";
import Car2 from "../assets/carousel2.jpg";
import Car3 from "../assets/carousel3.jpg";
import "./slider.css";
import { useState } from "react";
const Slider = () => {
	const [index, setIndex] = useState(0);

	const handleSelect = (selectedIndex, e) => {
		setIndex(selectedIndex);
	};
	return (
		<Carousel activeIndex={index} onSelect={handleSelect}>
			<Carousel.Item>
				<img
					className="d-block w-100 h-50 overflow-hidden m-auto"
					src={Car1}
					alt="First slide"
					id="slider-img"
				/>
				<Carousel.Caption>
					<h3>First slide label</h3>
					<p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 h-50 overflow-hidden"
					src={Car2}
					alt="Second slide"
					id="slider-img"
				/>

				<Carousel.Caption>
					<h3>Second slide label</h3>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
				</Carousel.Caption>
			</Carousel.Item>
			<Carousel.Item>
				<img
					className="d-block w-100 h-50 overflow-hidden"
					src={Car3}
					alt="Third slide"
					id="slider-img"
				/>

				<Carousel.Caption>
					<h3>Third slide label</h3>
					<p>
						Praesent commodo cursus magna, vel scelerisque nisl consectetur.
					</p>
				</Carousel.Caption>
			</Carousel.Item>
		</Carousel>
	);
};

export default Slider;
