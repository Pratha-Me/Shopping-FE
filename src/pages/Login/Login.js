import React from "react";
import { useForm } from "react-hook-form";
import { withRouter, Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopHeader from '../../pages/Header/TopHeader';

import '../../styles/css/Login.css';
import { postLogin } from "../../redux/actions";


function Login(props) {
    const { register, handleSubmit, errors } = useForm();
    let  currentURL = (window.location.href).split('/');
    if(currentURL[currentURL.length-1] == 'login') {
        console.log("Test");
    }
  
    if(localStorage.user) {
        return <Redirect to="/" />
    }

    const handleSubmitForm = async (formData) => {
        await props.postLogin(formData, props.history);
    };

    return (
        <>
        <TopHeader></TopHeader>
      
        <div className="jumbotron " style={{"marginTop":"20px !important"}}>
            <div className="row">
                <div className="col-md-4 col-xl-4 login">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-3">
                            <h4 className="mt-5 mb-5 pb-4"> Login to Shopping Store </h4>
                        </div>
                        <form onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-3 ">
                            <div className="row mb-4">

                                <input
                                    type="email"
                                    className="form-control ml-3 mr-3 mb-3 "
                                    name="username"
                                    placeholder="Email"
                                    tabIndex="1"
                                    ref={register({
                                        required: true,
                                        pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,

                                    })}
                                />

                                {errors.username && errors.username.type === "required" && (
                                    <p className="text-danger ml-3"> * Email is required!</p>
                                )}
                                {errors.username && errors.username.type === "pattern" && (
                                    <p className="text-danger ml-3"> * Email is not valid!</p>
                                )}
                                
                                
                            </div>

                            <div className="row ">
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="form-control mt-3 ml-3 mr-3 mb-3"
                                    tabIndex="2"
                                    ref={register({
                                        required: true,
                                      
                                    })}
                                />

                                {errors.password && errors.password.type === "required" && (
                                    <p className="text-danger ml-3"> * Password is required!</p>
                                )}
                                
                                
                               

                            </div>

                            <div className="row  ">
                                <div className="col-md-12 col-xl-12 text-right">
                                    <Link to="/reset-password" className="mt-2">Forgot Password ?</Link>
                                </div>
                            </div>

                            {errors.email && errors.password && <div className="row mt-3 errors" > * Please fill all the fields! </div>}

                            <div className="row ">
                                <button
                                    type="submit"
                                    className="btn btn-primary form-control ml-3 mr-3 mt-5"
                                >Login</button>
                            </div>

                        </form>
                        <div className="col-md-12 col-xl-12 text-center mb-5">
                            <a href="/register" id="register">Create New Account</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
   </> );
}

const mapStateToProps = (state) => {
    return {
        data: state.Login
    }
}

const mapActionsToProps = {
    postLogin
}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(Login));