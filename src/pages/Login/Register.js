import React, {useState} from "react";
import {useForm} from "react-hook-form";
import '../../styles/css/Register.css';


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnPassword, setCNPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const { register, errors } = useForm();
    const validatePassword = (e) => {
        if (password === cnPassword) {
            setIsPasswordValid(true);   
        } else {
            setIsPasswordValid(false);
        }
    };

    const handleSubmit = event => {
        if (isPasswordValid) {
            console.log(true);
        } else {
            console.log(false);
        }

        event.preventDefault();

    }

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 signup">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Signup with Shopping Store </h4>
                        </div>
                        <form  method="POST" onSubmit={handleSubmit} className="col-md-12 col-xl-12 mb-1">
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

                        <div className="row mb-4">
                            <input
                                type="email"
                                name="email"
                                value={email}
                                placeholder="Email"
                                className="form-control mb-4"
                                onChange={e=>setEmail(e.target.value)}
                                tabIndex="2"
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
                                tabIndex="3"
                                ref={register({
                                    required:true,
                                    minLength:8,
                                    maxLength:20,
                                    message:"Invalid password",
                                    pattern:/^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&-+=()])(?=\\S+$).{8, 20}+$/,
                                })}
                                
                            />
                        </div>
                        
                        <div className="row" >
                            <input
                                type="password"
                                name="cnpassword"
                                value={cnPassword}
                                placeholder="Confirm Password"
                                className="form-control mb-4"
                                onChange={e=>setCNPassword(e.target.value)}
                   
                                onBlur = {()=>{
                                    (password === cnPassword) ? 
                                        (setIsPasswordValid(true))
                                        :
                                        (setIsPasswordValid(false))}}
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

                        <div className="row">
                            <input
                                type="number"
                                name="phoneNo"
                                value={phoneNo}
                                placeholder="Phone Number"
                                className="form-control"
                                onChange={e=>setPhoneNo(e.target.value)}
                                tabIndex="5"
                                ref={register({
                                    required:true, 
                                    minLength:10, 
                                    maxLength:16,
                                    message:"Invalid phone number!",                                    
                                 })}
                            />

                        </div>
                        {errors.email && errors.password && errors.phoneNo  && <div className="row mt-3 errors" > * Please fill all the fields! </div>}
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
                </div>

            </div>
        </div>
    );
}

export default Register;