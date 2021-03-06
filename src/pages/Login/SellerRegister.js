import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../styles/css/SellerRegister.css';
import { postRegister } from "../../redux/actions";
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopHeader from '../../pages/Header/TopHeader';
import NavbarMenu from "../Header/NavbarMenu";

function Register(props) {
    const [userData, setUserData] = useState({
        name:"",
        email: "",
        password:"",
        phone:"",
        businessType:"",
        
    });


    const { register, handleSubmit, errors } = useForm();
    const [productToSell, setProductToSell] = useState([]);
    const [showSuccess, setShowSuccess] = useState(false);


    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        setUserData((userData) => ({
          ...userData,
          [name]: value
        }));

      };

    const handleProductToSell = (event) => {
        const value = event.target.value;
        productToSell.length = 0;
        productToSell.push(value.split(','));
;
    }

    const handleSubmitForm = async (formData) => {
        
        await props.postRegister({"name":userData.name, "email":userData.email, "password":userData.password,"phone":userData.phone,"businessType":userData.businessType, "productToSell":productToSell})
        .then((result) => {
            setShowSuccess(true);
            // window.location.href="/seller-register-success";
        })
        .catch((error) => {
            console.log("Error");
        })
    };

    return (
        <>
        <TopHeader></TopHeader>
        <NavbarMenu></NavbarMenu>
        <div className="jumbotron mt-5 ">
            <div className="row">
                <div className="col-md-4 col-xl-4 seller-register">
                    { showSuccess ? 
                        <div className="row form-container">
                            <div className="col-md-12 col-xl-12 text-center">
                                <h4 className="mt-5 mb-5">Seller Registration Successful! </h4>
                            </div>

                            <div className="col-md-12 col-xl-12 mt-2">
                                <p className="text-dark ml-4 mr-4 text-center mb-4">
                                    You have been registered as seller for our store! <br />
                                    Our team will contact you soon. <br/>
                                    Thank You!
                                </p>



                            </div>
                            <div className="col-md-12 col-xl-12 mt-5 text-center pl-5 pr-5 d-flex justify-content-around mb-5 pb-3">
                                <a href="/" className="btn btn-primary mr-4 text-white"> Go To Home</a>
                                <a href="/login" className="btn btn-outline-success ">Login</a>
                            </div>
                        </div>
                        :
                        
                        <div className="row form-container">  
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Seller Registration </h4>
                        </div>
                        <form  method="POST" onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-1">
                        <div className="row mb-4">
                            <input
                                type="text"
                                placeholder="Full Name"
                                name="name"
                                className="form-control mb-4 ml-4 mr-4"
                                tabIndex="1"
                                onChange={handleInputChange} 
                                autoFocus
                                ref={register({
                                    required:true, 
                                    minLength:6, 
                                    maxlength:254,
                                    pattern: /^[a-zA-Z]+ ?[a-zA-Z]* ?[a-zA-Z]+$/i

                                 })}
                              
                            />

                                {errors.name && errors.name.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Name is required!</p>
                                )}
                                {errors.name && errors.name.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Name is not valid!</p>
                                )}
                                 {errors.name && errors.name.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Name must have at least 6 characters.</p>
                                )}
                                {errors.name && errors.name.type === "maxLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Name cannot have more than 55 characters.</p>
                                )}
                        </div>
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="email"
                                placeholder="Email"
                                className="form-control mb-4 ml-4 mr-4"
                                onChange={handleInputChange} 
                                tabIndex="2"
                                
                                ref={register({
                                    required:true, 
                                    minLength:8, 
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


                        </div>

                        <div className="row mb-4">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control mb-4 ml-4 mr-4"
                                onChange={handleInputChange} 
                                tabIndex="3"
                                ref={register({
                                    required:true,
                                    minLength:6,
                                    maxLength:20,
                                    pattern:/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[@#$%^&+=]).*$/
                                })}
                                
                            />

                                {errors.password && errors.password.type === "required" && (
                                    <p className="text-danger mb-4 ml-4"> * Password is required!</p>
                                )}
                                {errors.password && errors.password.type === "pattern" && (
                                    <p className="text-danger mb-4 ml-4"> * Password should at least have a digit, a uppercase and a lowercase letter and a special character from (@#$%^&+=)</p>
                                )}
                                 {errors.password && errors.password.type === "minLength" && (
                                    <p className="text-danger mb-4 ml-4"> * Password must have at least 6 characters.</p>
                                )}
                                {errors.password && errors.password.type === "maxLength" && (
                                    <p className="text-danger mb-4 ml-4"> * Password cannot have more than 20 characters.</p>
                                )}


                        </div>
                        
                        <div className="row">
                            <input
                                type="text"
                                name="phone"
                                placeholder="Phone Number"
                                className="form-control register-phone-number mb-4 ml-4 mr-4"
                                onChange={handleInputChange} 
                                tabIndex="4"
                                ref={register({
                                    required:true, 
                                    minLength:10, 
                                    maxLength:15,
                                    pattern:/^[0-9]+$/,
                                                                       
                                 })}
                            />

                                {errors.phone && errors.phone.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Phone Number is required!</p>
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

                       

                        <div className="row mb-4">
                            <input
                                type="text"
                                name="businessType"
                                placeholder="Nature of Business"
                                className="form-control mb-4 ml-4 mr-4"
                                onChange={handleInputChange}
                                tabIndex="5"
                                ref={register({
                                    required:true,
                                    minLength:6,
                                    pattern: /^[a-zA-Z]+ ?[a-zA-Z]* ?[a-zA-Z]+$/i
                                })}
                                
                            />

                                {errors.businessType && errors.businessType.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type is required!</p>
                                )}
                                {errors.businessType && errors.businessType.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type can have only alphabets!</p>
                                )}
                                 {errors.businessType && errors.businessType.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type  should have 6 characters.</p>
                                )}
                               
                        </div>
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="productToSell"
                                placeholder="Products to Sell Ex: Clothing, Household"
                                className="form-control mb-4 ml-4 mr-4"
                                onChange={handleProductToSell}
                                tabIndex="6"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    pattern: /^[a-zA-Z,]+ ?[a-zA-Z,]* ?[a-zA-Z,]+$/i
                                })}
                                
                            />

                                {errors.productToSell && errors.productToSell.type === "required" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type is required!</p>
                                )}
                                {errors.productToSell && errors.productToSell.type === "pattern" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type can have only alphabets and commas!</p>
                                )}
                                 {errors.productToSell && errors.productToSell.type === "minLength" && (
                                    <p className="text-danger ml-4 mb-4"> * Business Type  should have 4 characters.</p>
                                )}
                               
                        </div>
                        


                       
                        <div className="row">
                            <input 
                                type="submit"  
                                className="mt-5 mb-4 btn btn-primary form-control" 
                                value="Register" 
                            />
                        </div>

                        <div className="row login-wrapper">
                            <span className="mb-5">Already have account ? </span>  &nbsp;   
                            <a href="/login" className="login-link mb-5">Login</a>
                        </div>
                        

                        </form>

                     </div>
                }
                     
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