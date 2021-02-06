import React, { useEffect, useState } from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ProductCard from '../Product-Card/ProductCard';
import '../../styles/css/ProductCardDirectory.css';
import ItemsCarousel from 'react-items-carousel';
import { Link } from 'react-router-dom';
import DATA from '../Product-Card/ProductData';
import { getItemList, getProductList } from '../../services/InventoryService';

export default function ProductCardDirectory(props) {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [productsList, setProductsList] = useState();
  const [productsName, setProductsName] = useState();
  const [itemList, setItemList] = useState();
  const [catName, setCatName] = useState();
  const [subCatName, setSubCatName] = useState();
  const [width, setWidth] = useState();

  // function getRandomInt() {
  //   return Math.floor(Math.random() * Math.floor(2));
  // }

  useEffect(() => {
    // getProductList().then((response) => {
    //   setProductsList(response.data.productList[0]);
    // });
    setProductsList(() => props.listProduct && props.listProduct.id);
    setProductsName(() => props.listProduct && props.listProduct.productName);
    productsList &&
      getItemList(productsList && productsList).then((response) => {
        setItemList(response.data.itemList);
        const cat = new Set();
        const subCat = new Set();
        response.data.itemList.forEach((item) => {
          cat.add(item.catName);
          subCat.add(item.subCatName);
        });
        setCatName(...cat);
        setSubCatName(...subCat);
      });
    setWidth(() => window.innerWidth);
  }, [window.innerWidth, props]);

  const chevronWidth = 50;
  const productHeight = '270px';
  const productWidth = '190px';
  const productCardHeight =
    width && width < 525 ? '250px' : width && width < 690 ? '270px' : width && width < 850 ? '270px' : width && width < 1000 ? '270px' : width && width < 1300 ? '270px' : '270px';
  // const productCardWidth =
  //   width && width < 525 ? '100px' : width && width < 690 ? '190px' : width && width < 850 ? '190px' : width && width < 1000 ? '190px' : width && width < 1300 ? '190px' : '190px';
  const productImageHeight = width && width < 525 ? '55%' : width && width < 690 ? '65%' : width && width < 850 ? '65%' : width && width < 1000 ? '65%' : width && width < 1300 ? '65%' : '65%';
  // const productImageHeight = '65%';
  const noOfCards = width && width < 525 ? 2 : width && width < 690 ? 2 : width && width < 850 ? 3 : width && width < 1000 ? 4 : width && width < 1300 ? 5 : 6;
  const cardGutter = width && width < 525 ? 20 : width && width < 690 ? 20 : width && width < 850 ? 20 : width && width < 1000 ? 20 : width && width < 1300 ? 20 : 20;

  return (
    <div className='product-directory-container' style={{ padding: `16px ${chevronWidth}px` }}>
      {catName && (
        <>
          <h5 className='text-center pt-2 mb-4 product-title'>
            {`${catName && catName} - `}
            {productsName && productsName}
          </h5>
          <Link to={`/browser/${productsName && productsName}/${productsList && productsList}`}>
            <p className='text-right'>View All</p>
          </Link>
        </>
      )}
      {/* <h5 className='text-center pt-2 mb-4 product-title'>
        {`${catName && catName} - `}
        {productsName && productsName}
      </h5>
      <Link to={`/browser/${productsName && productsName}/${productsList && productsList}`}>
        <p className='text-right'>View All</p>
      </Link> */}
      <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={noOfCards}
        slidesToScroll={2}
        gutter={cardGutter}
        leftChevron={<i className='fas fa-chevron-left carousel-arrow-both'></i>}
        rightChevron={<i className='fas fa-chevron-right carousel-arrow-both'></i>}
        outsideChevron
        chevronWidth={chevronWidth}
      >
        {itemList && itemList.map((product) => <ProductCard key={product.id} height={productCardHeight} imgHeight={productImageHeight} product={product}></ProductCard>)}
      </ItemsCarousel>
    </div>
  );
}
