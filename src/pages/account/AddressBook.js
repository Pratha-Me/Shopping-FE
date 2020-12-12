import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';

function AddressBook(props) {
    const [editAddress, setEditAddress ] = useState(false);
    const [addAddress, setAddAddress] = useState(false);
 
      
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2">
                <div className="form-group  mt-4">
                        <label className="text-secondary" >
                            EMAIL
                        </label>
                        <span className="ml-4">{props.items.user.sub}</span>
                    </div>
                    <div className="form-group">    
                        <label className="text-secondary" >
                            CONTACT
                        </label>
                        <span className="ml-4">+977982325462</span>
                    </div>
                </div>
            {!addAddress && !editAddress  &&
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 text-right mt-2 text-right">
                
                <a 
                    onClick={()=>setAddAddress(true)} 
                    className="btn btn-primary btn-sm  text-white mb-4" 
                    style={{fontSize:`16px`}}>
                        Add Address
                </a>
            </div>
            }

            {!addAddress && !editAddress  &&
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                    <div className="form-group ml-4 mt-4">
                        <label className="text-secondary" >
                            NAME 
                        </label>
                        <span className="ml-4">{props.items.user.name}</span>
                    </div>
                    <div className="form-group ml-4">    
                        <label className="text-secondary">
                            CONTACT 
                        </label>
                        <span className="ml-4">+9779823564258</span>
                    </div>

                    <div className="form-group ml-4">    
                        <label className="text-secondary" >
                            ADDRESS 
                        </label>
                        <span className="ml-4">Bagmati-78</span>
                    </div>

                    <div className="form-group ml-4 text-right">   
                        <a 
                            href="#" 
                            onClick={()=>setEditAddress(true)}
                            className="btn btn-primary text-white btn-sm pl-4 pr-4 mr-4">
                                Edit
                        </a>
                        <a href="#" className="btn btn-danger text-white btn-sm pl-3 pr-3">Delete</a>
                    </div>
                </div>
            </div>
            }


            { !editAddress && addAddress &&
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3"  >
                 <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>        
                    <form method="POST" className="ml-5">
                        <h5 className="mb-4 mt-3">Add New Address</h5>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <input type="text" className="form-control mb-3" name="name" id="name" tabIndex="1" autoFocus />
                        </div>
                        <div className="form-group ml-4 " style={{"width":"50%"}}>
                            <label htmlFor="zone">
                                Zone
                            </label>
                            <input type="text" className="form-control mb-3" name="zone" id="zone" tabIndex="2" />
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="city">
                                City
                            </label>
                            <input type="text" className="form-control mb-3" name="city" id="zone" tabIndex="3" required/>
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input type="text" className="form-control mb-3" name="address" id="address" tabIndex="4" />
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="phone_no">
                                Phone No.
                            </label>
                            <input type="text" className="form-control mb-3" name="phone_no" id="phone_no" tabIndex="5" />
                        </div>
                       
                        <div className="form-group ml-4 text-center" style={{"width":"50%"}}>
                            <input type="submit" className="btn btn-primary btn-sm mb-4 mt-3 mr-4" value="Add Address"/>
                            <a className="btn btn-danger btn-sm mb-4 mt-3 text-white " onClick={()=>setAddAddress(false)} > Cancel </a>
                        </div>

                    </form>
                    </div>
                </div>
       
                }

            { editAddress && !addAddress &&
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3"  >
                 <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>        
                    <form method="POST" className="ml-5">
                        <h5 className="mb-4 mt-3">Update Address</h5>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="name">
                                Full Name
                            </label>
                            <input type="text" className="form-control mb-3" name="name" id="name" tabIndex="1" autoFocus />
                        </div>
                        <div className="form-group ml-4 " style={{"width":"50%"}}>
                            <label htmlFor="zone">
                                Zone
                            </label>
                            <input type="text" className="form-control mb-3" name="zone" id="zone" tabIndex="2" />
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="city">
                                City
                            </label>
                            <input type="text" className="form-control mb-3" name="city" id="zone" tabIndex="3" required/>
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="address">
                                Address
                            </label>
                            <input type="text" className="form-control mb-3" name="address" id="address" tabIndex="4" />
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="phone_no">
                                Phone No.
                            </label>
                            <input type="text" className="form-control mb-3" name="phone_no" id="phone_no" tabIndex="5" />
                        </div>
                       
                        <div className="form-group ml-4 text-center" style={{"width":"50%"}}>
                            <input type="submit" className="btn btn-primary btn-sm mb-4 mt-3 mr-4" value="Update Address"/>
                            <a className="btn btn-danger btn-sm mb-4 mt-3 text-white " onClick={()=>setEditAddress(false)} > Cancel </a>
                        </div>

                    </form>
                    </div>
                </div>
       
                }   
               

        </div>
    </div>

    )
}

const mapStateToProps = state => ({
    items: state.Login
  });

export default connect(mapStateToProps)(AddressBook);
