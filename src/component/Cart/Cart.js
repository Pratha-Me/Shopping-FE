import React from 'react'
import '../../styles/scss/Cart.scss'

function Cart() {
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