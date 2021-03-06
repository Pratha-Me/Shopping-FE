import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import NavbarMenu from "../../pages/Header/NavbarMenu";
import TopHeader from "../../pages/Header/TopHeader";
import { getUserCart, removeCartItem } from "../../services/InventoryService";
import "../../styles/css/CartDirectory.css";
import "../../styles/scss/CartDirectory.scss";
import ProductCard from "../Product-Card/ProductCard";
import { confirmAlert } from "react-confirm-alert"; // Import
import "react-confirm-alert/src/react-confirm-alert.css"; // Import css
import { getAuthUser } from "../../helpers/AuthHelpers";
const CartDirectory = () => {
  const [items, setItems] = useState([]);
  const [authItems, setAuthItems] = useState([]);
  const [count, setCount] = useState(null);

  useEffect(() => {
    getAuthUser() &&
      getUserCart()
        .then((response) => {
          let cart = [];
          response.data.items.map((item) => {
            cart.push({
              ...item,
              count: 1,
              total: item.unitPrice,
            });
          });
          cart = Array.from(new Set(cart.map((p) => p.id))).map((id) => {
            return cart.find((p) => p.id === id);
          });
          setItems(cart);
        })
        .catch((err) => {
          console.log(err);
        });
  }, []);

  const removeSubmit = (id) => {
    confirmAlert({
      title: "Confirm to delete",
      message: "Are you sure you want delete the item ?",
      buttons: [
        {
          label: "Yes",
          onClick: () => removeCartItem(id) && window.location.reload(),
        },
        {
          label: "No",
        },
      ],
    });
  };

  const getSingleTotal = (item) => {
    const total = item ? item.count * item.unitPrice : "";
    return total;
  };
  const handleChange = (productId) => (event) => {
    setCount(event.target.value < 1 ? 1 : event.target.value);
    if (event.target.value >= 1) {
      let cart = items;
      cart.map((item, i) => {
        if (item.id === productId) {
          cart[i].count = event.target.value;
          cart[i].total = getSingleTotal(item);
        }
      });
      setItems(() => cart);
    }
  };

  // Get Subtotal
  const getSubTotal = (items) => {
    return items.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.unitPrice;
    }, 0);
  };

  const onSubmitLocalStorage = () => {
    return localStorage.setItem("cart", JSON.stringify(items));
  };

  const showItems = (items) => {
    return (
      <div className='container mt-5'>
        {/* <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2'>
            <nav aria-label='breadcrumb' className='subCat-breadcrumb'>
              <ol className='breadcrumb bg-transparent pl-0'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='#'>Cart &nbsp;</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='#'>Men's Shopping&nbsp;</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  T-Shirts
                </li>
              </ol>
            </nav>
          </div>
        </div> */}
        <h1>CART SUMMARY</h1>
        <table className='table table-xs'>
          <tbody>
            <tr>
              <th></th>
              <th className='text-left'>Description</th>
              <th className=''>Quantity</th>
              <th className='text-right'>Remove</th>
              <th className='text-right'>Price</th>
              <th className='text-right'>Total</th>
            </tr>
            {items.map((product, i) => (
              <tr key={i} className='item-row'>
                <td style={{ width: "100px", height: "100px" }}>
                  <ProductCard
                    product={product}
                    showButtons={false}
                    showFooter={false}
                    cartUpdate={true}
                    showRemove={true}
                    imgHeight='100px'
                  ></ProductCard>
                </td>
                <td>
                  <p className='mt-3'>
                    {" "}
                    <strong>{product.itemName}</strong>
                  </p>
                </td>
                <td className='mt-3' title='Qty'>
                  <div
                    className='input-group mb-3 mr-0'
                    style={{ width: "200px" }}
                  >
                    {/* <div className="input-group-prepend">
                      <span className="input-group-text">Adjust Quantity</span>
                  </div> */}
                    <input
                      type='number'
                      className='form-control'
                      value={product.count}
                      onChange={handleChange(product.id)}
                    />
                  </div>
                </td>
                <td className='text-right mt-3' title='Remove'>
                  <i
                    // onClick={() => {
                    //   removeCartItem(product.id) && window.location.reload();
                    // }}
                    onClick={() => {
                      removeSubmit(product.id);
                    }}
                    // onClick={removeSubmit(product.id)}
                    className='fas fa-trash-alt'
                    style={{ cursor: "pointer" }}
                  ></i>
                </td>
                <td className='text-right mt-3' title='Price'>
                  {product.unitPrice}
                </td>
                <td className='text-right mt-3' title='Total'>
                  {getSingleTotal(product)}
                </td>
              </tr>
            ))}
            <tr className='total-row info'>
              <td className='text-right font-weight-bold ' colSpan='5'>
                <span className='res-text'>Sub-total </span> <br />
              </td>
              <td className='text-right'>
                <span className='font-weight-bold res-text'>
                  Rs. {getSubTotal(items)}
                </span>{" "}
                <br />
              </td>
            </tr>
            <tr className='total-row info'>
              <td className='text-right font-weight-bold res-text' colSpan='5'>
                Total
              </td>
              <td className='text-right font-weight-bold res-text'>
                Rs. {getSubTotal(items)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const noItemsMessage = () => (
    <div>
      <h2 className='p-4'>
        Your cart is empty. <br /> <Link to='/'></Link>
      </h2>
      <Link to='/'>
        {" "}
        <button type='button' className='btn btn-info m-4'>
          Continue Shopping
        </button>{" "}
      </Link>
    </div>
  );

  return (
    <>
      <TopHeader />
      <NavbarMenu />
      <div className='container'>
        <div className='row'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
          <div className='col-md-8 col-sm-0'></div>
          <div className='col-md-4 col-sm-12 text-right'>
            {items.length > 0 ? (
              <div>
                <Link to='/'>
                  {" "}
                  <button type='button' className='btn btn-success m-4'>
                    Continue Shopping
                  </button>{" "}
                </Link>
                <Link to='/checkout'>
                  <button
                    type='button'
                    onClick={onSubmitLocalStorage()}
                    className='btn m-2 place-order-button'
                  >
                    Place Order
                  </button>
                </Link>
              </div>
            ) : (
              ""
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDirectory;
