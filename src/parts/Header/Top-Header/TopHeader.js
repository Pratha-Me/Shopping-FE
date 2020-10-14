import React, { useState } from 'react';
import Cart from '../../../component/Cart/Cart';
import SearchBar from '../../../component/Search-Bar/SearchBar';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Button from 'react-bootstrap/Button'

function TopHeader() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  return (
    <>
      <div className="container py-3">
      <div className="row">
        <div className="col-7 ml-auto">
          <div className="row text-center">
            <div className="col-2 ">Sign up</div>
            <div className="col-4">Sell on Shopping.com</div>
            <div className="col-1">Login</div>
          </div>
        </div>
        </div>
        
        <div className="row my-3">
        <div className="col-2">
          <img src="/images/demo.png" alt="Logo" style={{ width:'100px'}}></img>
        </div>
        <div className="col-8">
          <SearchBar></SearchBar>
        </div>
        <div className="col-2">
          <Cart></Cart>
        </div>
        </div>
        </div>    
    </>
  );
}

export default TopHeader;
