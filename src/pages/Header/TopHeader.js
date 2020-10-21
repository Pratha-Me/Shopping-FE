import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../component/Cart/Cart';
import SearchBar from '../../component/Search-Bar/SearchBar';
import '../../styles/scss/TopHeader.scss'
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Button from 'react-bootstrap/Button'

function TopHeader() {
  // const [click, setClick] = useState(false);
  // const handleClick = () => setClick(!click);
  // const closeMobileMenu = () => setClick(false);
  const [isLoggedIn, setlogin] = useState(true);
  return (
    <>
      <div className="container fluid pt-4">
      <div className="row">
      {isLoggedIn ? <div className="col-8 ml-auto">
                      <div className="row text-center top-header">
                        <div className="col-2 "><Link to="/register">Register Now</Link></div>
                        <div className="col-3"><Link to="/seller"> Sell on Shopping.com</Link></div>
                        <div className="col-2"><Link to="/"> <i className="fas fa-user-alt mr-2"></i>
                        My Account</Link></div>
                        <div className="col-2">Welcome <span>John</span></div>
                        <div className="col-1 ml-5"><Link to="/seller"> Logout</Link></div>
                      </div>
                    </div>: <div className="col-6 ml-auto">
                      <div className="row text-center top-header">
                        <div className="col-2 "><Link to="/register">Register</Link></div>
                        <div className="col-4"><Link to="/seller"> Sell on Shopping.com</Link></div>
                        <div className="col-2"><Link to="/login"> Login</Link></div>
                      </div>
                    </div>  }
        </div>
        
        <div className="row my-3">
        <div className="col-2">
        <Link to="/"> 
        <img src="/images/demo.png" alt="Logo" style={{ width:'100px'}}></img>
        </Link>  
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
