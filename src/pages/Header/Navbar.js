import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/css/Navbar.css';

function Navbar() {
  return (
    <>
      <div className='fixed navbar navbar-light navbar-expand-md'>
        <div className='container'>
          <button type='button' className='navbar-toggler' data-toggle='collapse' data-target='.navbar-collapse'>
            ☰
          </button>
          <div className='navbar-collapse collapse'>
            <ul className='nav navbar-nav mx-auto'>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
              <li className='dropdown menu-large nav-item px-3'>
                {' '}
                <Link to='/' className='dropdown-toggle nav-link' data-toggle='dropdown'>
                  Categories{' '}
                </Link>
                <ul className='dropdown-menu megamenu'>
                  <div className='row'>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Glyphicons</li>
                        <li>
                          <Link to='/'>Available glyphs</Link>
                        </li>
                        <li className='disabled'>
                          <Link to='/'>How to use</Link>
                        </li>
                        <li>
                          <Link to='/'>Examples</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Dropdowns</li>
                        <li>
                          <Link to='/'>Example</Link>
                        </li>
                        <li>
                          <Link to='/'>Aligninment options</Link>
                        </li>
                        <li>
                          <Link to='/'>Headers</Link>
                        </li>
                        <li>
                          <Link to='/'>Disabled menu items</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Button groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Button toolbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Nesting</Link>
                        </li>
                        <li>
                          <Link to='/'>Vertical variation</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Button dropdowns</li>
                        <li>
                          <Link to='/'>Single button dropdowns</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Input groups</li>
                        <li>
                          <Link to='/'>Basic example</Link>
                        </li>
                        <li>
                          <Link to='/'>Sizing</Link>
                        </li>
                        <li>
                          <Link to='/'>Checkboxes and radio addons</Link>
                        </li>
                        <li className='divider'></li>
                        <li className='dropdown-header'>Navs</li>
                        <li>
                          <Link to='/'>Tabs</Link>
                        </li>
                        <li>
                          <Link to='/'>Pills</Link>
                        </li>
                        <li>
                          <Link to='/'>Justified</Link>
                        </li>
                      </ul>
                    </li>
                    <li className='col-md-3 dropdown-item'>
                      <ul>
                        <li className='dropdown-header'>Navbar</li>
                        <li>
                          <Link to='/'>Default navbar</Link>
                        </li>
                        <li>
                          <Link to='/'>Buttons</Link>
                        </li>
                        <li>
                          <Link to='/'>Text</Link>
                        </li>
                        <li>
                          <Link to='/'>Non-nav links</Link>
                        </li>
                        <li>
                          <Link to='/'>Component alignment</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to top</Link>
                        </li>
                        <li>
                          <Link to='/'>Fixed to bottom</Link>
                        </li>
                        <li>
                          <Link to='/'>Static top</Link>
                        </li>
                        <li>
                          <Link to='/'>Inverted navbar</Link>
                        </li>
                      </ul>
                    </li>
                  </div>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
export default Navbar;
