import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../styles/css/Register.css';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { postRegister } from "../../redux/actions";
import TopHeader from '../../pages/Header/TopHeader';
import { postSendOtp } from "../../services/AuthService";

function Register(props) {
    const [redirect, setRedirect] = useState(false);
    const [userData, setUserData] = useState({
        name:"",
        email: "",
        password:"",
        phone:""
    });

 

    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const { register, handleSubmit, errors } = useForm();

    if(localStorage.user) {
        return <Redirect to="/" />
    } 
    
    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setUserData((userData) => ({
          ...userData,
          [name]: value
        }));

      };

    const handleSubmitForm = async (formData) => {
        await props.postRegister(formData, props.history)
        .then((result) => {
            postSendOtp({'email':userData.email}).then(()=> {
                setRedirect(() => true);
            })

            .catch(()=> {
                console.log('Unable to send OTP');
            })
        })


    };

    if (redirect) {
        return <Redirect 
            to={{
            pathname: '/verify-otp/',
            state: { 'email':userData.email }
        }} 
            />
    }

    return (
        <>
         <TopHeader></TopHeader>
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 signup">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Signup with Shopping Store </h4>
                        </div>
                        <form  method="POST" onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-1">
                        <div className="row mb-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                className="form-control mb-3 ml-4 mr-4"
                                tabIndex="1"
                                onChange={handleInputChange} 
                                autoFocus
                                ref={register({
                                    required:true, 
                                    minLength:5, 
                                    maxlength:254,
                                    pattern: /^[a-zA-Z]+ ?[a-zA-Z]* ?[a-zA-Z]+$/i

                                 })}
                              
                            />

                                {errors.name && errors.name.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name is required.</p>
                                )}
                                {errors.name && errors.name.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name can have maximum 2 spaces.</p>
                                )}
                                 {errors.name && errors.name.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name must have at least 5 characters.</p>
                                )}
                                {errors.name && errors.name.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name cannot have more than 25 characters.</p>
                                )}
                        </div>

                        <div className="row mb-4">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form-control mb-3 ml-4 mr-4"
                                onChange={handleInputChange} 
                                tabIndex="2"
                                
                                ref={register({
                                    required:true, 
                                    minLength:8, 
                                    maxLength:30,
                                    pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ,
                                    
                                 })}
                            />

                                {errors.email && errors.email.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Email is required!</p>
                                )}
                                {errors.email && errors.email.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Email is not valid!</p>
                                )}
                                 {errors.email && errors.email.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Email must have at least 8 characters.</p>
                                )}
                                {errors.email && errors.email.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Email cannot have more than 25 characters.</p>
                                )}

                        </div>

                        <div className="row mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control mb-3 ml-4 mr-4"
                                onChange={handleInputChange} 
                                tabIndex="3"
                                ref={register({
                                    required:true,
                                    minLength:6,
                                    maxLength:20,
                                    pattern:/^[A-Za-z0-9]+$/i,
                                })}
                                
                            />

                                {errors.password && errors.password.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Password is required!</p>
                                )}
                                {errors.password && errors.password.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Password can have only numbers and alphabets!</p>
                                )}
                                 {errors.password && errors.password.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Password must have at least 6 characters.</p>
                                )}
                                {errors.password && errors.password.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Password cannot have more than 20 characters.</p>
                                )}


                        </div>
                        

                        <div className="row">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="form-control register-phone-number ml-4 mr-4 mb-3"
                                onChange={handleInputChange} 
                                tabIndex="5"
                                ref={register({
                                    required:true, 
                                    minLength:10, 
                                    maxLength:15,
                                    pattern:/^[0-9]+$/,
                                                                       
                                 })}
                            />

                                {errors.phone && errors.phone.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"  > * Phone Number is required!</p>
                                )}
                                {errors.phone && errors.phone.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Phone Number can have only numbers!</p>
                                )}
                                 {errors.phone && errors.phone.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Phone Number must have at least 10 digits.</p>
                                )}
                                {errors.phone && errors.phone.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Phone Number cannot have more than 15 digits.</p>
                                )}

                        </div>
                      
                       <div className="row">
                            <input 
                                type="submit"  
                                className="mt-5 mb-4 btn btn-primary form-control ml-4 mr-4" 
                                value="Register" 
                            />
                        </div>

                        <div className="row login-wrapper">
                            <span className="mb-5">Already have account ? </span>  &nbsp;   
                            <a href="/login" className="login-link mb-5">Login</a>
                        </div>
                        

                        </form>

                     </div>
                </div>

            </div>
        </div>
        </>
    );
}

const mapStateToProps = (state) => {
    return {
        data: state.Account
    }
}

const mapActionsToProps = {
    postRegister
}


export default withRouter(connect(mapStateToProps, mapActionsToProps)(Register));