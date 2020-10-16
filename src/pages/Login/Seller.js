import React,{useState} from 'react';
import {FormGroup, FormControl} from 'react-bootstrap';
import '../../styles/css/Seller.css';

function Seller() {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");



    function handleSubmit(event) {
        event.preventDefault();
    }
    return (
        <div className="seller">
            <form onSubmit={handleSubmit}>
            <div className="title-wrapper">
                <h3 class="login-title">Login to Shopping Store</h3>
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
                <div className="forgot-pw-wrapper">
                    <a href="#">Forgot Password?</a>
                   
                </div>  

                <FormGroup controlId="btn-login" bsSize="large">
                    <FormControl
                        value="Login"
                        type="submit"
                    />
                </FormGroup>

                <div className="register-wrapper">
                    <span> New Here ? </span> &nbsp; <a href="/register">Register Here</a>
                   
                </div>  

            </form>
            
        </div>
    )
}

export default Seller
