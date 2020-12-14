import React from "react";
import { useForm } from "react-hook-form";
import '../../styles/css/VerifyMail.css';
import { postForgetPwd } from "../../services/AuthService";
import { Link, withRouter } from "react-router-dom";

function VerifyMail(props) {
    const { register, handleSubmit, errors } = useForm();
        console.log(props.location);
    const handleSubmitForm = async (formdata) => {
        formdata.email = props.location.state.email;
        await(postForgetPwd(formdata)).then((result)=> {
            props.history.push('/');
        });
    };

    return (
        <div className="jumbotron">
            <div className="row">
                <div className="col-md-4 col-xl-4 verify">
                    <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center pt-3">
                            <h4 className="mt-5 mb-1 pb-4"> Reset Password </h4>
                        </div>
                       
                        <form onSubmit={handleSubmit(handleSubmitForm)} className="col-md-12 col-xl-12 mb-3">
                            <div className="form-group">
                                <p className="mb-4 pb-2"> Enter verification code and new password.  </p>
                            </div>

                            <div className="row mb-4">

                                <input
                                    type="number"
                                    className="form-control"
                                    name="code"
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
                                    name="newPassword"
                                    placeholder="New Password"
                                    className="form-control mt-4"
                                    tabIndex="2"
                                    ref={register({
                                        required: true,
                                        maxlength: 254,
                                    })}
                                />

                            </div>


                            <div className="row">
                                <input
                                    type="hidden"
                                    name="email"
                                    className="form-control mt-4"
                                    tabIndex="3"
                                    value={props.location.state.email}
                                />

                            </div>

                            <div className="row ">
                                <button
                                    type="submit"
                                    className="btn btn-danger form-control mt-5 mb-4"
                                >Change Password</button>
                            </div>

                            <div className="row">
                              <Link to="/reset-password/" className="ml-2 text-primary" >
                                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                                        <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                                </svg>
                                <span> Back </span>
                              </Link>
                            </div>

                        </form>
                    </div>
                </div>

            </div>
        </div>
    );

}


export default withRouter(VerifyMail);