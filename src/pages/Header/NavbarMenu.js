import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/NavbarMenu.css'
import '../../styles/css/Navbar.css';
import DATA from './NavbarData'

function NavbarMenu() {
  const [categoryData, setCategoryData] = useState(DATA);
  console.log('Category Data', categoryData)
  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm p-0'>
      <button type='button' data-toggle='collapse' data-target='#navbarContent' aria-controls='navbars' aria-expanded='false' aria-label='Toggle navigation' className='navbar-toggler'>
        <span className='navbar-toggler-icon'></span>
      </button>
      <div id='navbarContent' className='collapse navbar-collapse'>
        <ul className='navbar-nav mx-auto'>
          {categoryData.map((categoryItems) => {
            return (
              <li key={categoryItems.title} className='nav-item dropdown megamenu'>
                <Link to='/' id='megamneu' role='button' href='' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false' className='nav-link dropdown-toggle font-weight-bold text-uppercase'>
                  {categoryItems.title}
                </Link>
                <div aria-labelledby='megamneu' className='dropdown-menu'>
                  <div className='row rounded-0 m-0 shadow-sm w-100'>
                    <div className='col-lg-12'>
                      <div className='pt-4 pb-0'>
                        <div className='row'>
                          {categoryItems.items.map((subCategoryItems) => {
                            return (
                              <div key={subCategoryItems.title} className='col-lg-3 mb-4 text-center'>
                                <h6 className='font-weight-bold text-uppercase text-center dropdown-toggle' style={{ fontSize: '14px' }}>{subCategoryItems.title}</h6>
                                <ul className='list-unstyled'>
                                  {subCategoryItems.item.map((item) => {
                                    return (
                                      <li className='nav-item m-0 p-0'>
                                        <Link to='/' className='nav-link p-0'>
                                          {item.title}
                                        </Link>
                                      </li>
                                    )
                                  })}
                                </ul>
                              </div>
                            )
                          })}

                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarMenu;
