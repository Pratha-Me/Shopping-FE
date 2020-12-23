import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { getAnUser, updateAddress } from "../../services/AuthService";
import { useForm } from "react-hook-form";
import { withRouter, Redirect } from 'react-router-dom';



function AddressBook(props) {
    const [editAddress, setEditAddress ] = useState(false);
    const [userData, setUserData] = useState([]);
    const [address, setAddress] = useState({
        province:"",
        district: "",
        city:"",
        street:""
    });

    const {register, handleSubmit, errors} = useForm();
    
    useEffect(() => {
        getAnUser().then((response) => {
        setUserData(response.data);
        setAddress({
            province: (response.data).address.province,
            district: (response.data).address.district,
            city: (response.data).address.city,
            street: (response.data).address.street
        });
        
        }).catch(err => {
        console.log(err);
        });
    }, [address])

    if(!localStorage.user) {
        return <Redirect to="/login" />
    } 
    

    const handleInputChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setAddress((address) => ({
          ...address,
          [name]: value
        }));

        
      };
    
    
    const handleSubmitForm = async(formdata) => {
        const data = {
            "email": userData.email,
            "address": address
        }
        
        await updateAddress(data)
        .then(
            // setEditAddress(false)
            window.location.reload()
            )
        .catch((result)=> {
            console.log(result);
        })


 



    }
      
    return (
        <div className="container">
        <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-2">
                <div className="form-group  mt-4">
                        <label className="text-secondary" >
                            EMAIL
                        </label>
                        <span className="ml-4">{userData.email}</span>
                    </div>
                    <div className="form-group">    
                        <label className="text-secondary" >
                            CONTACT
                        </label>
                        <span className="ml-4">{userData.phone}</span>
                    </div>
                </div>

            {!editAddress  &&
            <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3">
                <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>
                    <div className="form-group ml-4 mt-4">
                        <label className="text-secondary" >
                            NAME 
                        </label>
                        <span className="ml-4">{userData.name}</span>
                    </div>
                    <div className="form-group ml-4">    
                        <label className="text-secondary">
                            CONTACT 
                        </label>
                        <span className="ml-4">{userData.phone}</span>
                    </div>

                    <div className="form-group ml-4">    
                        <label className="text-secondary" >
                            ADDRESS 
                        </label>
                        <span className="ml-4">
                            {userData.address && userData.address.street}, { userData.address && userData.address.city}, {userData.address && userData.address.district}, {userData.address && userData.address.province}
                        </span>
                    </div>

                    <div className="form-group ml-4 text-right">   
                        <a 
                            href="#" 
                            onClick={()=>setEditAddress(true)}
                            className="btn btn-primary text-white btn-sm pl-4 pr-4">
                                Edit
                        </a>
                        
                    </div>
                </div>
            </div>
            }


            { editAddress &&
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pt-3"  >
                 <div style={{backgroundColor:`#fcfcfc`,padding:`17px`, border:`1px solid #888`, borderRadius:`2px`,fontSize:`16px`, marginBottom:`25vh`}}>        
                    <form method="POST" className="ml-5" onSubmit={handleSubmit(handleSubmitForm)}>
                        <h5 className="mb-4 mt-3">Update Address</h5>
                        
                        <div className="form-group ml-4 " style={{"width":"50%"}}>
                            <label htmlFor="province">
                                Province
                            </label>
                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                name="province" 
                                // value={address.province}
                                onChange={handleInputChange} 
                                id="province" 
                                tabIndex="1" 
                                ref= {register({
                                    required:true,
                                    pattern:/^[A-Za-z0-9]+$/i,
                                    minLength:6,
                                    maxLength:25
                                })}/>

                                {errors.province && errors.province.type === "required" && (
                                    <p className="text-danger"> * Province is required.</p>
                                )}
                                {errors.province && errors.province.type === "pattern" && (
                                    <p className="text-danger"> * Province Name is not valid.</p>
                                )}
                                 {errors.province && errors.province.type === "minLength" && (
                                    <p className="text-danger"> * Province Name must have at least 5 characters.</p>
                                )}
                                {errors.province && errors.province.type === "maxLength" && (
                                    <p className="text-danger"> * Province Name cannot have more than 25 characters.</p>
                                )}
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="district">
                                District
                            </label>
                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                // value={address.district}
                                onChange={handleInputChange} 
                                name="district" 
                                id="district" 
                                tabIndex="2" 
                                ref= {register({
                                    required:true,
                                    pattern:/^[A-Za-z]+$/i,
                                    minLength:4,
                                    maxLength:25
                                })}
                                
                                />

                                {errors.district && errors.district.type === "required" && (
                                    <p className="text-danger"> * District is required.</p>
                                )}
                                {errors.district && errors.district.type === "pattern" && (
                                    <p className="text-danger"> * District Name is not valid.</p>
                                )}
                                 {errors.district && errors.district.type === "minLength" && (
                                    <p className="text-danger"> * District Name must have atleast 4 characters.</p>
                                )}
                                {errors.district && errors.district.type === "maxLength" && (
                                    <p className="text-danger"> * District Name cannot have more than 25 characters.</p>
                                )}
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="city">
                                City
                            </label>
                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                // value={address.city}
                                onChange={handleInputChange} 
                                name="city" 
                                id="city" 
                                tabIndex="3" 
                                ref= {register({
                                    required:true,
                                    pattern:/^[A-Za-z]+$/i,
                                    minLength:4,
                                    maxLength:25
                                })}
                                />

                                {errors.city && errors.city.type === "required" && (
                                    <p className="text-danger"> * City is required.</p>
                                )}
                                {errors.city && errors.city.type === "pattern" && (
                                    <p className="text-danger"> * City Name is not valid.</p>
                                )}
                                 {errors.city && errors.city.type === "minLength" && (
                                    <p className="text-danger"> * City Name must have atleast 4 characters.</p>
                                )}
                                {errors.city && errors.city.type === "maxLength" && (
                                    <p className="text-danger"> * City Name cannot have more than 25 characters.</p>
                                )}
                        </div>
                        <div className="form-group ml-4" style={{"width":"50%"}}>
                            <label htmlFor="street">
                                Street
                            </label>
                            <input 
                                type="text" 
                                className="form-control mb-3" 
                                // value={address.street}
                                onChange={handleInputChange} 
                                name="street" 
                                id="street" 
                                tabIndex="4" 
                                ref= {register({
                                    required:true,
                                    pattern:/^[A-Za-z0-9]+$/i,
                                    minLength:4,
                                    maxLength:25
                                })}
                                />

                                {errors.street && errors.street.type === "required" && (
                                    <p className="text-danger"> * Street Address is required.</p>
                                )}
                                {errors.street && errors.street.type === "pattern" && (
                                    <p className="text-danger"> * Street Address is not valid.</p>
                                )}
                                 {errors.street && errors.street.type === "minLength" && (
                                    <p className="text-danger"> * Street Address must have atleast 4 characters.</p>
                                )}
                                {errors.street && errors.street.type === "maxLength" && (
                                    <p className="text-danger"> * Street Address cannot have more than 25 characters.</p>
                                )}
                        </div>
                       
                        <div className="form-group ml-4 text-center" style={{"width":"50%"}}>
                            <input type="submit" className="btn btn-primary btn-sm mb-4 mt-3 mr-4" value="Update Address"/>
                            <a className="btn btn-danger btn-sm mb-4 mt-3 text-white " onClick={()=>setEditAddress(false)} > Cancel </a>
                        </div>

                    </form>
                    </div>
                </div>
       
                }   
               

        </div>
    </div>

    )
}

const mapStateToProps = state => ({
    items: state.Login
  });

// export default connect(mapStateToProps)(AddressBook);
export default withRouter(connect(mapStateToProps)(AddressBook));