import React, {useState} from 'react'
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../Product-Card/ProductCard';
import '../../styles/css/RelatedProducts.css'
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';

export default function RelatedProducts() {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
  return (
    <div
    className='related-product-directory-container'
     style={{ padding: `16px ${chevronWidth}px`}}
     >
       <Link>
      <h5 className='text-justify pt-2 mb-4 product-title'>Related Products</h5>
       </Link>
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={4}
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
