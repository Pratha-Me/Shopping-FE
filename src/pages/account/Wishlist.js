import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getAnUser } from '../../services/AuthService';
import { getWishlist, removeWishItem } from '../../services/InventoryService';

function Wishlist(props) {
  const [wishlist, setWishlist] = useState([]);
  const itemLength = wishlist && wishlist.length;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getAnUser()
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getWishlist()
      .then((response) => {
        console.log('wish backend', response.data.items);
        setWishlist(response.data.items);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div className='container'>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2'>
          <div className='form-group mt-4'>
            <label className='text-secondary'>EMAIL</label>
            <span className='ml-4'>{userData.email}</span>
          </div>
          <div className='form-group'>
            <label className='text-secondary'>CONTACT</label>
            <span className='ml-4'>{userData.phone}</span>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-3'>
          <p style={{ fontSize: `17px`, fontWeight: `500` }}>YOUR WISHLIST</p>
        </div>

        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3'>
          <div style={{ backgroundColor: `#fcfcfc`, padding: `17px`, border: `1px solid #888`, borderRadius: `2px`, fontSize: `16px`, marginBottom: `25vh` }}>
            {itemLength == 0 && (
              <div style={{ display: `flex`, justifyContent: `center`, flexDirection: `column`, alignItems: `center` }}>
                <p className='text-secondary'>Your wishlist is empty!</p>
                <a href='/' className='btn btn-primary btn-sm text-white pl-3 pr-3'>
                  Continue Shopping
                </a>
              </div>
            )}
            {itemLength > 0 && (
              <div className='wishContainer'>
                <div className='row'>
                  <div className='col-md-2 col-xl-2'>Image</div>
                  <div className='col-md-4 col-xl-4'>Product Name</div>
                  <div className='col-md-2 col-xl-2'>Stock</div>
                  <div className='col-md-2 col-xl-2'>Unit Price</div>
                  <div className='col-md-2 col-xl-2'>Action</div>
                </div>

                {/* For of wishlist */}
                {wishlist &&
                  wishlist.map((wish, idx) => {
                    return (
                      <>
                        <div className='row'>
                          <div className='col-md-2'>Image</div>
                          <div className='col-md-4'>{wish.itemName}</div>
                          <div className='col-md-2'>{wish.stock}</div>
                          <div className='col-md-2'>{wish.unitPrice}</div>
                          <div className='col-md-2'>
                            {/* <a href='/product-details' className='btn btn-primary btn-sm text-white my-2'>
                              View details
                            </a> */}
                            <Link
                              to={{
                                pathname: '/product-details',
                                state: wish,
                              }}
                            >
                              <button className='btn btn-primary btn-sm text-white my-2'>View details</button>
                            </Link>
                            <button
                              className='btn btn-danger btn-sm text-white my-2'
                              onClick={() => {
                                removeWishItem(wish.id) && window.location.reload();
                              }}
                            >
                              Delete
                            </button>
                          </div>
                        </div>
                        <hr></hr>
                      </>
                    );
                  })}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({
  items: state.Login,
});

export default connect(mapStateToProps)(Wishlist);
