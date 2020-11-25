import React, { useEffect, useState } from 'react';
import '../../styles/css/SubCategory.css';
import ProductCard from '../../component/Product-Card/ProductCard';
import { getProducts } from '../../services/InventoryService';

function SubCategory(props) {
  const productHeight = '290px';
  const productWidth = '100%';
  const productImageHeight = '72%';
  const [inputValues, setInputValues] = useState({
    description: '',
    size: '',
    brand: '',
    color: '',
    sort: '',
  });
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState([]);

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  useEffect(() => {
    getProducts(`productId=${props.match.params.id}`)
      .then((response) => {
        setItems(() => response.data.itemList);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleSort = (ascending) => {
    setSort({
      sortValue: ascending ? items.sort((a, b) => parseFloat(a.unitPrice) - parseFloat(b.unitPrice)) : items.sort((a, b) => parseFloat(b.unitPrice) - parseFloat(a.unitPrice)),
    });
  };

  const priceFilterStyle = {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  };
  const priceInputStyle = {
    // width:"15rem",
    backgroundColor: '#f3f3f3',
  };
  return (
    <div className='container-fluid'>
      <div className='subcategory'>
        <div className='row'>
          <div className='d-none d-md-block col-md-12 col-xl-12 pl-4 pt-4 pb-2'>
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
        <div className="container-fluid">
        <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-3 text-center mt-3">
                    <div className="form-group">
                    <h3>Coats &amp; Blazers </h3>
                    <p className="mt-1 pl-1 text-secondary"> - 5 items</p>
                    </div>
                    </div>
                    <div className="col-xs-12 col-sm-12 col-md-2 offset-md-7">
                    <div class="dropdown text-center">
                    <button 
                    class="btn btn-primary btn-md dropdown-toggle" 
                    type="button" id="dropdownMenuButton" 
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    style={{width:'200px'}}
                    >
                        Sort By
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <button class="btn " onClick={() => handleSort(true)}>Low to High</button>
                        <div class="dropdown-divider"></div>
                        <button class="btn" onClick={() => handleSort(false)}>High to Low</button>
                    </div>
                    </div>
                </div>
            </div>
            </div>
        <div className="container-fluid">
        <div className='row'>
          <div className='col-md-3 col-xl-3 col-sm-12 col-xs-12'>
            <div className='my-4'>
              <div className='row d-flex justify-content-center'>
                <div className='col-md-12'>
                  <div className='card'>
                    <article className='filter-group'>
                      <header className='card-header'>
                        {' '}
                        <a href='#' data-toggle='collapse' data-target='#collapse_aside1' data-abc='true' aria-expanded='false' className='collapsed'>
                          {' '}
                          <i className='icon-control fa fa-chevron-down' />
                          <h6 className='title'>Description </h6>
                        </a>{' '}
                      </header>
                      <div className='card-body'>
                        <div className='form-group' style={priceFilterStyle}>
                          <input
                            name='description'
                            value={inputValues.description}
                            className='form-control price-filter-from'
                            placeholder='Search Keywords'
                            onChange={handleOnChange}
                            style={priceInputStyle}
                          />
                          <input type='submit' className='btn btn-primary ml-3' value='GO' />
                        </div>
                      </div>
                    </article>
                    <article className='filter-group'>
                      <header className='card-header'>
                        {' '}
                        <a href='#' data-toggle='collapse' data-target='#collapse_aside2' data-abc='true' aria-expanded='false' className='collapsed'>
                          {' '}
                          <i className='icon-control fa fa-chevron-down' />
                          <h6 className='title'>Price </h6>
                        </a>{' '}
                      </header>
                      <div className='card-body'>
                        {' '}
                        <input type='range' className='custom-range' min={0} max={100} name />
                        <div className='form-row'>
                          <div className='form-group col-md-6'>
                            {' '}
                            <label>Min</label> <input className='form-control' placeholder='$0' type='number' />{' '}
                          </div>
                          <div className='form-group text-right col-md-6'>
                            {' '}
                            <label>Max</label> <input className='form-control' placeholder='$1,0000' type='number' />{' '}
                          </div>
                        </div>{' '}
                        <a href='#' className='highlight-button btn btn-medium button xs-margin-bottom-five' data-abc='true'>
                          Apply Now
                        </a>
                      </div>
                    </article>
                    <article className='filter-group'>
                      <header className='card-header'>
                        {' '}
                        <a href='#' data-toggle='collapse' data-target='#collapse_aside3' data-abc='true' aria-expanded='false' className='collapsed'>
                          {' '}
                          <i className='icon-control fa fa-chevron-down' />
                          <h6 className='title'>Size </h6>
                        </a>{' '}
                      </header>
                      <div className='card-body'>
                        {' '}
                        <label className='checkbox-btn'>
                          {' '}
                          <input type='checkbox' /> <span className='btn btn-light'> XS </span>{' '}
                        </label>{' '}
                        <label className='checkbox-btn'>
                          {' '}
                          <input type='checkbox' /> <span className='btn btn-light'> SM </span>{' '}
                        </label>{' '}
                        <label className='checkbox-btn'>
                          {' '}
                          <input type='checkbox' /> <span className='btn btn-light'> LG </span>{' '}
                        </label>{' '}
                        <label className='checkbox-btn'>
                          {' '}
                          <input type='checkbox' /> <span className='btn btn-light'> XXL </span>{' '}
                        </label>{' '}
                        <label className='checkbox-btn'>
                          {' '}
                          <input type='checkbox' /> <span className='btn btn-light'> XXXL </span>{' '}
                        </label>{' '}
                      </div>
                    </article>
                    <article className='filter-group'>
                      <header className='card-header'>
                        {' '}
                        <a href='#' data-toggle='collapse' data-target='#collapse_aside3' data-abc='true' aria-expanded='false' className='collapsed'>
                          {' '}
                          <i className='icon-control fa fa-chevron-down' />
                          <h6 className='title'>Color </h6>
                        </a>{' '}
                      </header>
                      <div className='container c-color-swatch mt-2 mb-4'>
                        <input type='checkbox' name='colors[]' defaultValue='FF0000' id='color-FF0000' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-FF0000' style={{ background: '#FF0000' }} />
                        <input type='checkbox' name='colors[]' defaultValue='F9ED69' id='color-F9ED69' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-F9ED69' style={{ background: '#F9ED69' }} />
                        <input type='checkbox' name='colors[]' defaultValue='008000' id='color-008000' hidden defaultChecked />
                        <label className='c-color-swatch__item' htmlFor='color-008000' style={{ background: '#008000' }} />
                        <input type='checkbox' name='colors[]' defaultValue='FFC0CB' id='color-FFC0CB' hidden defaultChecked />
                        <label className='c-color-swatch__item' htmlFor='color-FFC0CB' style={{ background: '#FFC0CB' }} />
                        <input type='checkbox' name='colors[]' defaultValue='6A2C70' id='color-6A2C70' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-6A2C70' style={{ background: '#6A2C70' }} />
                        <input type='checkbox' name='colors[]' defaultValue='2B3964' id='color-2B3964' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-2B3964' style={{ background: '#2B3964' }} />
                        <input type='checkbox' name='colors[]' defaultValue='3482AA' id='color-3482AA' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-3482AA' style={{ background: '#3482AA' }} />
                        <input type='checkbox' name='colors[]' defaultValue='6DB3B5' id='color-6DB3B5' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-6DB3B5' style={{ background: '#6DB3B5' }} />
                        <input type='checkbox' name='colors[]' defaultValue='477D7F' id='color-477D7F' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-477D7F' style={{ background: '#477D7F' }} />
                        <input type='checkbox' name='colors[]' defaultValue='1F5357' id='color-1F5357' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-1F5357' style={{ background: '#1F5357' }} />
                        <input type='checkbox' name='colors[]' defaultValue='64BD97' id='color-64BD97' hidden />
                        <label className='c-color-swatch__item' htmlFor='color-64BD97' style={{ background: '#64BD97' }} />
                      </div>
                    </article>
                    <article className='filter-group'>
                      <header className='card-header'>
                        {' '}
                        <a href='#' data-toggle='collapse' data-target='#collapse_aside4' data-abc='true' className='collapsed' aria-expanded='false'>
                          {' '}
                          <i className='icon-control fa fa-chevron-down' />
                          <h6 className='title'>Brands</h6>
                        </a>{' '}
                      </header>
                      <div className='card-body'>
                        {' '}
                        <label className='custom-control'>
                          {' '}
                          <input type='checkbox' defaultChecked className='custom-control-input' />
                          <div className='custom-control-label'>Apple </div>
                        </label>{' '}
                        <label className='custom-control'>
                          {' '}
                          <input type='checkbox' className='custom-control-input' />
                          <div className='custom-control-label'>Samsung </div>
                        </label>{' '}
                        <label className='custom-control'>
                          {' '}
                          <input type='checkbox' className='custom-control-input' />
                          <div className='custom-control-label'>Xiaomi</div>
                        </label>{' '}
                        <label className='custom-control'>
                          {' '}
                          <input type='checkbox' className='custom-control-input' />
                          <div className='custom-control-label'>Hawai</div>
                        </label>{' '}
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='col-md-9 col-sm-12 col-xs-12'>
            <div className='row'>
              {items.map((item) => (
                <div className='col-lg-3 col-md-3 col-sm-6 col-xs-6'>
                  <ProductCard height={productHeight} width={productWidth} imgHeight={productImageHeight} product={item}>
                    {' '}
                  </ProductCard>
                </div>
              ))}
            </div>
            </div>
          <div className='col-xs-12 col-sm-12 col-md-12 col-xl-12'>
            <p className='font-weight-bold'>Shop Coats &amp; Blazers Online</p>
            <p>You’re in the right place for Coats &amp; Blazers. By now you already know that, wha...</p>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}

export default SubCategory;
