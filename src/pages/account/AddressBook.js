import React from 'react'

function AddressBook() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2">
                <div className="form-group  mt-4">
                        <label className="text-secondary" >
                            EMAIL
                        </label>
                        <span className="ml-4">johndoe@gmail.com</span>
                    </div>
                    <div className="form-group">    
                        <label className="text-secondary" >
                            CONTACT
                        </label>
                        <span className="ml-4">+977982325462</span>
                    </div>
                </div>
                
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 text-right mt-2 text-right">
                
                <a 
                    href="#" 
                    className="btn btn-primary btn-sm pl-4 text-white" 
                    style={{fontSize:`16px`}}>
                        Add Address
                </a>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                    <div className="form-group ml-4 mt-4">
                        <label className="text-secondary" >
                            NAME 
                        </label>
                        <span className="ml-4">John Doe</span>
                    </div>
                    <div className="form-group ml-4">    
                        <label className="text-secondary">
                            CONTACT 
                        </label>
                        <span className="ml-4">+9779823564258</span>
                    </div>

                    <div className="form-group ml-4">    
                        <label className="text-secondary" >
                            ADDRESS 
                        </label>
                        <span className="ml-4">Gaushala, Kathmandu (Inside Ring Road), Bagmati, NP - 44600</span>
                    </div>

                    <div className="form-group ml-4 text-right">   
                        <a href="#" className="btn btn-primary text-white btn-sm pl-4 pr-4 mr-4">Edit</a>
                        <a href="#" className="btn btn-danger text-white btn-sm pl-3 pr-3">Delete</a>
                    </div>
                </div>
            </div>
        </div>
    </div>

    )
}

export default AddressBook
