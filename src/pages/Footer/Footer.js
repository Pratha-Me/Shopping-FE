import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../styles/css/Footer.css";

function Footer() {
  return (
    <footer className='footer'>
      <div className='container bottom_border'>
        <div className='row'>
          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>About Us</h5>
            <p className='text-center mt-3'>
              {/* Copyright @2020 | Powered By: <a href='#'>###Tech Company</Link> */}
              Supply Inn is a wholesale supplier for Restaurants and Hotels as
              well as for small retailer shops.
            </p>
          </div>
          <div className=' col-sm-4 col-md col-sm-4  col-12 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>
            {/* <p className=''>
              <i className='fa fa-location-arrow'></i> Kupandol, Lalitpur, 44600, Bagmati, Nepal{' '}
            </p> */}
            <p>
              <i className='fa fa-phone'></i> +977-9844210950{" "}
            </p>
            <p>
              <i className='fa fa fa-envelope'></i> supplyinnp@gmail.com{" "}
            </p>
          </div>

          {/* <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Information</h5>
            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/'>About Us</Link>
              </li>
              <li>
                <Link to='/'>Contact Us</Link>
              </li>
              <li>
                <Link to='/'>FAQ</Link>
              </li>
            </ul>
          </div> */}
          {/* <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Policies</h5>
            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/'>Return & Exchange</Link>
              </li>
              <li>
                <Link to='/'>Policy</Link>
              </li>
            </ul>
          </div> */}

          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Account</h5>
            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/user/profile'>My Account</Link>
              </li>
              <li>
                <Link to='/user/profile#wishlist'>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Address</h5>
            <p className=''>
              <i className='fa fa-location-arrow'></i> Ratnanagar 6, Bachhauli,
              Chitwan Tandi, Nepal{" "}
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        {/* <p className='text-center mt-3'>
          Supply Inn is a wholesale supplier for Restaurants and Hotels as well
          as for small retailer shops.
        </p> */}
        <ul className='social_footer_ul'>
          <li>
            <Link to='/'>
              <i className='fab fa-facebook-f'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fab fa-twitter'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fab fa-linkedin'></i>
            </Link>
          </li>
          <li>
            <Link to='/'>
              <i className='fab fa-instagram'></i>
            </Link>
          </li>
        </ul>
      </div>
      <div className='container-fluid bottom_border_top'>
        <div className='row'>
          <div className='col-sm-12 col-md-6'>
            <p className='text-center pt-3'>
              Copyright @2021 Supply Inn Pvt. Ltd. | All Rights Reserved
            </p>
          </div>
          <div className='col-sm-12 col-md-6'>
            <p className='text-center pt-3'>
              Powered By: <Link to='/'>###Tech Company</Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
export default Footer;
