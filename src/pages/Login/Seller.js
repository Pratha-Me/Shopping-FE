import React,{useState} from 'react';
import { useForm } from "react-hook-form";
import '../../styles/css/Seller.css';

function Seller() {

    const {register, handleSubmit, errors} = useForm();
    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 seller">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-">
                             <h4 className="mt-5 mb-4 pb-4">
                                 Login to Shopping Store
                            </h4>
                        </div>
                        
                    
                        <form method="POST" onSubmit={handleSubmit()} className="col-md-12 col-xl-12 mb-3">
                            <div className="row">
                                
                            <input 
                                    type="email" 
                                    className="form-control mb-4"
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
                            <div className="row mt-4">
                                <input
                                        type="password"
                                        name="password"
                                        placeholder="Password"
                                        className="form-control"
                                        tabIndex="2"
                                        ref={register({
                                            required:true, 
                                            minLength:8, 
                                            maxlength:254,
                                            message:"Invalid password!",
                                        })}
                                    />

                            </div>
                            <div className="row mt-2 mb-5">
                                <div className="col-md-12 col-xl-12 text-right">
                                    <a href="#" id="forgot-pw" className="">Forgot Password ?</a>
                                </div> 
                            </div>

                            {errors.email && errors.password  && <div className="row mt-3 errors" > * Please fill all the fields! </div>}

                            <div className="row">
                                <input 
                                    type="submit"  
                                    className=" mt-5 mb-4 btn btn-primary form-control" 
                                    value="Login" 
                                />
                            </div>
                            <div className="row-mb-4 text-center mb-5">
                                    <span> 
                                      New Here ? 
                                    </span> &nbsp; 
                                    <a href="/register">
                                        Register Here
                                    </a>
                   
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        // <div className="seller">
        //     <form onSubmit={handleSubmit}>
        //     <div className="title-wrapper">
        //         <h3 class="login-title">Login to Shopping Store</h3>
        //     </div>
        //         <FormGroup controlId="email" bsSize="large">
        //             <FormControl
        //                 autoFocus
        //                 type="email"
        //                 value={email}
        //                 placeholder="Email"
        //                 onChange={e=>setEmail(e.target.value)}
        //             />

        //         </FormGroup>
        //         <FormGroup controlId="password" bsSize="large">
        //             <FormControl
        //                 value={password}
        //                 onChange={e=>setPassword(e.target.value)}
        //                 type="password"
        //                 placeholder="Password"
        //             /> 
        //         </FormGroup>
        //         <div className="forgot-pw-wrapper">
        //             <a href="#">Forgot Password?</a>
                   
        //         </div>  

        //         <FormGroup controlId="btn-login" bsSize="large">
        //             <FormControl
        //                 value="Login"
        //                 type="submit"
        //             />
        //         </FormGroup>

        //         <div className="register-wrapper">
        //             <span> New Here ? </span> &nbsp; <a href="/register">Register Here</a>
                   
        //         </div>  

        //     </form>
            
        // </div>
    )
}

export default Seller
