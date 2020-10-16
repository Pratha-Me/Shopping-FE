import React,{useState} from 'react';
import {FormGroup, FormControl, ControlLabel} from 'react-bootstrap';
import '../../styles/css/Login.css';

function Login() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 6 && setPassword.length>6;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="login">
            <form onSubmit={handleSubmit}>
            <div className="title-wrapper">
                <h3 class="login-title">Login to Shopping Store</h3>
                <p class="login-with">Login with </p>
                <a href="#" class="facebook-login">Facebook</a>
                <p class="login-with"> - Or Login using Email - </p>
            </div>
                <FormGroup controlId="email" bsSize="large">
                    <FormControl
                        autoFocus
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

                <FormGroup controlId="btn-login" bsSize="large">
                    <FormControl
                        value="Login"
                        type="submit"
                    />
                </FormGroup>

                <div className="forgot-pw-wrapper">
                    <a href="#">Forgot Password ? Recover your account</a>    
                </div>  

                <div className="register">
                    <a href="/register" className="create-account">Create New Account</a>
                </div>    
                

            </form>
            
        </div>
    )
}

export default Login
