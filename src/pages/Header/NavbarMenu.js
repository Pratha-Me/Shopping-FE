import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/NavbarMenu.css';
import { getCatAndSubCat } from '../../services/InventoryService';
import Cart from '../../component/Cart/Cart';

function NavbarMenu() {
  // const [categoryData, setCategoryData] = useState(DATA);
  const [categoryData, setCategoryData] = useState(null);
  const [routeList, setRouteList] = useState([]);

  useEffect(() => {
    getCatAndSubCat()
      .then((response) => {
        setCategoryData(response.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <nav className='navbar navbar-expand-lg navbar-light bg-white shadow-sm p-0'>
      <button
        style={{ border: 'none', color: '#fff' }}
        type='button'
        data-toggle='collapse'
        data-target='#navbarContent'
        aria-controls='navbars'
        aria-expanded='false'
        aria-label='Toggle navigation'
        className='navbar-toggler'
      >
        {/* <span className='navbar-toggler-icon' style={{ color: 'white' }}></span> */}
        <i className='fas fa-bars' style={{ color: 'white' }}></i>
      </button>
      <button style={{ border: 'none' }} type='button' data-toggle='collapse' aria-controls='navbars' aria-expanded='false' aria-label='Toggle navigation' className='navbar-toggler'>
        <Cart></Cart>
      </button>

      <div id='navbarContent' className='collapse navbar-collapse'>
        <ul className='navbar-nav mx-auto'>
          {categoryData &&
            categoryData.map((categoryItems, idx) => {
              return (
                <>
                  <li key={idx} className='nav-item dropdown megamenu'>
                    <Link
                      to='/'
                      id='megamneu'
                      role='button'
                      href=''
                      data-toggle='dropdown'
                      aria-haspopup='true'
                      aria-expanded='false'
                      className='nav-link dropdown-toggle font-weight-bold text-uppercase'
                      style={{ fontSize: '18px' }}
                    >
                      <i className='fas fa-arrow-right text-light navbar-menu-icon-right'></i> {categoryItems.categoryName}
                    </Link>
                    <hr className='navbar-hr' style={{ border: 'solid 1px white', margin: '0' }} />
                    <div aria-labelledby='megamneu' className='dropdown-menu'>
                      <div className='row rounded-0 m-0 w-100'>
                        <div className='col-lg-12'>
                          {/* <div className='pt-4 pb-0'> */}
                          <div className='row'>
                            {categoryItems.subCategoryList.map((subCategoryItems, indx) => {
                              return (
                                <div key={indx} className='col-lg-3 mb-4'>
                                  <h6 className='font-weight-bolder text-uppercase dropdown-toggle' style={{ fontSize: '14px' }}>
                                    <i className='fas fa-arrow-right text-light navbar-menu-icon-right'></i> {subCategoryItems.subCategoryName}
                                  </h6>
                                  <hr className='navbar-hr' style={{ border: 'solid 1px white' }} />
                                  <ul className='list-unstyled ml-4'>
                                    {subCategoryItems.products.map((item, index) => {
                                      return (
                                        <li key={index} className='nav-item  m-0  p-0'>
                                          <Link to={`/browser/${item.productName}/${item.id}`} className='nav-link main-item p-0'>
                                            <i className='fas fa-arrow-right text-light navbar-menu-icon-right'></i> {item.productName}
                                            <hr className='navbar-hr my-1' style={{ border: 'solid 1px white' }} />
                                          </Link>
                                        </li>
                                      );
                                    })}
                                  </ul>
                                </div>
                              );
                            })}
                          </div>
                          {/* </div> */}
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
        </ul>
      </div>
    </nav>
  );
}

export default NavbarMenu;
