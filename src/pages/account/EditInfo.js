import React from 'react';

function EditInfo() {
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 mt-5">
                <p style={{fontSize:`17px`, fontWeight:`500`}}>
                    EDIT INFO
                </p>
            </div>
            <div className="col-xs-6 col-sm-6 col-md-6 col-xl-6 text-right mt-5">
                <a 
                    href="#" 
                    className="btn btn-danger btn-sm mr-4 pr-3 pl-3 text-white" 
                    style={{fontSize:`16px`}}>
                        Change Password
                </a>
                <a 
                    href="#" 
                    className="btn btn-primary btn-sm pl-4 pr-4 text-white" 
                    style={{fontSize:`16px`}}>
                        Edit
                </a>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`,border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                    <div className="form-group ml-4 mt-4">
                        <label className="text-secondary" htmlFor="name">
                            NAME 
                        </label>
                        <span className="ml-4">John Doe</span>
                    </div>
                    <div className="form-group ml-4">    
                        <label className="text-secondary" htmlFor="name">
                            EMAIL 
                        </label>
                        <span className="ml-4">johndoe@gmail.com</span>
                    </div>

                    <div className="form-group ml-4">    
                        <label className="text-secondary" htmlFor="name">
                            CONTACT 
                        </label>
                        <span className="ml-4">+9779823564258</span>
                    </div>
                </div>
            </div>
        </div>
</div>

    )
}

export default EditInfo
