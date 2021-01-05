import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Cart from '../../component/Cart/Cart';
import SearchBar from '../../component/Search-Bar/SearchBar';
import '../../styles/scss/TopHeader.scss'
import { getAuthUser } from '../../helpers/AuthHelpers';
import { connect } from 'react-redux';
import { logoutUserSuccessful } from '../../redux/auth/login/actions';

// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Button from 'react-bootstrap/Button'

function TopHeader(props) {
  const [isLoggedIn, setlogin] = useState(false);
  const [user, setUsers] = useState([])
  const [whichPage, setWhichPage] = useState(false);
  
  useEffect(() => {
    if (getAuthUser()) {
      setlogin(true);
    } else {
      setlogin(false);
    }
    setUsers(
      JSON.parse(localStorage.getItem('user'))
    )
    let  currentURL = (window.location.href).split('/');
    if(currentURL[currentURL.length-1] === 'login' || currentURL[currentURL.length-1]==='register'  || currentURL[currentURL.length-1]==='seller-register' || currentURL[currentURL.length-1]==='verify-otp') {
      setWhichPage(true);
    }
  }, [])

  console.log("hamro user:", user)

  const handleLogout = (event) => {
    localStorage.removeItem('user');
    props.logoutUserSuccessful();
    setlogin(false);
  };

  return (
    <>
      <div className="header-top container pt-4">
      <div className="row">
      {isLoggedIn ? <div className="col-8 ml-auto">
                      <div className="row text-center top-header">
                        <div className="col-3"><Link to="/seller"> Sell on Shopping.com</Link></div>
                        <div className="col-2"><Link to="/user/profile"> <i className="fas fa-user-alt mr-2"></i>
                        My Account</Link></div>
                        <div className="col-2">Welcome <span>{user.name}</span></div>
                        <div className="col-1 ml-5"><Link to="/" onClick={handleLogout}> Logout</Link></div>
                      </div>
                    </div>
                    : 
                    <div className="col-6 ml-auto">
                      <div className="row text-center top-header">
                        {whichPage ? 
                            <div className="col-2 "><Link to="/">Home</Link></div>
                          : 
                          " "
                        }
                        <div className="col-3 "><Link to="/register">Register Now</Link></div>
                        <div className="col-4"><Link to="/seller-register"> Sell on Shopping.com</Link></div>
                        <div className="col-2"><Link to="/login"> Login</Link></div>
                      </div>
                    </div>  }
        </div>
        
        <div className="row my-3">
        <div className="col-2">
        <Link to="/"> 
        <img src="/images/demo.png" alt="Logo" style={{ width:'50px', height:'50px'}}></img>
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

export default connect(null, { logoutUserSuccessful })(TopHeader); ;
