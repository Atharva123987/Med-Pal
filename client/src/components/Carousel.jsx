import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import styles from 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img from '../assets/carousel1.png'
import { Carousel as Carousel1 } from 'react-responsive-carousel';

const Carousel = () => {


  return (
	<Carousel1 infiniteLoop={true} swipeable={true} showStatus={false} showIndicators={false} showThumbs={false}>
	<div>
		<img src={Img}/>
		<p className="legend">Legend 1</p>
	</div>
	<div>
	<img src={Img} />
		{/* <p className="legend">Legend 2</p> */}
	</div>
	<div>
	<img src={Img} />
		{/* <p className="legend">Legend 3</p> */}
	</div>
</Carousel1>
  );
};

export default Carousel;