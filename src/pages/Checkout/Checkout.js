import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";
import Esewa from "../../api/Esewa/Esewa";
import { getCart, getSubTotal, itemTotal } from "../../helpers/CartHelpers";
import { getAnUser } from "../../services/AuthService";
import "../../styles/css/Checkout.css";
import { useForm } from "react-hook-form";
import {
  clearCart,
  esewaVerification,
  postEsewa,
  saveOrder,
} from "../../services/InventoryService";
import axios from "axios";
import NavbarMenu from "../Header/NavbarMenu";
import TopHeader from "../Header/TopHeader";
import { positions, useAlert } from "react-alert";

function Checkout(props) {
  const [isUserDetailsVerified, setIsUserDetailsVerified] = useState(true);
  const [isAddressVerified, setIsAddressVerified] = useState(false);
  const [esewaSuccess, setEsewaSuccess] = useState(false);
  const [carts, setCarts] = useState([]);
  const [paymentMethod, setPaymentMethod] = useState();
  const [userData, setUserData] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const [deliveryAddress, setDeliveryAddress] = useState({
    zone: "",
    phone: "",
    city: "",
    street: "",
  });

  const alert = useAlert();

  useEffect(() => {
    setCarts(getCart());
    getAnUser()
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleInputChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setDeliveryAddress((deliveryAddress) => ({
      ...deliveryAddress,
      [name]: value,
    }));
  };

  const getTax = (subTotal) => {
    return (13 / 100) * subTotal;
  };
  const getServiceCharge = (subTotal) => {
    return (2 / 100) * subTotal;
  };

  const getTotal = (subTotal, tax, serviceCharge) => {
    return subTotal + tax + serviceCharge + 100;
  };

  const onValueChange = (event) => {
    setPaymentMethod(event.target.value);
  };

  const handleSubmitForm = async (formdata) => {
    setIsAddressVerified(!isAddressVerified);
  };

  const onClickOrderPost = () => {
    let r =
      Math.random().toString(36).substring(2, 8) +
      Math.random().toString(36).substring(2, 8);
    let pId = r && r.match(/.{1,4}/g);
    let idProduct = pId && pId.join(" ");
    let orderDetails = {
      orderedItems: [],
      total: getTotal(
        getSubTotal(carts),
        getTax(getSubTotal(carts)),
        getServiceCharge(getSubTotal(carts))
      ),
      paymentMethod: paymentMethod,
      // deliveryAddress: deliveryAddress && deliveryAddress ? deliveryAddress : '',
    };
    deliveryAddress.street && (orderDetails.deliveryAddress = deliveryAddress);
    carts.map((item) => {
      orderDetails.orderedItems.push({
        item: {
          id: item.id,
        },
        quantity: item.count,
        unitPrice: item.unitPrice,
      });
    });
    if (paymentMethod === "cod") {
      saveOrder(orderDetails)
        .then((response) => {
          alert.success("Order Confirmed (Cash on Delivery)", {
            timeout: 2000, // custom timeout just for this one alert
            type: "success",
            position: positions.TOP_CENTER,
            onOpen: () => {
              clearCart();
            },
            onClose: () => {
              props.history.push("/");
            },
          });
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (paymentMethod === "esewa") {
      let path = "https://uat.esewa.com.np/epay/main";
      let params = {
        amt: getSubTotal(carts),
        psc: getServiceCharge(getSubTotal(carts)),
        pdc: 100,
        txAmt: getTax(getSubTotal(carts)),
        tAmt: getTotal(
          getSubTotal(carts),
          getTax(getSubTotal(carts)),
          getServiceCharge(getSubTotal(carts))
        ),
        pid: idProduct && idProduct,
        scd: "EPAYTEST",
        su: "http://localhost:3000/success?q=su",
        fu: "http://localhost:3000/failed?q=fu",
      };

      postEsewa(path, params);
      // esewaVerification(path1, params1);
      // axios.post(path, params).then((res) => {
      //   console.log('Esewa', res);
      //   console.log('Esewa Data', res.data);
      // });
    } else {
      // window.alert('Please Select Payment Method');
      alert.error("Please Select the Payment Method To Confirm Your Order", {
        timeout: 3000, // custom timeout just for this one alert
        type: "error",
        position: positions.TOP_CENTER,
      });
    }
  };

  return (
    <>
      <TopHeader></TopHeader>
      <NavbarMenu></NavbarMenu>
      <div className='container'>
        <div className='row'>
          <div
            className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2'
            style={{ margin: `0 !important`, padding: "0!important" }}
          >
            <nav aria-label='breadcrumb' className='profile-breadcrumb'>
              <ol className='breadcrumb bg-transparent'>
                <li className='breadcrumb-item'>
                  <a href='/'>Home &nbsp;</a>
                </li>
                <li className='breadcrumb-item'>
                  <a href='/cart/'>Cart Summary &nbsp;</a>
                </li>
                <li className='breadcrumb-item active' aria-current='page'>
                  Checkout
                </li>
              </ol>
            </nav>
            <h3 className='text-uppercase mb-3 text-center text-dark'>
              Checkout
            </h3>
          </div>
        </div>
        <div className='row mb-5'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12'>
            <ul id='progressbar' className='text-center'>
              <li
                className='step0 active'
                style={{ fontWeight: "500", fontSize: "19px" }}
              >
                User Details{" "}
              </li>

              {userData ? (
                <li
                  className=' step0 active'
                  style={{ fontWeight: "500", fontSize: "19px" }}
                >
                  Addresses
                </li>
              ) : (
                <li
                  className=' step0'
                  style={{ fontWeight: "500", fontSize: "19px" }}
                >
                  Addresses
                </li>
              )}

              {isAddressVerified ? (
                <li
                  className='step0 active'
                  style={{ fontWeight: "500", fontSize: "19px" }}
                >
                  Order Summary
                </li>
              ) : (
                <li
                  className='step0'
                  style={{ fontWeight: "500", fontSize: "19px" }}
                >
                  Order Summary
                </li>
              )}
            </ul>
          </div>

          {!isAddressVerified && (
            <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 '>
              <div className='userDetails'>
                <div className='form-group'>
                  <label>Name:</label>
                  <span className='text-capitalize'>{userData.name}</span>
                </div>
                <div className='form-group'>
                  <label>Address:</label>
                  <span className='text-capitalize'>
                    {" "}
                    {userData.address && userData.address.street},{" "}
                    {userData.address && userData.address.city},{" "}
                    {userData.address && userData.address.district},{" "}
                    {userData.address && userData.address.province}
                  </span>
                </div>
                <div className='form-group'>
                  <label>Phone Number:</label>
                  <span>{userData.phone}</span>
                </div>

                <div className='form-group'>
                  <button
                    className='btn btn-success btn-sm mr-3'
                    onClick={() => setIsAddressVerified(!isAddressVerified)}
                  >
                    Use this Address
                  </button>
                </div>
              </div>
            </div>
          )}

          {!isAddressVerified && (
            <div className='col-xs-12 col-sm-12 col-md-6 col-xl-6 mt-4'>
              <h5 className='mb-3'>Shipping Address</h5>
              <form onSubmit={handleSubmit(handleSubmitForm)}>
                <div className='form-group'>
                  <label htmlFor='zone'>Province</label>
                  <input
                    type='text'
                    className='form-control mb-3'
                    name='zone'
                    id='zone'
                    tabIndex='1'
                    onChange={handleInputChange}
                    ref={register({
                      required: true,
                    })}
                  />

                  {errors.zone && errors.zone.type === "required" && (
                    <p className='text-danger'> * Province Name is required.</p>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='city'>City</label>
                  <input
                    type='text'
                    className='form-control mb-3'
                    name='city'
                    id='city'
                    onChange={handleInputChange}
                    tabIndex='2'
                    ref={register({
                      required: true,
                    })}
                  />

                  {errors.city && errors.city.type === "required" && (
                    <p className='text-danger'> * City is required.</p>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='street'>Street</label>
                  <input
                    type='text'
                    className='form-control mb-3'
                    name='street'
                    id='street'
                    onChange={handleInputChange}
                    tabIndex='3'
                    ref={register({
                      required: true,
                    })}
                  />

                  {errors.street && errors.street.type === "required" && (
                    <p className='text-danger'>
                      {" "}
                      * Street Address is required.
                    </p>
                  )}
                </div>
                <div className='form-group'>
                  <label htmlFor='phone'>Phone No.</label>
                  <input
                    type='text'
                    className='form-control mb-3'
                    name='phone'
                    id='phone'
                    onChange={handleInputChange}
                    tabIndex='4'
                    ref={register({
                      required: true,
                    })}
                  />

                  {errors.phone && errors.phone.type === "required" && (
                    <p className='text-danger'> * Phone Number is required.</p>
                  )}
                </div>

                <div className='form-group'>
                  <input
                    type='submit'
                    className='btn ship-button btn-sm'
                    //  onClick={onClickOrder()}
                    value='Ship To This Address'
                  />
                </div>
              </form>
            </div>
          )}
        </div>
        {isAddressVerified && (
          <>
            <div className='row'>
              <h3>Order Summary</h3>
              <table className='table table-xs '>
                <tbody>
                  <tr>
                    <th></th>
                    <th>Description</th>
                    <th className='text-right'>Amount</th>
                    <th className='text-right'>Price</th>
                    <th className='text-right'>Total</th>
                  </tr>
                </tbody>
                {carts.map((cart, idx) => (
                  <tbody key={idx}>
                    <tr className='item-row'>
                      <td>
                        {" "}
                        <img
                          src={cart.link[0]}
                          style={{ width: "80px", height: "100px" }}
                        />
                      </td>
                      <td>
                        <p>
                          {" "}
                          <strong>{cart.itemName}</strong>
                        </p>
                      </td>
                      <td className='text-right' title='Amount'>
                        {cart.count}
                      </td>
                      <td className='text-right' title='Price'>
                        Rs. {cart.unitPrice}
                      </td>
                      <td className='text-right' title='Total'>
                        Rs. {cart.total}
                      </td>
                    </tr>
                  </tbody>
                ))}
                <tbody>
                  <tr className='total-row info'>
                    <td className='text-right font-weight-bold ' colSpan='4'>
                      <span>Sub-total </span> <br />
                      Tax <br />
                      Service Charge (2%) <br />
                      Shipping Charge
                    </td>
                    <td className='text-right'>
                      <span className='font-weight-bold'>
                        Rs. {getSubTotal(carts)}
                      </span>{" "}
                      <br />
                      <span className='font-weight-bold'>
                        Rs. {getTax(getSubTotal(carts))}
                      </span>{" "}
                      <br />
                      <span className='font-weight-bold'>
                        Rs. {getServiceCharge(getSubTotal(carts))}
                      </span>{" "}
                      <br />
                      <span className='font-weight-bold'>Rs.100</span>
                    </td>
                  </tr>
                </tbody>
                <tbody>
                  <tr className='total-row info'>
                    <td className='text-right font-weight-bold' colSpan='4'>
                      Total
                    </td>
                    {/* <td className="text-right ton-weight-bold">Rs.1050</td> */}
                    <td className='text-right font-weight-bold'>
                      Rs.{" "}
                      {getTotal(
                        getSubTotal(carts),
                        getTax(getSubTotal(carts)),
                        getServiceCharge(getSubTotal(carts))
                      )}
                    </td>
                  </tr>
                </tbody>
              </table>

              <div className='col-md-6 mb-4'>
                <div className='payment-methods'>
                  <form action=''>
                    <div className='form-group'>
                      <p style={{ fontSize: "18px" }}>
                        How would you like to pay for your order?{" "}
                      </p>
                      <div
                        className='list-group d-flex'
                        style={{
                          justifyContent: "flex-end",
                          flexDirection: "row-reverse",
                          alignItems: "center",
                        }}
                        checked={paymentMethod === "cod"}
                        onChange={onValueChange}
                      >
                        <label htmlFor='cod' className='mt-2 pl-2'>
                          COD (Cash On Delivery)
                        </label>
                        <input
                          type='radio'
                          name='payment'
                          id='cod'
                          value='cod'
                        />
                      </div>
                      <div
                        className='list-group d-flex'
                        style={{
                          justifyContent: "flex-end",
                          flexDirection: "row-reverse",
                          alignItems: "center",
                        }}
                        checked={paymentMethod === "esewa"}
                        onChange={onValueChange}
                      >
                        <label htmlFor='esewa' className='mt-2 pl-2'>
                          ESEWA
                        </label>
                        <input
                          type='radio'
                          name='payment'
                          id='esewa'
                          value='esewa'
                        />
                      </div>
                    </div>
                  </form>
                </div>
              </div>
              {/* <button value='submit' type='submit' onClick={onClickOrder()} className='btn btn-primary pl-3 pr-3 text-white text-right mb-5 '>
            Pay Now
          </button> */}
              {/* <div className='col-md-12 text-right d-flex ' style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <form action='https://uat.esewa.com.np/epay/main' method='POST'>
              <input value={getTotal(getSubTotal(carts), getTax(getSubTotal(carts)), getServiceCharge(getSubTotal(carts)))} name='tAmt' type='hidden' />
              <input value={getSubTotal(carts)} name='amt' type='hidden' />
              <input value={getTax(getSubTotal(carts))} name='txAmt' type='hidden' />
              <input value={getServiceCharge(getSubTotal(carts))} name='psc' type='hidden' />
              <input value='100' name='pdc' type='hidden' />
              <input value='EPAYTEST' name='scd' type='hidden' />
              <input value='HelloNepal123sssasa455' name='pid' type='hidden' />
              <input value='http://localhost:3000/success' type='hidden' name='su' />
              <input value='http://localhost:3000/failed' type='hidden' name='fu' />
              <button value='submit' type='submit' onClick={onClickOrder()} className='btn btn-primary pl-3 pr-3 text-white text-right mb-5 '>
                Pay Now
              </button>
            </form>
          </div> */}
              {/* <div className='col-md-12 text-right d-flex ' style={{ flexDirection: 'column', alignItems: 'flex-end' }}>
            <form action='https://uat.esewa.com.np/epay/main' method='POST'>
              <input value='100' name='tAmt' type='hidden' />
              <input value='90' name='amt' type='hidden' />
              <input value='5' name='txAmt' type='hidden' />
              <input value='2' name='psc' type='hidden' />
              <input value='3' name='pdc' type='hidden' />
              <input value='EPAYTEST' name='scd' type='hidden' />
              <input value='ee2c3ca1-696b-4cc5-a6be-2c40d929d453111' name='pid' type='hidden' />
              <input value='http://merchant.com.np/page/esewa_payment_success?q=su' type='hidden' name='su' />
              <input value='http://merchant.com.np/page/esewa_payment_failed?q=fu' type='hidden' name='fu' />
              <button value='submit' type='submit' className='btn btn-primary pl-3 pr-3 text-white text-right mb-5 '>
                Pay Now
              </button>
            </form>
          </div> */}
            </div>

            <button
              onClick={() => onClickOrderPost()}
              type='button'
              // onSubmit={onClickOrderPost()}
              className='btn ml-auto pay-now-button pl-3 pr-3 text-white text-right mb-5 '
            >
              Pay Now
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default withRouter(Checkout);
