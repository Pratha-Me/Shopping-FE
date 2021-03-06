import React, {useState} from 'react';
import '../../styles/css/Profile.css';
import PersonalInfo from './PersonalInfo';
import AddressBook from './AddressBook';
import Wishlist from './Wishlist';
import OrderHistory from './OrderHistory';
import {  Redirect } from 'react-router-dom';
import TopHeader from '../Header/TopHeader';
import NavbarMenu from '../Header/NavbarMenu';


function Profile() {

    const [activeTab, setActiveTab] = useState('personalInfo');
    
    const borderStyle = { borderBottom:"1px solid grey" };

    if(!localStorage.user) {
        return <Redirect to="/login" />
    }

    return (
        <>
        <TopHeader></TopHeader>
        <NavbarMenu></NavbarMenu>
        <div className="container">
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2" style={{margin:`0 !important`, padding:'0!important'}}>
                    <nav aria-label="breadcrumb"  className="profile-breadcrumb">
                        <ol className="breadcrumb bg-transparent">
                            <li className="breadcrumb-item"><a href="/">Home &nbsp;</a></li> 
                            <li className="breadcrumb-item active" aria-current="page">My Account</li> 
                            
                        </ol>
                    </nav>  
                </div>
            </div>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
                    <div className="row text-uppercase profile-option" >
                         <a href="#personalInfo" onClick={()=>setActiveTab('personalInfo')}>
                                Personal information
                            </a>
                            <a href="#addressBook" onClick={()=>setActiveTab('addressBook')}>
                                Address Book
                            </a>
                            <a href="#wishlist"   onClick={()=>setActiveTab('wishlist')}>
                                Wishlist                            
                            </a>
                            <a href="#orderHistory"  onClick={()=>setActiveTab('orderHistory')} >
                                Order History
                            </a>
                       
                    </div>
                </div>
                <div className="col-xs-12 col-sm-12 col-md-12 col-xl-12">
                    {activeTab === 'personalInfo' && <PersonalInfo />}
                    {activeTab === 'addressBook' && <AddressBook />}
                    {activeTab === 'wishlist' && <Wishlist />}
                    {activeTab === 'orderHistory' && <OrderHistory />}
                </div>
            </div>
    </div>
    </>
    )
}

export default Profile;
