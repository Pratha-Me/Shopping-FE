import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../Product-Card/ProductCard';
import '../../styles/css/ProductCardDirectory.css'
import { Link } from 'react-router-dom';

export default function ProductCardDirectory() {
    var settings = {
        // autoplay: true,
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 5,
        initialSlide:5,
        responsive: [
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 5,
              slidesToScroll: 5,
              infinite: true,
              dots: false,
            },
          },
          {
            breakpoint: 865,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1,
            },
          },
        ],
      };
    return (
        <div>
          <Link to='/'>
            <h4 className="my-1" style={{ textAlign:'center' }}>
              Home Essentials
          </h4>
          </Link>
          <div className='product-card-container'>
        <Slider {...settings}>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
          <ProductCard></ProductCard>
        </Slider>
        </div>
    </div>
    )
}
