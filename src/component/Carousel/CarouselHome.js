import React from "react";
import { Carousel } from 'react-bootstrap';
import Carousel1 from '../../assets/images/Carousel1.jpeg'

function MainCarousel() {
    return (
<Carousel>
    <Carousel.Item >
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="First slide"
      style={{'height' : "60vh"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item >
    <img
      className="d-block w-100"
      src={Carousel1}
      alt="First slide"
      style={{'height' : "60vh"}}
    />
    <Carousel.Caption>
      <h3>First slide label</h3>
      <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
    )
}
export default MainCarousel;