import React, { useState, useEffect } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import './carousel.css'
import { Container, Row, Col } from 'react-bootstrap';

const Carousel = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const length = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [current, length]);

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }

  return (
    <Container fluid id='carousel-div'>
      <Row>
        <Col>
          <section className='slider mb-5'>
            <AiFillCaretLeft id='left-arrow' onClick={prevSlide} />
            <AiFillCaretRight id='right-arrow' onClick={nextSlide} />
            {slides.map((slide, index) => {
              return (
                <div
                  className={index === current ? 'slide active' : 'slide'}
                  key={index}
                >
                  {index === current && (
                    <img src={slide.image} alt='medical image' className='image' />
                  )}
                  <div className="carousel-caption" >
                    <h3 className='carousel-caption-heading' >{slide.captionHeader}</h3>
                    <p className='carousel-caption-description' >{slide.captionText}</p>
                  </div>
                </div>
              );
            })}
          </section>
        </Col>
      </Row>
    </Container>
  );
};

export default Carousel;
