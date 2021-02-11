import React from 'react';
import { useForm } from "react-hook-form";
import '../../styles/css/Seller.css';
import TopHeader from '../../pages/Header/TopHeader';
import NavbarMenu from '../Header/NavbarMenu';

function Seller() {

    const {register, handleSubmit, errors} = useForm();
    return (
        <>
        <TopHeader > </TopHeader>
        <NavbarMenu></NavbarMenu>
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 seller">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-">
                             <h4 className="mt-5 mb-5 pb-4">
                                 Login to Shopping Store
                            </h4>
                        </div>
                        
                    
                        <form method="POST" onSubmit={handleSubmit()} className="col-md-12 col-xl-12 mb-3">
                            <div className="row">
                                
                            <input 
                                    type="email" 
                                    className="form-control mb-4 ml-4 mr-4"
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
                                        className="form-control mt-2 ml-4 mr-4"
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
                                    className=" mt-5 mb-4 btn btn-primary form-control ml-4 mr-4" 
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

        </>
    
        )
}

export default Seller
