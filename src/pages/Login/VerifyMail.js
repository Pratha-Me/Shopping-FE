import React from "react";
import { useForm } from "react-hook-form";

import '../../styles/css/VerifyMail.css';

function VerifyMail(props) {
    const { register, handleSubmit, errors } = useForm();

    const handleSubmitForm = (event) => {
        event.preventDefault();
    };

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 verify">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-3">
                            <h4 className="mt-5 mb-4 pb-4"> Reset Password </h4>
                        </div>
                        <form onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-3">
                            <div className="row mb-4">

                                <input
                                    type="number"
                                    className="form-control"
                                    name="verification_code"
                                    placeholder="Verfication Code"
                                    tabIndex="1"
                                    min="0"
                                    ref={register({
                                        required: true,
                                        maxLength: 10,
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
                                        required: true,
                                        maxlength: 254,
                                    })}
                                />

                            </div>

                            <div className="row ">
                                <button
                                    type="submit"
                                    className="btn btn-danger form-control mt-5"
                                >Change Password</button>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

}


export default VerifyMail;