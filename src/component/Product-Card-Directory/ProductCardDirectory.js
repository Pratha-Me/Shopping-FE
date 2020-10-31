import React, {useState} from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../Product-Card/ProductCard';
import '../../styles/css/ProductCardDirectory.css'
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';

export default function ProductCardDirectory() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div
    className='product-directory-container'
     style={{ padding: `16px ${chevronWidth}px`}}
     >
       <Link>
      <h5 className='text-center pt-2 mb-4 product-title'>Home Essentials</h5>
       </Link>
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
