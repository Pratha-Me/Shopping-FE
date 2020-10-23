import React,{useState} from "react";
import { useForm } from "react-hook-form";
import '../../styles/css/Login.css';


function Login() {
    const { register, handleSubmit, errors } = useForm();
    
    return (
        <div class="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 login">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-3">
                            <h4 className="mt-5 mb-4 pb-4"> Login to Shopping Store </h4>
                        </div>
                        <form  method="POST" onSubmit={handleSubmit()} className="col-md-12 col-xl-12 mb-3">
                        <div className="row mb-4">
                            
                            <input 
                                type="email" 
                                className="form-control"
                                name="email"
                                placeholder="Email"
                                tabIndex="1"
                                autofocus
                                ref={register({
                                    required:true, 
                                    minLength:8, 
                                    maxLength:254,
                                    message:"Invalid email address!",
                                    pattern:/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/ ,
                                    
                                 })}
                              
                            />
                        </div>

                        <div className="row ">
                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                className="form-control mt-4"
                                tabIndex="2"
                                ref={register({
                                    required:true, 
                                    minLength:8, 
                                    maxlength:254,
                                    message:"Invalid password!",
                                 })}
                            />

                        </div>

                        <div className="row mt-1 ">
                            <div className="col-md-12 col-xl-12 text-right">
                                <a href="#" id="forgot-pw">Forgot Password ?</a>
                            </div> 
                        </div>

                        {errors.email && errors.password  && <div className="row mt-3 errors" > * Please fill all the fields! </div>}

                        <div className="row ">
                            <input 
                                type="submit"  
                                className="btn btn-primary form-control mt-5" 
                                value="Login" 
                            />
                        </div>

                        </form>
                        <div className="col-md-12 col-xl-12 text-center mb-5">
                            <a href="/register" id="register">Create New Account</a>
                       </div>
                     </div>
                </div>

            </div>
        </div>
  );

}




export default Login;