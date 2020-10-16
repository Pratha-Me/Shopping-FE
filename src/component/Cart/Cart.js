import React from 'react'
import '../../styles/scss/Cart.scss'

function Cart() {
    return (
      <>
      <div className="btn-container">
        <div class="btn-cart">
            <i class="fas fa-shopping-cart"></i>
            <div>
              <span className="cart">Cart</span><span id="total" class="btn-cart__total"> 5</span>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Cart;