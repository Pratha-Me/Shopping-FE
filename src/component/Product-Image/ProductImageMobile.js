import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

const ProductImageMobile = ({ image }) => {
  return (
    <Carousel>
      {image &&
        image.map((item, idx) => {
          return (
            <div key={idx}>
              <img src={item} />
            </div>
          );
        })}
    </Carousel>
  );
};

export default ProductImageMobile;
