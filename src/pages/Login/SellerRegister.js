import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../styles/css/SellerRegister.css';


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [natureOfBusiness, setNatureOfBusiness] = useState("");

    const { register, handleSubmit, errors } = useForm();
    const validatePassword = () => {
        console.log("hello");
    }

    return (
        <div className="jumbotron mt-5 ">
            <div className="row">
                <div className="col-md-4 col-xl-4 seller-register">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Seller Registration </h4>
                        </div>
                        <form  method="POST" onSubmit={handleSubmit()} className="col-md-12 col-xl-12 mb-1">
                        <div className="row mb-4">
                            <input
                                type="text"
                                value={fullname}
                                placeholder="Full Name"
                                name="fullname"
                                className="form-control mb-4"
                                tabIndex="1"
                                onChange={e=>setFullName(e.target.value)}
                                autoFocus
                                ref={register({
                                    required:true, 
                                    minLength:10, 
                                    maxlength:254,
                                    message:"Invalid Username!",
                                    pattern: /^[A-Za-z]+$/i

                                 })}
                              
                            />
                        </div>
                        <div className="row">
                            <input
                                type="number"
                                name="phoneNo"
                                value={phoneNo}
                                placeholder="Phone Number"
                                className="form-control mb-4"
                                onChange={e=>setPhoneNo(e.target.value)}
                                tabIndex="2"
                                ref={register({
                                    required:true, 
                                    minLength:10, 
                                    maxLength:16,
                                    message:"Invalid phone number!",                                    
                                 })}
                            />

                        </div>

                        <div className="row mb-4">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                className="form-control mb-4"
                                onChange={e=>setEmail(e.target.value)}
                                tabIndex="3"
                                ref={register({
                                    required:true, 
                                    minLength:8, 
                                    maxLength:254,
                                    message:"Invalid eamil address!",
                                    pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ,
                                    
                                 })}
                            />

                        </div>

                        <div className="row mb-4">
                            <input
                                type="password"
                                name="password"
                                value={password}
                                placeholder="Password"
                                className="form-control mb-4"
                                onChange={e=>setPassword(e.target.value)}
                                tabIndex="4"
                                ref={register({
                                    required:true,
                                    minLength:8,
                                    maxLength:20,
                                    message:"Invalid password",
                                    pattern:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}+$/,
                                })}
                                
                            />
                        </div>
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="address"
                                value={address}
                                placeholder="Address"
                                className="form-control mb-4"
                                onChange={e=>setAddress(e.target.value)}
                                tabIndex="5"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    maxLength:254,
                                    message:"Invalid  address",
                                    pattern:/^[A-Za-z]+[1-9]+$/i,
                                })}
                                
                            />
                        </div>

                        <div className="row mb-4">
                            <input
                                type="text"
                                name="city"
                                value={city}
                                placeholder="City"
                                className="form-control mb-4"
                                onChange={e=>setCity(e.target.value)}
                                tabIndex="6"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    maxLength:254,
                                    message:"Invalid  City Name",
                                    pattern:/^[A-Za-z]$/i,
                                })}
                                
                            />
                        </div>
                        
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="province"
                                value={province}
                                placeholder="Province"
                                className="form-control mb-4"
                                onChange={e=>setProvince(e.target.value)}
                                tabIndex="7"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    maxLength:254,
                                    message:"Invalid  State",
                                    pattern:/^[A-Za-z]$/i,
                                })}
                                
                            />
                        </div>
                        
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="country"
                                value={country}
                                placeholder="Country"
                                className="form-control mb-4"
                                onChange={e=>setCountry(e.target.value)}
                                tabIndex="8"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    maxLength:254,
                                    message:"Invalid  Country",
                                    pattern:/^[A-Za-z]$/i,
                                })}
                                
                            />
                        </div>
                        
                        <div className="row mb-4">
                            <input
                                type="text"
                                name="natureOfBusiness"
                                value={natureOfBusiness}
                                placeholder="Nature of Business"
                                className="form-control mb-4"
                                onChange={e=>setNatureOfBusiness(e.target.value)}
                                tabIndex="9"
                                ref={register({
                                    required:true,
                                    minLength:4,
                                    maxLength:254,
                                    message:"Invalid nature of business.",
                                    pattern:/^[A-Za-z]$/i,
                                })}
                                
                            />
                        </div>
                        


                       
                        {errors.email && errors.password  && <div className="row mt-3 errors" > * Please fill all the fields! </div>}
                        <div className="row">
                            <input 
                                type="submit"  
                                className="mt-5 mb-4 btn btn-primary form-control" 
                                value="Register" 
                            />
                        </div>

                        <div className="row login-wrapper">
                            <span className="mb-5">Already have account ? </span>  &nbsp;   
                            <a href="" className="login-link mb-5">Login</a>
                        </div>
                        

                        </form>

                     </div>
                </div>

            </div>
        </div>
    );
}

export default Register;