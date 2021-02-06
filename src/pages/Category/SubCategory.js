import React from 'react';
import '../../styles/css/SubCategory.css';
import ProductCard from '../../component/Product-Card/ProductCard';

function SubCategory() {
  const priceFilterStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const priceInputStyle = {
    width: '5rem',
    backgroundColor: '#f3f3f3',
  };
  return (
    <div className='subcategory'>
      <div className='row'>
        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2'>
          <nav aria-label='breadcrumb' className='subCat-breadcrumb'>
            <ol className='breadcrumb bg-transparent'>
              <li className='breadcrumb-item'>
                <a href='#'>Home</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>Men's &nbsp;</a>
              </li>
              <li className='breadcrumb-item'>
                <a href='#'>Men's Shopping&nbsp;</a>
              </li>
              <li className='breadcrumb-item active' aria-current='page'>
                T-Shirts
              </li>
            </ol>
          </nav>
        </div>
      </div>
      <div className='row' style={{ position: 'relative' }}>
        <div className='col-md-3 col-xl-3 col-sm-12 col-xs-12'>
          <div className='row pb-3 ' style={{ borderBottom: '1px solid lightgrey' }}>
            <form method='POST' className='col-md-12 col-xl-12 col-sm-12 col-xs-12 mt-3'>
              <p className='mb-2' style={{ fontWeight: '500', margin: '0', padding: '0' }}>
                PRICE
              </p>
              <div className='form-group' style={priceFilterStyle}>
                <input type='number' className='form-control price-filter-from' placeholder='From' style={priceInputStyle} />
                <span>-</span>
                <input type='number' className='form-control price-filter-to' id='To' placeholder='To' style={priceInputStyle} />
                <input type='submit' className='btn btn-primary' value='GO' />
              </div>
            </form>
          </div>
          <div className='row mt-3 pb-3' style={{ borderBottom: '1px solid lightgrey' }}>
            <form method='POST' className='col-md-12 col-xl-12 col-sm-12 col-xs-12'>
              <p style={{ fontWeight: '500', margin: '0', padding: '0' }}>ROMAN SIZE</p>
              <div className='form-group' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                <label htmlFor='size' className='mt-2 pl-2'>
                  XL
                </label>{' '}
                &nbsp;
                <input type='checkbox' name='size' id='size' style={{ width: '18px', height: '18px' }} />
              </div>
            </form>
          </div>

          <div className='row mt-3 pb-3' style={{ borderBottom: '1px solid lightgrey' }}>
            <form method='POST' className='col-md-12 col-xl-12 col-sm-12 col-xs-12'>
              <p style={{ fontWeight: '500', margin: '0', padding: '0' }}>BRAND</p>
              <div className='form-group' style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row-reverse' }}>
                <label htmlFor='brand' className='mt-2 pl-2'>
                  Melange Store
                </label>{' '}
                &nbsp;
                <input type='checkbox' name='brand' id='brand' style={{ width: '18px', height: '18px' }} />
              </div>
            </form>
          </div>
          <div className='row mb-4 mt-3 pb-3' style={{ borderBottom: '1px solid lightgrey' }}>
            <form method='POST' className='col-xs-12 col-sm-12 col-md-12 col-xl-12'>
              <p style={{ fontWeight: '500', margin: '0', padding: '0' }}>COLOR</p>
              <input type='color' style={{ border: 'none', outline: 'none' }} />
            </form>
          </div>
        </div>
        <div className='col-md-9 col-xl-9 col-sm-12 col-xs-12'>
          <div className='row'>
            <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 mt-3' style={{ display: 'flex', justifyContent: 'space-between' }}>
              <div className='form-group d-flex'>
                <h4>Coats &amp; Blazers </h4>
                <p className='mt-1 pl-1 text-secondary'> - 5 items</p>
              </div>
              <div className='form-group'>
                <label htmlFor='sortby'>Sort By: </label> &nbsp;
                <select name='sortby' id='sortby' style={{ padding: '3px 7px' }}>
                  <option value='priceAsc'>Price Low to High</option>
                  <option value='priceDsc'>Price High to Low</option>
                  <option value='nameAsc'>Name Ascending Order</option>
                  <option value='nameDsc'>Name Descending Order</option>
                </select>
              </div>
            </div>
          </div>

          <div className='row'>
            <div className='col-md-3 col-xl-3 col-sm-6 col-xs-12'>
              <ProductCard> </ProductCard>
            </div>
          </div>
        </div>
        <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12'>
          <p className='font-weight-bold'>Shop Coats &amp; Blazers Online</p>
          <p>You’re in the right place for Coats &amp; Blazers. By now you already know that, wha...</p>
          <a href='#'>Read More</a>
        </div>
      </div>

      <div className='row'></div>
    </div>
  );
}

export default SubCategory;
