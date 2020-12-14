import React, {useEffect, useState} from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { getAnUser } from "../../services/AuthService";


function PersonalInfo(props) {
    const [userData, setUserData] = useState([]);
    
    useEffect(() => {
        getAnUser().then((response) => {
        setUserData(response.data);
        }).catch(err => {
        console.log(err);
        });
    }, [])

        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 mt-5">
                        <p style={{fontSize:`17px`, fontWeight:`500`}}>
                            YOUR INFO
                        </p>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 text-right mt-5">
                        <a 
                            href="/reset-password"
                            className="btn btn-danger btn-sm text-white"
                            >
                            Change Password
                        </a>                            
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                        <div style={{backgroundColor:`#fcfcfc`,padding:`17px`,border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                            <div className="form-group ml-4 mt-4">
                                <label className="text-secondary" htmlFor="name">
                                    NAME 
                                </label>
                                     <span className="ml-4">{userData.name}</span>
                            </div>
                            <div className="form-group ml-4">    
                                <label className="text-secondary" htmlFor="name">
                                    EMAIL 
                                </label>
                                <span className="ml-4">{userData.email}</span>
                            </div>

                            <div className="form-group ml-4">    
                                <label className="text-secondary" htmlFor="name">
                                    CONTACT 
                                </label>
                                <span className="ml-4">{userData.phone}</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
     )
    }
    

const mapStateToProps = state => ({
    items: state.Login
  });

export default withRouter(connect(mapStateToProps, null)(PersonalInfo));
