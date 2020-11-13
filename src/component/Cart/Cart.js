import React, { useEffect } from 'react'
import '../../styles/scss/Cart.scss'
import { getAuthUser } from '../../helpers/AuthHelpers';

function Cart() {

useEffect(() => {
  console.log("USER", getAuthUser());
}, [])

    return (
      <>
      <div className="btn-container">
        <div className="btn-cart">
            <i className="fas fa-shopping-cart"></i>
            <div>
              <span className="cart">Cart</span><span id="total" className="btn-cart__total"> 5</span>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Cart;