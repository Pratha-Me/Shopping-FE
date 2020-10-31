import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/Footer.css';

function Footer() {
  return (
    <footer class='footer'>
      <div class='container bottom_border'>
        <div class='row'>
          <div class=' col-sm-4 col-md col-sm-4  col-12 col text-center'>
            <h5 class='headin5_amrc col_white_amrc pt2'>Find us</h5>
            {/* <p className=''>
              <i class='fa fa-location-arrow'></i> Kupandol, Lalitpur, 44600, Bagmati, Nepal{' '}
            </p> */}
            <p>
              <i class='fa fa-phone'></i> +91-9999878398{' '}
            </p>
            <p>
              <i class='fa fa fa-envelope'></i> info@example.com{' '}
            </p>
          </div>

          <div class=' col-sm-4 col-md  col-6 col text-center'>
            <h5 class='headin5_amrc col_white_amrc pt2'>Information</h5>
            <ul class='footer_ul_amrc'>
              <li>
                <a href='http://webenlance.com'>About Us</a>
              </li>
              <li>
                <a href='http://webenlance.com'>Contact Us</a>
              </li>
              <li>
                <a href='http://webenlance.com'>FAQ</a>
              </li>
            </ul>
          </div>
          <div class=' col-sm-4 col-md  col-6 col text-center'>
            <h5 class='headin5_amrc col_white_amrc pt2'>Policies</h5>
            <ul class='footer_ul_amrc'>
              <li>
                <a href='http://webenlance.com'>Return & Exchange</a>
              </li>
              <li>
                <a href='http://webenlance.com'>Policy</a>
              </li>
            </ul>
          </div>

          <div class=' col-sm-4 col-md  col-6 col text-center'>
            <h5 class='headin5_amrc col_white_amrc pt2'>Account</h5>
            <ul class='footer_ul_amrc'>
              <li>
                <a href='http://webenlance.com'>My Account</a>
              </li>
              <li>
                <a href='http://webenlance.com'>Wishlist</a>
              </li>
            </ul>
          </div>
          <div class=' col-sm-4 col-md  col-6 col text-center'>
            <h5 class='headin5_amrc col_white_amrc pt2'>Address</h5>
            <p className=''>
              <i class='fa fa-location-arrow'></i> Kupandol, Lalitpur, 44600, Bagmati, Nepal{' '}
            </p>
          </div>
        </div>
      </div>

      <div class='container'>
        <p class='text-center mt-3'>
          {/* Copyright @2020 | Powered By: <a href='#'>###Tech Company</a> */}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus dolor quisquam, voluptatem vel error, cumque nulla fuga, provident ad id suscipit ut. Suscipit eligendi consequuntur sint, commodi, ex doloremque minus quis delectus atque corrupti inventore, numquam maiores corporis vel magni!
        </p>
        <ul class='social_footer_ul'>
          <li>
            <a href='http://webenlance.com'>
              <i class='fab fa-facebook-f'></i>
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i class='fab fa-twitter'></i>
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i class='fab fa-linkedin'></i>
            </a>
          </li>
          <li>
            <a href='http://webenlance.com'>
              <i class='fab fa-instagram'></i>
            </a>
          </li>
        </ul>
      </div>
      <div className="container-fluid bottom_border_top">
          <div className="row">
              <div className="col-sm-12 col-md-6">
                <p class='text-center pt-3'>
                    Copyright @2020 | All Rights Reserved
                </p>
              </div>
              <div className="col-sm-12 col-md-6">
                <p class='text-center pt-3'>
                    Powered By: <a href='#'>###Tech Company</a>
                </p>
              </div>
          </div>
      </div>
    </footer>
  );
}
export default Footer;
