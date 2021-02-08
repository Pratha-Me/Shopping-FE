import React, { useEffect, useState } from 'react';
import AdsDirectory from '../component/Ads-Directory/AdsDirectory';
import CarouselHome from '../component/Carousel/CarouselHome';
import ProductCardDirectory from '../component/Product-Card-Directory/ProductCardDirectory';
import ProductImage from '../component/Product-Image/ProductImage';
import '../styles/scss/Home.scss';
import ProductDetails from './Product-Details/ProductDetails';
import NavbarMenu from '../pages/Header/NavbarMenu';
import TopHeader from '../pages/Header/TopHeader';
import { esewaVerification, getCarousel, getProductList } from '../services/InventoryService';
import { withRouter } from 'react-router-dom';

const Home = (props) => {
  const [carousel, setCarousel] = useState([]);
  const [productList, setProductList] = useState([]);
  // const [r1, setR1] = useState(null);

  // const number = getRandomInt();
  // function getRandomInt() {
  //   return setR1(Math.floor(Math.random() * Math.floor(3)));
  // }
  useEffect(() => {
    // setR1(Math.floor(Math.random() * Math.floor(3)));
    getCarousel().then((response) => {
      setCarousel(response.data.items);
    });
    getProductList().then((response) => {
      setProductList(response.data.productList);
    });
  }, []);
  // const number1 = Math.floor(Math.random() * Math.floor(4));
  // const number2 = Math.floor(Math.random() * Math.floor(4));

  // const mainNumber2 = number1 && number1 !== number2 && number2 ? number2 : 0;

  const lastData = productList.slice(Math.max(productList.length - 3, 0));

  return (
    <>
      <TopHeader></TopHeader>
      <NavbarMenu></NavbarMenu>
      <div>
        <CarouselHome carouselList={carousel}></CarouselHome>
      </div>
      <AdsDirectory ads={carousel} maxSize={2} minSize={0}></AdsDirectory>

      {/* <ProductCardDirectory listProduct={productList[getRandomInt()]}></ProductCardDirectory> */}
      {/* <ProductCardDirectory listProduct={productList[number1 && number1]}></ProductCardDirectory> */}
      <ProductCardDirectory listProduct={lastData && lastData[0]}></ProductCardDirectory>
      <AdsDirectory ads={carousel} maxSize={5} minSize={3}></AdsDirectory>
      {/* <ProductCardDirectory listProduct={productList[getRandomInt()]}></ProductCardDirectory> */}
      {/* <ProductCardDirectory listProduct={productList[mainNumber2 && mainNumber2]}></ProductCardDirectory> */}
      <ProductCardDirectory listProduct={lastData && lastData[1]}></ProductCardDirectory>
      <AdsDirectory ads={carousel} maxSize={7} minSize={6}></AdsDirectory>
      <ProductCardDirectory listProduct={lastData && lastData[2]}></ProductCardDirectory>

      <AdsDirectory ads={carousel} maxSize={9} minSize={7}></AdsDirectory>

      <AdsDirectory ads={carousel} maxSize={11} minSize={9}></AdsDirectory>
    </>
  );
};
export default withRouter(Home);
