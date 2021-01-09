import React, {useState} from "react";
import '../../styles/css/SellerRegister.css';
import { withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import TopHeader from '../../pages/Header/TopHeader';

function SellerRegisterSuccess(props) {
    return (
        <>
        <TopHeader></TopHeader>
        <div className="container mt-5 ">
            <div className="row">
                <div className="col-md-4 col-xl-4 seller-register">
                     <div className="row form-container">
                        <div className="col-md-12 col-xl-12 text-center">
                            <h4 className="mt-5 mb-5"> Seller Registration Successful!</h4>
                        </div>

                        <div className="col-md-12 col-xl-12">
                            <p className="text-dark">
                                Your  request for seller account registration has been successed! <br />
                                You will be contacted soon!
                            </p>
                        </div>
                        
                     </div>
                </div>

            </div>
        </div>
        </>
    );

}


const mapStateToProps = (state) => {
    return {
        data: state.Account
    }
}




export default withRouter(connect(mapStateToProps)(SellerRegisterSuccess));