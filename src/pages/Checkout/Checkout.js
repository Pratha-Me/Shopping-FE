import React, {useState} from 'react';
import '../../styles/css/Checkout.css';

function Checkout() {
    const [isUserDetailsVerified, setIsUserDetailsVerified] = useState(true);
    const [isAddressVerified, setIsAddressVerified] = useState(false);

    return (
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2" style={{margin:`0 !important`, padding:'0!important'}}>
                    <nav aria-label="breadcrumb"  className="profile-breadcrumb">
                        <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item"><a href="/">Home &nbsp;</a></li> 
                            <li className="breadcrumb-item"><a href="/cart/">Cart Summary &nbsp;</a></li> 
                            <li className="breadcrumb-item active" aria-current="page">Checkout</li>
                        </ol>
                    </nav>
                    <h3 className="text-uppercase mb-3 text-center text-dark">
                        Checkout
                    </h3>
  
                </div>
            </div>
            <div className="row mb-5">
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
                    <ul id="progressbar" class="text-center" >
                        <li class="step0 active" style={{"fontWeight":"500", "fontSize":"19px"}} >User Details </li>
                            
                        { isAddressVerified ?
                            <li class=" step0 active" style={{"fontWeight":"500", "fontSize":"19px"}}>Addresses</li>
                            :
                            <li class=" step0" style={{"fontWeight":"500", "fontSize":"19px"}}>Addresses</li>

                        }
                        
                        { isAddressVerified ?
                            <li class="step0 active" style={{"fontWeight":"500", "fontSize":"19px"}}>Order Summary</li>
                            :
                            <li class="step0" style={{"fontWeight":"500", "fontSize":"19px"}}>Order Summary</li>
                        }
                        
                    </ul>
                </div>
                
                {  !isAddressVerified &&
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 ">
                   <div className="userDetails">
                        <div className="form-group">
                            <label >Name:</label>
                            <span className="text-capitalize">Ram Lamsal</span>
                        </div>
                        <div className="form-group">
                            <label >
                                Address:
                            </label>
                            <span className="text-capitalize">
                                Gaushala, Kathmandu, Nepal
                            </span>

                        </div>
                        <div className="form-group">
                            <label >
                                Phone Number:
                            </label>
                            <span>9858457516</span>
                        </div>

                        <div className="form-group">
                            <button className="btn btn-danger btn-sm mr-3" onClick={()=>setIsAddressVerified(!isAddressVerified)}>Use this Address</button>
                            <a href="#" className="btn btn-danger btn-sm text-white">Delete</a> 
                        </div>
                   </div>

                </div>
                }
                { !isAddressVerified &&
                <div className="col-xs-12 col-sm-12 col-md-6 col-xl-6 mt-4">
                    
                    <h5 className="mb-3">Shipping Address</h5>
                    <form action="">
                        <div className="form-group ">
                            <label htmlFor="name">
                                Name
                            </label>
                            <input type="text" className="form-control mb-3" name="name" id="name" tabindex="1" autofocus required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="zone">
                                Zone
                            </label>
                            <input type="text" className="form-control mb-3" name="zone" id="zone" tabindex="2" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="city">
                                City
                            </label>
                            <input type="text" className="form-control mb-3" name="zone" id="zone" tabindex="3" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">
                                Address
                            </label>
                            <input type="text" className="form-control mb-3" name="address" id="address" tabindex="4" required/>
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone_no">
                                Phone No.
                            </label>
                            <input type="text" className="form-control mb-3" name="phone_no" id="phone_no" tabindex="5" required/>
                        </div>
                       
                        <div className="form-group">
                            <input type="submit" className="btn btn-primary btn-sm" value="Ship To This Address" onClick={()=>setIsAddressVerified(!isAddressVerified)} />
                        </div>

                    </form>
                </div>
                }
               
            </div>
            {isAddressVerified &&
            <div className="row">
                <h3>Order Summary</h3>
                <table className="table table-xs ">
                    <tr>
                        <th></th>
                        <th>Description</th>
                        <th className="text-right">Amount</th>
                        <th className="text-right">Price</th>
                        <th className="text-right">Total</th>
                    </tr>
                    
                        <tr className="item-row">
                        <td> <img src="https://ae01.alicdn.com/kf/HTB1ta5XLpXXXXXcXXXXq6xXFXXXN/2018-Brand-New-Jacket-Men-Top-Design-Casual-Outwear-Spring-Autumn-Slim-Fit-Solid-Mens-Jackets.jpg" style={{width:'80px', height:'100px'}} /></td>
                        <td>
                            <p> <strong>Winter Jacket</strong></p>
                        </td>
                        <td className="text-right" title="Amount">
                            <div className="input-group mb-3 text-center">
                                
                            </div>
                        </td>
                        <td className="text-right" title="Price">Rs.1000</td>
                        <td className="text-right" title="Total">Rs.1000</td>
                    </tr>
                    
                    <tr className="total-row info">
                        
                        <td className="text-right " colspan="4">
                            <span>Sub-total </span> <br />
                            Shipping Charge
                        </td>
                        <td className="text-right">
                            <span className="font-weight-bold">
                                Rs.1000
                            </span> <br/>
                            <span className="font-weight-bold">Rs.50</span>
                        </td>
                    </tr>
                
                    <tr className="total-row info">
                        <td className="text-right font-weight-bold" colspan="4">Total</td>
                        <td className="text-right ton-weight-bold">Rs.1050</td>
                    </tr>

                </table>
                <div class="col-md-6 mb-4">
                    <div className="payment-methods">
                        <form action="">
                            <div className="form-group">
                                <p style={{"fontSize":"18px"}}>How would you like to pay for your order? </p>
                                <div className="list-group d-flex" style={{"justifyContent":"flex-end","flexDirection":"row-reverse","alignItems":"center"}}>
                                    <label htmlFor="cod" className="mt-2 pl-2" >COD</label>
                                    <input type="radio" name="payment" id="cod" value="cod" /> 
                                </div>
                                <div className="list-group d-flex" style={{"justifyContent":"flex-end","flexDirection":"row-reverse","alignItems":"center"}}>
                                    <label htmlFor="esewa" className="mt-2 pl-2">eSewa</label>
                                    <input type="radio" name="payment" id="esewa" value="esewa" /> 
                                </div>                            
                            </div>    
                        </form>

                    </div>
                    
                </div>
               
                <div className="col-md-6 text-right d-flex " style={{"flexDirection":"column","alignItems":"flex-end"}}>
                    <a href="#" className="btn btn-primary mb-5 pl-3 pr-3 text-white mt-5 ">
                        Pay Now
                    </a>
                </div>
            </div>
            }
            
    </div>
    
    )
}

export default Checkout;
