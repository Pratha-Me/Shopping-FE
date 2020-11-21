import React, {useState, useEffect} from 'react'
import '../../styles/scss/Cart.scss'
import {itemTotal} from '../../helpers/CartHelpers'

function Cart() {
  const [cartTotal, setCartTotal] = useState()

  useEffect(() => {
    setCartTotal(itemTotal())
  }, [cartTotal])
    return (
      <>
      <div className="btn-container">
        <div className="btn-cart">
            <i className="fas fa-shopping-cart"></i>
            <div>
              <span className="cart">Cart</span><span id="total" className="btn-cart__total"> {cartTotal}</span>
            </div>
        </div>
        </div>
      </>
    );
  }
  
  export default Cart;