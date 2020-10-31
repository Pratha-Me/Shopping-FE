import React from "react";
import { useForm } from "react-hook-form";
import '../../styles/css/ResetPassword.css';

function ResetPassword(props) {
    const { register, handleSubmit, errors } = useForm();

    const handleSubmitForm = event => {
        event.preventDefault();
    };

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 reset">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-3">
                            <h4 className="mt-5 mb-4 pb-4"> Forgot your password ? </h4>
                        </div>
                        <form onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-3">
                            <div className="row mb-4">
                                <p className="text-justify">
                                    Please enter your email address to receive userverification code.
                                </p>
                            </div>
                            <div className="row mb-4">

                                <input
                                    type="email"
                                    className="form-control"
                                    name="email"
                                    placeholder="Email address"
                                    tabIndex="1"
                                    ref={register({
                                        required: true,
                                        maxLength: 254,
                                        message: "Invalid email address!",
                                        pattern: /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/,

                                    })}

                                />
                            </div>
                            {errors.email && <div className="row mt-3 errors" > * Please fill required fields! </div>}

                            <div className="row ">
                                <button
                                    type="submit"
                                    className="btn btn-danger form-control mt-5"
                                >Submit</button>
                            </div>

                        </form>
                        <div className="col-md-12 col-xl-12 text-center mb-5">
                            <a href="/login" id="login">Login instead ?</a>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );

}


export default ResetPassword;