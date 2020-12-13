import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAnUser } from "../../services/AuthService";

function AddressBook(props) {
    const [editAddress, setEditAddress ] = useState(false);
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        getAnUser(props.items.user.sub).then((response) => {
        setUserData(response.data);
        }).catch(err => {
        console.log(err);
        });
    }, [])
    
      
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2">
                <div className="form-group  mt-4">
                        <label className="text-secondary" >
                            EMAIL
                        </label>
                        <span className="ml-4">{userData.email}</span>
                    </div>
                    <div className="form-group">    
                        <label className="text-secondary" >
                            CONTACT
                        </label>
                        <span className="ml-4">{userData.phone}</span>
                    </div>
                </div>

            {!editAddress  &&
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                    <div className="form-group ml-4 mt-4">
                        <label className="text-secondary" >
                            NAME 
                        </label>
                        <span className="ml-4">{userData.name}</span>
                    </div>
                    <div className="form-group ml-4">    
                        <label className="text-secondary">
                            CONTACT 
                        </label>
                        <span className="ml-4">{userData.phone}</span>
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
                            className="btn btn-primary text-white btn-sm pl-4 pr-4">
                                Edit
                        </a>
                        
                    </div>
                </div>
            </div>
            }


            { editAddress &&
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3"  >
                 <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>        
                    <form method="POST" className="ml-5">
                        <h5 className="mb-4 mt-3">Update Address</h5>
                        
                        <div className="form-group ml-4 " style={{"width":"50%"}}>
                            <label htmlFor="province">
                                Province
                            </label>
                            <input type="text" className="form-control mb-3" name="province" id="province" tabIndex="2" />
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
