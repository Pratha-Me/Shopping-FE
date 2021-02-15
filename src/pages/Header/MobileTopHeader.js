import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Cart from "../../component/Cart/Cart";
import SearchBar from "../../component/Search-Bar/SearchBar";
import "../../styles/scss/TopHeader.scss";
import { getAuthUser } from "../../helpers/AuthHelpers";
import { connect } from "react-redux";
import { logoutUserSuccessful } from "../../redux/auth/login/actions";

// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Button from 'react-bootstrap/Button'

function MobileTopHeader(props) {
  const [isLoggedIn, setlogin] = useState(false);
  const [user, setUsers] = useState([]);

  useEffect(() => {
    if (getAuthUser()) {
      setlogin(true);
    } else {
      setlogin(false);
    }
    setUsers(JSON.parse(localStorage.getItem("user")));
  }, []);

  const handleLogout = (event) => {
    localStorage.removeItem("user");
    props.logoutUserSuccessful();
    setlogin(false);
  };

  return (
    <>
      <div className='header-top-mobile container pt-4'>
        <div className='row'>.col-</div>
      </div>
    </>
  );
}

export default connect(null, { logoutUserSuccessful })(MobileTopHeader);
