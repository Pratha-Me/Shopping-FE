import React,{useState} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../../styles/css/Register.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [cnPassword, setCNPassword] = useState("");
    const [fullname, setFullName] = useState("");
    const [phoneNo, setPhoneNo] = useState("");

    function validateForm() {
        return email.length > 6 && setPassword.length>6;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="signup">
            <form onSubmit={handleSubmit}>
            <div className="title-wrapper">
                <h3 class="signup-title">Signup with Shopping Store</h3>
                <p class="login-with">Login with </p>
                <a href="#" class="facebook-login">Facebook</a>
                <p class="signup-with"> - Or signup with Email - </p>
            </div>
                <FormGroup controlId="fullname">
                    <FormControl
                        type="text"
                        value={fullname}
                        placeholder="Full Name"
                        onChange={e=>setFullName(e.target.value)}
                    />

                </FormGroup>

                <FormGroup controlId="email" bsSize="large">
                    <FormControl
                        type="email"
                        value={email}
                        placeholder="Email"
                        onChange={e=>setEmail(e.target.value)}
                    />

                </FormGroup>
                <FormGroup controlId="password" bsSize="large">
                    <FormControl
                        value={password}
                        onChange={e=>setPassword(e.target.value)}
                        type="password"
                        placeholder="Password"
                    /> 
                </FormGroup>
                <FormGroup controlId="cnPassword" bsSize="large">
                    <FormControl
                        value={cnPassword}
                        onChange={e=>setCNPassword(e.target.value)}
                        type="password"
                        placeholder="Confirm Password"
                    /> 
                </FormGroup>
                <FormGroup controlId="phoneNo" bsSize="large">
                    <FormControl
                        value={phoneNo}
                        onChange={e=>setPhoneNo(e.target.value)}
                        type="text"
                        placeholder="Phone Number"
                    /> 
                </FormGroup>


                <FormGroup controlId="btn-signup" bsSize="large">
                    <FormControl
                        value="Register"
                        type="submit"
                    />
                </FormGroup>

                <div className="login-wrapper">
                        <span>Already have account ? </span>     
                        <a href="/login" className="login-link">Login</a>
                </div>  

            </form>
            
        </div>
    )
}

export default Login
