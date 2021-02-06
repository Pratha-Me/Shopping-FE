import React, { useState, useEffect } from 'react';
import '../../styles/scss/Cart.scss';
import { itemTotal, removeItem } from '../../helpers/CartHelpers';
import { Link } from 'react-router-dom';
import { getUserCart } from '../../services/InventoryService';

function Cart() {
  const [cartTotal, setCartTotal] = useState('');

  useEffect(() => {
    getUserCart().then((response) => {
      setCartTotal(() => response.data.items && response.data.items.length);
    });
  }, []);
  return (
    <>
      <Link to='/cart'>
        <div>
          <span className='fa-stack fa-2x has-badge' data-count={cartTotal ? cartTotal : 0} style={{ fontSize: '20px', marginLeft: '12px' }}>
            <i className='fa fa-circle fa-stack-2x fa-inverse' />
            <i style={{}} className='fa fa-shopping-cart fa-stack-2x red-cart' />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Cart;
