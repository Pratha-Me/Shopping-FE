import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { addItem, getCart, removeItem, updateItem, updateTotal } from '../../helpers/CartHelpers';
import NavbarMenu from '../../pages/Header/NavbarMenu';
import TopHeader from '../../pages/Header/TopHeader';
import '../../styles/css/CartDirectory.css';
import '../../styles/scss/CartDirectory.scss';
import ProductCard from '../Product-Card/ProductCard';


const CartDirectory = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getCart());
  }, []);

  const getSingleTotal = (item) => {
    const total = item ? item.count * item.unitPrice : '';
    return total;
  };
  items.map((item) => {
    updateTotal(item.id, getSingleTotal(item));
  });

  const getTotal = () => {
    return items.reduce((currentValue, nextValue) => {
      return currentValue + nextValue.count * nextValue.unitPrice;
    }, 0);
  };

  const showItems = (items) => {
    return (
      <div className='container'>
        <div className='row'>
          <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12 pl-4 pt-4 pb-2'>
            <nav aria-label='breadcrumb' className='subCat-breadcrumb'>
              <ol className='breadcrumb bg-transparent pl-0'>
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
        <h1>CART SUMMARY</h1>
        <table className='table table-xs'>
          <tbody>
            <tr>
              <th></th>
              <th className='text-left'>Description</th>
              <th className='text-left'>Amt</th>
              <th className='text-right'>Remove</th>
              <th className='text-right'>Price</th>
              <th className='text-right'>Total</th>
            </tr>
            {items.map((product, i) => (
              <tr className='item-row'>
                <td style={{ width: '100px', height: '100px' }}>
                  <ProductCard product={product} showButtons={false} showFooter={false} cartUpdate={true} showRemove={true}></ProductCard>
                </td>
                <td>
                  <p className="mt-3">
                    {' '}
                    <strong>{product.title}</strong>
                  </p>
                </td>
                <td className='text-right mt-3' title='Qty'>
                </td>
                <td className='text-right mt-3' title='Remove'>
                  <i onClick = { () => { removeItem(product.id) && window.location.reload()}}  className="fas fa-trash-alt" style={{cursor:'pointer'}}></i>
                </td>
                <td className='text-right mt-3' title='Price'>
                  {product.unitPrice}
                </td>
                <td className='text-right mt-3' title='Total'>
                  {getSingleTotal(product)}
                </td>
              </tr>
            ))}
            <tr className='total-row info'>
              <td className='text-right' colSpan='5'>
                Total
              </td>
              <td className='text-right'>{getTotal()}</td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  };

  const noItemsMessage = () => (
      <div>
    <h2 className='p-4'>
      Your cart is empty. <br /> <Link to='/'></Link>
    </h2>
        <Link to='/'>
        {' '}
        <button type='button' class='btn btn-info m-4'>
            Continue Shopping
        </button>{' '}
        </Link>
        </div>
  );

  return (
    <>
      <TopHeader />
      <NavbarMenu />
      <div className='container'>
        <div className='row'>
          {items.length > 0 ? showItems(items) : noItemsMessage()}
          <div className='col-md-8 col-sm-0'></div>
          <div className='col-md-4 col-sm-12 text-right'>
            {items.length > 0 ? (
                <div>
                <Link to='/'>
                {' '}
                <button type='button' class='btn btn-info m-4'>
                    Continue Shopping
                </button>{' '}
                </Link>
              <button type='button' class='btn btn-success m-2'>
                Place Order
              </button>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartDirectory;
