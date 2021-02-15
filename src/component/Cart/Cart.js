import React, { useState, useEffect } from "react";
import "../../styles/scss/Cart.scss";
import { itemTotal, removeItem } from "../../helpers/CartHelpers";
import { Link } from "react-router-dom";
import { getUserCart } from "../../services/InventoryService";
import { getAuthUser } from "../../helpers/AuthHelpers";

function Cart() {
  const [cartTotal, setCartTotal] = useState("");
  const [logedIn, setLogedIn] = useState(false);

  useEffect(() => {
    getAuthUser() &&
      getUserCart().then((response) => {
        setCartTotal(() => response.data.items && response.data.items.length);
      });
  }, []);

  const link = getAuthUser() ? "/cart" : "/login";
  return (
    <>
      <Link to={link}>
        <div>
          <span
            className='fa-stack fa-2x has-badge'
            data-count={cartTotal && cartTotal ? cartTotal : 0}
            style={{ fontSize: "20px", marginLeft: "12px" }}
          >
            <i className='fa fa-circle fa-stack-2x fa-inverse' />
            <i className='fa fa-shopping-cart fa-stack-2x red-cart' />
          </span>
        </div>
      </Link>
    </>
  );
}

export default Cart;
