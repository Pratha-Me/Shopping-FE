import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../../component/Cart/Cart";
import SearchBar from "../../component/Search-Bar/SearchBar";
import "../../styles/scss/TopHeader.scss";
import { getAuthUser } from "../../helpers/AuthHelpers";
import { connect } from "react-redux";
import { logoutUserSuccessful } from "../../redux/auth/login/actions";
import { getUserCart } from "../../services/InventoryService";

// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Button from 'react-bootstrap/Button'

function TopHeader(props) {
  const [isLoggedIn, setlogin] = useState(false);
  const [user, setUsers] = useState([]);
  const [whichPage, setWhichPage] = useState(false);

  useEffect(() => {
    if (getAuthUser()) {
      setlogin(true);
    } else {
      setlogin(false);
    }
    setUsers(JSON.parse(localStorage.getItem("user")));
    let currentURL = window.location.href.split("/");
    if (
      currentURL[currentURL.length - 1] === "login" ||
      currentURL[currentURL.length - 1] === "register" ||
      currentURL[currentURL.length - 1] === "seller-register" ||
      currentURL[currentURL.length - 1] === "verify-otp"
    ) {
      setWhichPage(true);
    }
  }, []);

  const handleLogout = (event) => {
    localStorage.removeItem("user");
    props.logoutUserSuccessful();
    setlogin(false);
  };

  return (
    <>
      <div className='header-top container pt-4'>
        <div className='row'>
          {isLoggedIn ? (
            <div className='col-12 ml-auto'>
              <div className='row text-center top-header'>
                <a
                  target='_blank'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSeQ_C9EN0WVRVvxuQmBVlt0iHyclNuAnBpLEl8AwS7va9o1vg/viewform?usp=sf_link'
                >
                  {" "}
                  Sell on Shopping.com |
                </a>
                <Link to='/user/profile'>
                  {" "}
                  <i className='fas fa-user-alt mr-2'></i> My Account |
                </Link>
                <span className='user-Name' style={{ cursor: "text" }}>
                  Welcome <span>{user.name}</span> |
                </span>
                <Link to='/' onClick={handleLogout}>
                  {" "}
                  Logout <i className='fas fa-sign-out-alt'></i>
                </Link>
              </div>
            </div>
          ) : (
            <div className='col-12 ml-auto'>
              <div className='row text-center top-header'>
                {/* <Link to='/seller-register'> Sell on Shopping.com | </Link> */}
                <a
                  target='_blank'
                  href='https://docs.google.com/forms/d/e/1FAIpQLSeQ_C9EN0WVRVvxuQmBVlt0iHyclNuAnBpLEl8AwS7va9o1vg/viewform?usp=sf_link'
                >
                  {" "}
                  Sell on Shopping.com |
                </a>
                <Link to='/register'>
                  <i className='fas fa-user-plus'></i> Register Now |
                </Link>
                <Link to='/login'>
                  {" "}
                  Login <i className='fas fa-sign-in-alt'></i>
                </Link>
              </div>
            </div>
          )}
        </div>
        <div className='row my-3'>
          <div className='col-2'>
            <Link to='/'>
              <img
                src='/images/demo.png'
                alt='Logo'
                style={{ width: "50px", height: "50px" }}
              ></img>
            </Link>
          </div>
          <div className='col-8'>
            <SearchBar></SearchBar>
          </div>
          <div className='col-2'>
            <Cart></Cart>
          </div>
        </div>
      </div>
      <div className='mobile-top-header container'>
        <div className='row pt-3'>
          <div className='col-4 d-flex justify-content-start p-0'>
            <Link to='/'>
              <img
                src='/images/demo.png'
                alt='Logo'
                style={{ width: "50px", height: "50px" }}
              ></img>
            </Link>
          </div>
          <div className='col-8 p-0'>
            <div className='dropdown m-2'>
              <button
                className='btn d-block ml-auto'
                type='button'
                id='dropdownMenu2'
                data-toggle='dropdown'
                aria-haspopup='true'
                aria-expanded='false'
                style={{ background: "#23395d" }}
              >
                <i className='far fa-user' style={{ color: "#fff" }}></i>
              </button>
              <div
                className='dropdown-menu top-header-dropdown-menu'
                aria-labelledby='dropdownMenu2'
                style={{ zIndex: "1000000" }}
              >
                {isLoggedIn && isLoggedIn ? (
                  <>
                    <span
                      className='user-Name'
                      style={{ cursor: "text", display: "block" }}
                    >
                      <i className='fas fa-smile-wink'></i> Welcome{" "}
                      <span>{user.name}</span>
                    </span>
                    <div className='dropdown-divider'></div>
                    <Link style={{ padding: "6px 12px" }} to='/user/profile'>
                      {" "}
                      <i className='fas fa-user-circle'></i> My Account
                    </Link>
                    <div className='dropdown-divider'></div>
                    <a
                      target='_blank'
                      style={{ padding: "6px 12px" }}
                      to='https://docs.google.com/forms/d/e/1FAIpQLSeQ_C9EN0WVRVvxuQmBVlt0iHyclNuAnBpLEl8AwS7va9o1vg/viewform?usp=sf_link'
                    >
                      {" "}
                      <i className='fas fa-check-double'></i> Sell on
                      Shopping.com
                    </a>
                    <div className='dropdown-divider'></div>
                    <Link
                      style={{ padding: "6px 12px" }}
                      to='/'
                      onClick={handleLogout}
                    >
                      {" "}
                      <i className='fas fa-sign-out-alt'></i> Logout
                    </Link>
                  </>
                ) : (
                  <>
                    <Link style={{ padding: "6px 12px" }} to='/register'>
                      {" "}
                      <i className='fas fa-user-plus'></i> Register Now{" "}
                    </Link>
                    <div className='dropdown-divider'></div>

                    <Link style={{ padding: "6px 12px" }} to='/login'>
                      {" "}
                      <i className='fas fa-sign-in-alt'></i> Login
                    </Link>
                    <div className='dropdown-divider'></div>
                    {/* <Link style={{ padding: "6px 12px" }} to='/seller-register'>
                      {" "}
                      <i className='fas fa-check-double'></i> Sell on
                      Shopping.com
                    </Link> */}
                    <a
                      target='_blank'
                      style={{ padding: "6px 12px" }}
                      to='https://docs.google.com/forms/d/e/1FAIpQLSeQ_C9EN0WVRVvxuQmBVlt0iHyclNuAnBpLEl8AwS7va9o1vg/viewform?usp=sf_link'
                    >
                      {" "}
                      <i className='fas fa-check-double'></i> Sell on
                      Shopping.com
                    </a>
                    <div className='dropdown-divider'></div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <hr className='mb-0' style={{ border: "3px solid #23395d" }} />
    </>
  );
}

export default connect(null, { logoutUserSuccessful })(TopHeader);
