import React, {useState} from 'react';
import { connect } from 'react-redux';


function PersonalInfo(props) {
    const [changePassword, setChangePassword] =  useState(false);

    if (!changePassword) {
        return (
            
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 mt-5">
                        <p style={{fontSize:`17px`, fontWeight:`500`}}>
                            YOUR INFO
                        </p>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 text-right mt-5">
                        <button 
                            onClick={()=>{
                                setChangePassword(true);
                            }}
                            className="btn btn-danger btn-sm mr-4 pr-3 pl-3 text-white" 
                            style={{fontSize:`16px`}}>
                                Change Password
                        </button>
                        
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                        <div style={{backgroundColor:`#fcfcfc`,padding:`17px`,border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                            <div className="form-group ml-4 mt-4">
                                <label className="text-secondary" htmlFor="name">
                                    NAME 
                                </label>
                                     <span className="ml-4">{props.items.user.name}</span>
                            </div>
                            <div className="form-group ml-4">    
                                <label className="text-secondary" htmlFor="name">
                                    EMAIL 
                                </label>
                                <span className="ml-4">{props.items.user.sub}</span>
                            </div>

                            <div className="form-group ml-4">    
                                <label className="text-secondary" htmlFor="name">
                                    CONTACT 
                                </label>
                                <span className="ml-4">+9779823564258</span>
                            </div>
                        </div>
                    </div>
                </div>
        </div>  
     )
    }
    

    if(changePassword) {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 mt-5">
                        <p style={{fontSize:`17px`, fontWeight:`500`}}>
                            CHANGE PASSWORD
                        </p>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                        <div style={{backgroundColor:`#fcfcfc`,padding:`17px`,border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                            <form method="POST" className="pl-5 pt-3 pr-5 pb-3">
                                    <div className="form-group">
                                        <label htmlFor="current_password">Current Password</label>
                                        <input type="password" className="form-control" id="current_password" name="current_password" tabIndex="1" autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password" className="mt-2">New Password </label>
                                        <input type="password" className="form-control" id="password" name="password" tabIndex="2" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password" className="mt-2">Confirm Password </label>
                                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" tabIndex="3" />
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" value="Submit" className="btn btn-primary btn-sm text-white pl-3 mt-4 mr-3 pr-3"/>
                                        <button 
                                            type="button" 
                                            onClick={()=>{
                                                    setChangePassword(false);
                                                    }} 
                                            className="btn btn-danger mt-4 btn-sm text-white">
                                                Cancel
                                        </button>
                                    </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
        </div>
        )
    }
}

const mapStateToProps = state => ({
    items: state.Login
  });

export default connect(mapStateToProps)(PersonalInfo);
