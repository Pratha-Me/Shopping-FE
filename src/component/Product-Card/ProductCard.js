import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import '../../styles/scss/ProductCard.scss';
import { addItem, removeItem, updateItem } from '../../helpers/CartHelpers';
import { postCart, postWishlist } from '../../services/InventoryService';

const ProductCard = ({ width, height, imgHeight, product, showButtons = true, showFooter = true, cartUpdate = false, showRemove = false }) => {
  const [redirect, setRedirect] = useState(false);
  const [redirectWishlist, setRedirectWishlist] = useState(false);
  const [windowWidth, setWindowWidth] = useState();

  useEffect(() => {
    setWindowWidth(() => window.innerWidth);
  }, [window.innerWidth]);

  const data = {
    id: product && product.id,
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
    postWishlist(data && data)
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

  const productCard =
    windowWidth && windowWidth < 525
      ? 1
      : windowWidth && windowWidth < 690
      ? 2
      : windowWidth && windowWidth < 850
      ? 3
      : windowWidth && windowWidth < 1000
      ? 4
      : windowWidth && windowWidth < 1300
      ? 5
      : 6;

  return (
    <div className='product-container' style={{ width: `${width}`, height: `${height}` }}>
      {shouldRedirect(redirect)}
      {shouldRedirectWish(redirectWishlist)}
      {/* {productOffer ? <div class="cr cr-top cr-right cr-sticky cr-blue">{product.offer} Offer</div> : '' } */}
      <img src={product.link[0]} alt='Avatar' className='image' style={{ height: `${imgHeight}` }} />
      {showButtons ? (
        <div className='card-middle'>
          <a onClick={addToCart} className='hover-fx'>
            <i className='fas fa-shopping-cart'></i>{' '}
          </a>
          <a onClick={addToWishlist} className='hover-fx'>
            <i className='fas fa-heart'></i>{' '}
          </a>
          {/* <a className="hover-fx"><i className="fas fa-plus"></i> </a> */}
          <Link
            to={{
              pathname: `/product-details/${product.itemName}`,
              state: product,
            }}
            className='hover-fx'
          >
            <i className='fas fa-eye'></i>
          </Link>
        </div>
      ) : (
        ''
      )}

      {showFooter ? (
        <div className='footer-card'>
          <h2 className>{product.itemName.substring(0, 20)}</h2>
          <div className='row p-0 m-0' style={{ borderTop: '1px solid #e0e0e0' }}>
            <div className='col-sm-12 col-md-12'>
              <h3 className='m-1'>Rs. {product.unitPrice}</h3>
            </div>
          </div>
          {/* <div className="row">
                        <div className={`col-sm-12 ${productOffer ? 'col-md-6' : ''}`}>
                            <h3>Rs. {product.price}</h3>
                        </div>
                    {productOffer ? 
                    <div className="col-sm-12 col-md-6">
                        <h3 style={{textDecoration: 'line-through', color:'red'}}>Rs. {product.pevPrice}</h3>
                    </div> : '' }
                    </div> */}
        </div>
      ) : (
        ''
      )}
      {/* {showCartUpdateOptions(cartUpdate)} */}
    </div>
  );
};

export default ProductCard;
