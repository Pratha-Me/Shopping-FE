import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/Footer.css';

function Footer() {
  return (
    <footer className='footer'>
      <div className='container bottom_border'>
        <div className='row'>
          <div className=' col-sm-4 col-md col-sm-4  col-12 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Find us</h5>
            {/* <p className=''>
              <i className='fa fa-location-arrow'></i> Kupandol, Lalitpur, 44600, Bagmati, Nepal{' '}
            </p> */}
            <p>
              <i className='fa fa-phone'></i> +91-9999878398{' '}
            </p>
            <p>
              <i className='fa fa fa-envelope'></i> info@example.com{' '}
            </p>
          </div>

          <div className=' col-sm-4 col-md  col-6 col text-center'>
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
          </div>
          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Policies</h5>
            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/'>Return & Exchange</Link>
              </li>
              <li>
                <Link to='/'>Policy</Link>
              </li>
            </ul>
          </div>

          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Account</h5>
            <ul className='footer_ul_amrc'>
              <li>
                <Link to='/'>My Account</Link>
              </li>
              <li>
                <Link to='/'>Wishlist</Link>
              </li>
            </ul>
          </div>
          <div className=' col-sm-4 col-md  col-6 col text-center'>
            <h5 className='headin5_amrc col_white_amrc pt2'>Address</h5>
            <p className=''>
              <i className='fa fa-location-arrow'></i> Kupandol, Lalitpur, 44600, Bagmati, Nepal{' '}
            </p>
          </div>
        </div>
      </div>

      <div className='container'>
        <p className='text-center mt-3'>
          {/* Copyright @2020 | Powered By: <a href='#'>###Tech Company</Link> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolor quisquam, voluptatem vel error, cumque nulla fuga, provident ad id suscipit ut. Suscipit eligendi consequuntur sint, commodi, ex doloremque minus quis delectus atque corrupti inventore, numquam maiores corporis vel magni!
        </p>
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
      <div className="container-fluid bottom_border_top">
          <div className="row">
              <div className="col-sm-12 col-md-6">
                <p className='text-center pt-3'>
                    Copyright @2020 | All Rights Reserved
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <p className='text-center pt-3'>
                    Powered By: <Link to ='/'>###Tech Company</Link>
                </p>
              </div>
          </div>
      </div>
    </footer>
  );
}
export default Footer;
