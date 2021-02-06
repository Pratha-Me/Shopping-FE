import React, { useState } from 'react';
import ProductCardDirectory from '../../component/Product-Card-Directory/ProductCardDirectory';
import ProductImage from '../../component/Product-Image/ProductImage';
import RelatedProducts from '../../component/RelatedProducts/RelatedProducts';
import UserReview from '../../component/UserReview/UserReview';
import '../../styles/css/ProductDetails.css';
import ReactStars from 'react-rating-stars-component';
import ProductImageMobile from '../../component/Product-Image/ProductImageMobile';
import TopHeader from '../Header/TopHeader';
import NavbarMenu from '../Header/NavbarMenu';
import { postCart, postWishlist } from '../../services/InventoryService';
import { Redirect } from 'react-router-dom';

const ProductDetails = (props) => {
  const [redirectWishlist, setRedirectWishlist] = useState(false);
  const [redirect, setRedirect] = useState(false);

  var i = 1;
  function minusClick() {
    i--;
    document.getElementById('numb').value = i;
  }
  function plusClick() {
    i++;
    document.getElementById('numb').value = i;
  }
  const mobileResponsive = window.innerWidth >= 600;
  const description = props.location.state.description.split(',');
  const specifications = props.location.state.specifications.split(',');

  const data = {
    id: props.location.state.id && props.location.state.id,
  };
  const addToCart = () => {
    postCart(data && data)
      .then((response) => {
        setRedirect(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToWishlist = () => {
    postWishlist(data)
      .then((response) => {
        setRedirectWishlist(true);
        window.alert('Added to wish list');
      })
      .catch((err) => {
        console.log(err);
      });
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
            {mobileResponsive ? <ProductImage image={props.location.state.link}></ProductImage> : <ProductImageMobile image={props.location.state.link}></ProductImageMobile>}
          </div>
          <div className='col-sm-12 col-md-6 product-details-content'>
            <h2>{props.location.state.itemName}</h2>
            <h5 className='mt-2'>Rs. {props.location.state.unitPrice}</h5>
            <div>
              {/* <ReactStars
                count={5}
                value={4}
                size={30}
                isHalf={false}
                edit={false}
                emptyIcon={<i className='far fa-star'></i>}
                halfIcon={<i className='fa fa-star-half-alt'></i>}
                fullIcon={<i className='fa fa-star'></i>}
                activeColor='red'
              /> */}
              {/* <p>(5 Reviews)</p> */}
            </div>
            {/* <div className='mt-5 plus-minus-button'>
              <button type='button' class='btn mr-1' onClick={minusClick}>
                <i class='fas fa-minus'></i>
              </button>
              <input id='numb' value='4' class='mr-1' />
              <button type='button' class='btn mr-1' onClick={plusClick}>
                <i class='fas fa-plus'></i>
              </button>
            </div> */}
            <button type='button' className='btn mt-4 mr-3' onClick={addToCart}>
              Add To Cart
            </button>
            {/* <button type='button' className='btn mt-4 mr-3'>
              Buy Now
            </button> */}
            <button type='button' className='btn mt-4 mr-3' onClick={addToWishlist}>
              WishList
            </button>
            <h4 className='mt-4' style={{ color: 'black', textShadow: 'none', fontWeight: '400' }}>
              Product Details
            </h4>
            <ul className='ml-5'>
              {description &&
                description.map((des) => {
                  return <li>{des}</li>;
                })}
            </ul>
            <h4 className='mt-4' style={{ color: 'black', textShadow: 'none', fontWeight: '400' }}>
              Specifications
            </h4>
            <ul className='ml-5'>
              {specifications &&
                specifications.map((des) => {
                  return <li>{des}</li>;
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
