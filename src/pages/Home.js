import React, { useEffect, useState } from "react";
import AdsDirectory from "../component/Ads-Directory/AdsDirectory";
import CarouselHome from "../component/Carousel/CarouselHome";
import ProductCardDirectory from "../component/Product-Card-Directory/ProductCardDirectory";
import ProductImage from "../component/Product-Image/ProductImage";
import "../styles/scss/Home.scss";
import ProductDetails from "./Product-Details/ProductDetails";
import NavbarMenu from "../pages/Header/NavbarMenu";
import TopHeader from "../pages/Header/TopHeader";
import {
  esewaVerification,
  getCarousel,
  getProductList,
} from "../services/InventoryService";
import { withRouter } from "react-router-dom";
import { css } from "@emotion/core";
import RotateLoader from "react-spinners/RotateLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 50vh auto;
`;

const Home = (props) => {
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState("#051774");
  const [carousel, setCarousel] = useState([]);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    getCarousel().then((response) => {
      setLoading(true);
      setCarousel(response.data.items);
      setLoading(false);
    });
    getProductList().then((response) => {
      setLoading(true);
      setProductList(response.data.productList);
      setLoading(false);
    });
  }, []);
  // const number1 = Math.floor(Math.random() * Math.floor(4));
  // const number2 = Math.floor(Math.random() * Math.floor(4));

  // const mainNumber2 = number1 && number1 !== number2 && number2 ? number2 : 0;

  const lastData = productList.slice(Math.max(productList.length - 3, 0));

  return (
    <>
      {loading ? (
        <RotateLoader
          color={color}
          loading={loading}
          css={override}
          size={15}
        />
      ) : (
        <>
          <TopHeader></TopHeader>
          <NavbarMenu></NavbarMenu>
          <div>
            <CarouselHome carouselList={carousel}></CarouselHome>
          </div>
          <AdsDirectory ads={carousel} maxSize={2} minSize={0}></AdsDirectory>

          <ProductCardDirectory
            listProduct={lastData && lastData[0]}
          ></ProductCardDirectory>
          <AdsDirectory ads={carousel} maxSize={5} minSize={3}></AdsDirectory>
          {/* <ProductCardDirectory
        listProduct={lastData && lastData[1]}
      ></ProductCardDirectory> */}
          <AdsDirectory ads={carousel} maxSize={7} minSize={6}></AdsDirectory>
          {/* <ProductCardDirectory
        listProduct={lastData && lastData[2]}
      ></ProductCardDirectory> */}

          <AdsDirectory ads={carousel} maxSize={9} minSize={7}></AdsDirectory>

          <AdsDirectory ads={carousel} maxSize={11} minSize={9}></AdsDirectory>
        </>
      )}
    </>
  );
};
export default withRouter(Home);
