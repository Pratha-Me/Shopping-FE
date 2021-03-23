import React, { useEffect, useState } from "react";
import ProductCardDirectory from "../../component/Product-Card-Directory/ProductCardDirectory";
import ProductImage from "../../component/Product-Image/ProductImage";
import RelatedProducts from "../../component/RelatedProducts/RelatedProducts";
import UserReview from "../../component/UserReview/UserReview";
import "../../styles/css/ProductDetails.css";
import ReactStars from "react-rating-stars-component";
import ProductImageMobile from "../../component/Product-Image/ProductImageMobile";
import TopHeader from "../Header/TopHeader";
import NavbarMenu from "../Header/NavbarMenu";
import { postCart, postWishlist } from "../../services/InventoryService";
import { Redirect } from "react-router-dom";
import { getAuthUser } from "../../helpers/AuthHelpers";

const ProductDetails = (props) => {
  const [redirectWishlist, setRedirectWishlist] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    if (getAuthUser()) {
      setLogedIn(true);
    } else {
      setLogedIn(false);
    }
  }, [window.innerWidth]);

  var i = 1;
  function minusClick() {
    i--;
    document.getElementById("numb").value = i;
  }
  function plusClick() {
    i++;
    document.getElementById("numb").value = i;
  }
  const mobileResponsive = window.innerWidth >= 600;
  const description = props.location.state.description.split(",");
  const specifications = props.location.state.specifications.split(",");

  const data = {
    id: props.location.state.id && props.location.state.id,
  };
  const addToCart = () => {
    if (logedIn) {
      postCart(data && data)
        .then((response) => {
          setRedirect(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return props.history.push("/login");
    }
  };

  const addToWishlist = () => {
    if (logedIn) {
      postWishlist(data)
        .then((response) => {
          setRedirectWishlist(true);
          window.alert("Added to wish list");
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      return props.history.push("/login");
    }
  };

  const shouldRedirect = (redirect) => {
    if (redirect) {
      return <Redirect to='/cart' />;
    }
  };
  const shouldRedirectWish = (wish) => {
    if (wish) {
      return <Redirect to='/user/profile' />;
    }
  };

  return (
    <>
      {shouldRedirect(redirect)}
      {shouldRedirectWish(redirectWishlist)}
      <TopHeader></TopHeader>
      <NavbarMenu></NavbarMenu>
      <div className='container my-5'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            {mobileResponsive ? (
              <ProductImage image={props.location.state.link}></ProductImage>
            ) : (
              <ProductImageMobile
                image={props.location.state.link}
              ></ProductImageMobile>
            )}
          </div>
          <div className='col-sm-12 col-md-6 product-details-content'>
            <h2>{props.location.state.itemName}</h2>
            <h5 className='mt-2'>Rs. {props.location.state.unitPrice}</h5>
            <div></div>
            {props.location.state.stock <= 0 ? (
              <h4
                className='mt-4'
                style={{
                  color: "#23395d",
                  border: "1px solid #23395d",
                  padding: "12px",
                }}
              >
                Sorry !! Out Of Stock For Now
              </h4>
            ) : (
              <>
                <button
                  type='button'
                  className='btn mt-4 mr-3'
                  onClick={addToCart}
                >
                  Add To Cart
                </button>
                <button
                  type='button'
                  className='btn mt-4 mr-3'
                  onClick={addToWishlist}
                >
                  WishList
                </button>
              </>
            )}
            <h4
              className='mt-4'
              style={{ color: "black", textShadow: "none", fontWeight: "400" }}
            >
              Product Details
            </h4>
            <ul className='ml-5'>
              {description &&
                description.map((des, idx) => {
                  return <li key={idx}>{des}</li>;
                })}
            </ul>
            <h4
              className='mt-4'
              style={{ color: "black", textShadow: "none", fontWeight: "400" }}
            >
              Specifications
            </h4>
            <ul className='ml-5'>
              {specifications &&
                specifications.map((des, idx1) => {
                  return <li key={idx1}>{des}</li>;
                })}
            </ul>
          </div>
        </div>
      </div>
      {/* <ProductCardDirectory></ProductCardDirectory> */}
      {/* <RelatedProducts></RelatedProducts> */}
      {/* <UserReview></UserReview> */}
    </>
  );
};
export default ProductDetails;
