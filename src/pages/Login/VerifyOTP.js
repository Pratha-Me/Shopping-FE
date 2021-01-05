import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../styles/css/Register.css';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopHeader from '../../pages/Header/TopHeader';
import { verifyUserEmail } from "../../services/AuthService";

function VerifyOTP(props) {
    const email =  props.location.state.email;
    const [code, setCode] =useState();
    const { register, handleSubmit, errors } = useForm();

    if(localStorage.user) {
        return <Redirect to="/" />
    } 
    
    const handleInputChange = (event) => {
        setCode(event.target.value);

      };

    const handleSubmitForm = async (formData) => {
        console.log('OTP', code);
        await verifyUserEmail({'email':email, 'code':code})
        
        .then((result)=> {
            window.location.href="/login";
        })
        .catch((error) => {
            console.log("Invalid OTP");
        })


    };

    return (
        <>
         <TopHeader></TopHeader>
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 signup">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Verify Your Email </h4>
                            <p className="text-secondary-50 mb-4">Please enter six digit confirmation code sent in your email {email} and set new Password.</p>
                        
                        </div>
                        <form  method="POST" onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-1">
                        <div className="row mb-4">
                            <input
                                type="mumber"
                                placeholder="OTP Code"
                                name="name"
                                className="form-control mb-3 ml-4 mr-4"
                                tabIndex="1"
                                onChange={handleInputChange} 
                                autoFocus
                                ref={register({
                                    required:true, 
                                    minLength:6, 
                                    maxlength:6,
                                    pattern: /^[0-9]/

                                 })}
                              
                            />

                                {errors.name && errors.name.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * OTP Code is required.</p>
                                )}
                                {errors.name && errors.name.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * OTP code can have only digits.</p>
                                )}
                                 {errors.name && errors.name.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name must have exact 6 digits.</p>
                                )}
                                {errors.name && errors.name.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Full Name must have exact 6 digits.</p>
                                )}
                        </div>

                       

                      
                       <div className="row">
                            <input 
                                type="submit"  
                                className="mt-5 mb-4 btn btn-primary form-control ml-4 mr-4" 
                                value="Verify OTP" 
                            />
                        </div>

                        <div className="row login-wrapper" style={{"fontSize":"16px"}}>
                            <span className="mb-5">Back To </span>  &nbsp;   
                            <a href="/register" className="login-link mb-5">Register</a>
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


export default withRouter(connect(mapStateToProps)(VerifyOTP));