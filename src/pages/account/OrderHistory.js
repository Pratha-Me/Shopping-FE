import React from 'react';

function OrderHistory() {
    const orders = [];
    const orderLength = orders.length;


    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2">
                <div className="form-group mt-4">
                        <label className="text-secondary" >
                            EMAIL
                        </label>
                        <span className="ml-4">johndoe@gmail.com</span>
                    </div>
                    <div className="form-group">    
                        <label className="text-secondary" >
                            CONTACT
                        </label>
                        <span className="ml-4">+977982325462</span>
                </div>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-3">
                    <p style={{fontSize:`17px`, fontWeight:`500`}}>
                        YOUR ORDERS
                    </p>
            </div>
            

            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>

                    {orderLength == 0 && 
                        <div style={{display:`flex`,justifyContent:`center`, flexDirection:`column`, alignItems:`center`}}>
                            <p className="text-secondary">
                                You have no orders!
                            </p>
                            <a 
                                href="#"
                                className="btn btn-primary btn-sm text-white pl-3 pr-3">
                                Continue Shopping
                            </a>
                        </div>
                    }
                    {orderLength > 0 &&
                        <div className="orderContainer">
                            <table class="table table-hover">
                                <thead>
                                    <tr>
                                        <th scope="col">Order ID</th>
                                        <th scope="col">Order Date</th>
                                        <th scope="col">Total Amount</th>
                                        <th scope="col">Total Quantity</th>
                                        <th scope="col">
                                            Details
                                        </th>
                                        <th scope="col">Return Order</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {/* FOr loop for order history */}
                                    <tr>
                                        <td scope="row">OID92384</td>
                                        <td>1 Nov, 2020</td>
                                        <td>Rs. 2000</td>
                                        <td>1</td>
                                        <th>
                                            <a href="#" className="btn btn-primary btn-sm text-white pl-3 pr-3">
                                                View
                                            </a>
                                        </th>
                                        <th>
                                            Cancelled or "Placed Order"
                                        </th>
                                    </tr>
                                </tbody>
                            </table>
                        
                        </div>
                    }
                </div>
            </div>
        </div>
    </div>
    )
}

export default OrderHistory
