import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { getAnUser, getOrder } from "../../services/AuthService";
import { Redirect } from "react-router-dom";
import OrderHistoryModal from "./OrderHistoryModal";
import AddressModal from "./AddressModal";

function OrderHistory(props) {
  const [orders, setOrders] = useState([]);
  const orderLength = orders.length;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    getAnUser()
      .then((response) => {
        setUserData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
    getOrder()
      .then((response) => {
        setOrders(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  console.log("roder fata", orders);
  if (!localStorage.user) {
    return <Redirect to='/login' />;
  }

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
            <span className='ml-4'>+{userData.phone}</span>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-3'>
          <p style={{ fontSize: `17px`, fontWeight: `500` }}>YOUR ORDERS</p>
        </div>

        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3'>
          <div
            style={{
              backgroundColor: `#fcfcfc`,
              padding: `17px`,
              border: `1px solid #888`,
              borderRadius: `2px`,
              fontSize: `16px`,
              marginBottom: `25vh`,
            }}
          >
            {orderLength == 0 && (
              <div
                style={{
                  display: `flex`,
                  justifyContent: `center`,
                  flexDirection: `column`,
                  alignItems: `center`,
                }}
              >
                <p className='text-secondary'>You have no orders!</p>
                <a
                  href='/'
                  className='btn btn-primary btn-sm text-white pl-3 pr-3'
                >
                  Continue Shopping
                </a>
              </div>
            )}
            {orderLength > 0 && (
              <div className='orderContainer'>
                <table className='table table-hover'>
                  <thead>
                    <tr>
                      {/* <th scope='col'>Order ID</th> */}
                      <th scope='col'>Order Date</th>
                      <th scope='col'>Order Items</th>
                      <th scope='col'>Payment Method</th>
                      <th scope='col'>Total Amount</th>
                      <th scope='col'>Delivery Address</th>
                      <th scope='col'>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    {/* FOr loop for order history */}
                    {orders &&
                      orders.map((order, idx) => {
                        return (
                          <tr key={idx}>
                            {/* <td scope='row'>OID92384</td> */}
                            <td>{order.salesDate}</td>
                            <th>
                              {/* <a
                                href='#'
                                className='btn btn-primary btn-sm text-white pl-3 pr-3'
                              >
                                View
                              </a> */}
                              <OrderHistoryModal
                                data={order.orderedItems}
                                total={order.total}
                              ></OrderHistoryModal>
                            </th>
                            <th>{order.paymentMethod.toUpperCase()}</th>
                            <td>Rs. {order.total}</td>
                            <th>
                              <AddressModal
                                data={order.deliveryAddress}
                              ></AddressModal>
                            </th>
                            <th>{order.orderStatus}</th>
                          </tr>
                        );
                      })}
                  </tbody>
                </table>
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

export default connect(mapStateToProps)(OrderHistory);
