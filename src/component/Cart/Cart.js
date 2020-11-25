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
        <div>
          <span className="fa-stack fa-2x has-badge" data-count={cartTotal} style={{fontSize:'20px', marginLeft:'12px'}}>
            <i className="fa fa-circle fa-stack-2x fa-inverse" />
            <i style={{}} className="fa fa-shopping-cart fa-stack-2x red-cart" />
          </span>
        </div>
      </>
    );
  }
  
  export default Cart;