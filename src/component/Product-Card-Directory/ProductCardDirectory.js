import React, {useState} from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../Product-Card/ProductCard';
import '../../styles/css/ProductCardDirectory.css'
import { Link } from 'react-router-dom';
import ItemsCarousel from 'react-items-carousel';

export default function ProductCardDirectory() {
    // var settings = {
    //     // autoplay: true,
    //     dots: false,
    //     infinite: true,
    //     speed: 500,
    //     slidesToShow: 5,
    //     slidesToScroll: 5,
    //     initialSlide:5,
    //     responsive: [
    //       {
    //         breakpoint: 1200,
    //         settings: {
    //           slidesToShow: 5,
    //           slidesToScroll: 5,
    //           infinite: true,
    //           dots: false,
    //         },
    //       },
    //       {
    //         breakpoint: 865,
    //         settings: {
    //           slidesToShow: 1,
    //           slidesToScroll: 1,
    //           initialSlide: 1,
    //         },
    //       },
    //     ],
    //   };
    // return (
    //     <div>
    //       <Link to='/'>
    //         <h4 className="my-1" style={{ textAlign:'center' }}>
    //           Home Essentials
    //       </h4>
    //       </Link>
    //       <div className='product-card-container'>
    //     <Slider {...settings}>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //       <ProductCard></ProductCard>
    //     </Slider>
    //     </div>
    // </div>
    // )
    const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div style={{ padding: `0 ${chevronWidth}px` }}>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={6}
        slidesToScroll={2}
        gutter={20}
        leftChevron={<i class="fas fa-chevron-left carousel-arrow-both"></i>}
        rightChevron={<i class="fas fa-chevron-right carousel-arrow-both"></i>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {/* <div style={{ height: 200, background: '#EEE' }}>First card</div>
        <div style={{ height: 200, background: '#EEE' }}>Second card</div>
        <div style={{ height: 200, background: '#EEE' }}>Third card</div>
        <div style={{ height: 200, background: '#EEE' }}>Fourth card</div> */}
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
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
        <ProductCard></ProductCard>
      </ItemsCarousel>
    </div>
  );
}
