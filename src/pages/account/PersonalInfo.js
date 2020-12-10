import React, {useState} from 'react';
import { connect } from 'react-redux';


function PersonalInfo(props) {

    const [editInfo, setEditInfo] = useState(false);
    const [changePassword, setChangePassword] =  useState(false);

    console.log("Personal Info:", props.items.user.sub)


    if (!editInfo && !changePassword) {
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
                                setEditInfo(false);
                                setChangePassword(true);
                            }}
                            className="btn btn-danger btn-sm mr-4 pr-3 pl-3 text-white" 
                            style={{fontSize:`16px`}}>
                                Change Password
                        </button>
                        <button
                            type="button" 

                            onClick={()=>{
                                setEditInfo(true);
                                setChangePassword(false);
                            }} 
                            className="btn btn-primary btn-sm pl-4 pr-4 text-white" 
                            style={{fontSize:`16px`}}>
                                Edit
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
    if(editInfo && !changePassword)
    {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 mt-5">
                        <p style={{fontSize:`17px`, fontWeight:`500`}}>
                            EDIT INFO
                        </p>
                    </div>
                    <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 text-right mt-5">
                        <button
                            type="button" 
                            onClick={()=>setEditInfo(false)}
                            className="btn btn-danger btn-sm pl-4 pr-4 text-white" 
                            style={{fontSize:`16px`}}>
                                Close
                        </button>
                    </div>

                    <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                        <div style={{backgroundColor:`#fcfcfc`,padding:`17px`,border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                            <form method="POST" className="pl-5 pt-3 pr-5 pb-3">
                                    <div className="form-group">
                                        <label htmlFor="full_name">Full Name</label>
                                        <input type="text" className="form-control"  name="full_name" id="full_name" tabIndex="1" autoFocus />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="phone_number">Phone </label>
                                        <input type="text" className="form-control" name="phone_number" id="phone_number" tabIndex="2" />
                                    </div>

                                    <div className="form-group text-center ">
                                        <input type="submit" value="Save" className="btn btn-primary text-white pl-3 pr-3 mt-3 "/>
                                    </div>
                            </form>
                           
                        </div>
                    </div>
                </div>
        </div>
        )
    }

    if(changePassword && !editInfo) {
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
                                        <label htmlFor="password">New Password </label>
                                        <input type="password" className="form-control" id="password" name="password" tabIndex="2" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="confirm_password">Confirm Password </label>
                                        <input type="password" className="form-control" id="confirm_password" name="confirm_password" tabIndex="3" />
                                    </div>
                                    <div className="form-group text-center">
                                        <input type="submit" value="Submit" className="btn btn-primary btn-sm text-white pl-3 mt-4 mr-3 pr-3"/>
                                        <button 
                                            type="button" 
                                            onClick={()=>{
                                                    setChangePassword(false);
                                                    setEditInfo(false);
                                                    }} 
                                            class="btn btn-danger mt-4 btn-sm text-white">
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
