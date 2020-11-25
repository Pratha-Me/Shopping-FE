import React, { useEffect, useState } from 'react';
import '../../styles/css/SubCategory.css';
import ProductCard from '../../component/Product-Card/ProductCard';
import { getProducts } from '../../services/InventoryService';

function SubCategory(props) {
  const productHeight = '290px';
  const productWidth = '100%';
  const productImageHeight = '72%';
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState([]);

  const [desc, setDesc] = useState(null);
  const [qcolor, setQcolor] = useState(null);
  const [qsize, setQsize] = useState([]);
  const [qbrand, setQbrand] = useState(null);

  const handleOnFilter = () => {
    let queryParam = '';
    if (desc) queryParam += '&description=' + desc + '&';
    if (qcolor) queryParam += '&color=' + qcolor + '&';
    if (qsize.length > 0) queryParam += '&size=' + qsize.join(',') + '&';
    // if (qbrand) queryParam += '&brand=' + qbrand + '&';

    (async () => {
      const data = await getProducts(`productId=${props.match.params.id}${queryParam}`);
      setItems(data.data.itemList);
    })();
  };

  const handleOnChangeDescription = (event) => {
    if (event.target.value){
      setDesc(event.target.value);
    } else {
      setDesc(null);
    }
  };

  const handleOnChangeColor = (event) => {
    if (event.target.value) {
      setQcolor(event.target.value);
    } else{
      setQcolor(null);
    }
  };

  const handleOnClickSize = (event) => {
    if (qsize.includes(event.target.value)){
      setQsize(qsize.filter((item) => item != event.target.value));
    } else{
      setQsize([...qsize, event.target.value]);
    }
  };

  useEffect(() => {
    getProducts(`productId=${props.match.params.id}`)
      .then((response) => {
        const size = new Set();
        const color = new Set();
        // const brand = new Set();
        response.data.itemList.forEach((item) => {
          size.add(item.size);
          color.add(item.color);
        });

        setItems(() => response.data.itemList);
        setColor([...color]);
        setSize([...size]);
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
                  style={{ width: '200px' }}
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
                              className='form-control price-filter-from'
                              placeholder='Search Keywords'
                              onChange={handleOnChangeDescription}
                              style={priceInputStyle}
                            />
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
                          {size && size.map((item, idx) => {
                            return <span key={idx}>
                              <label className='checkbox-btn'>
                                <input type='checkbox' onClick={handleOnClickSize} value={item} /> <span className='btn btn-light'> {item} </span>{' '}
                              </label>
                            </span>
                          })}
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
                          <select name="color" label="color" onChange={handleOnChangeColor}>
                            <option selected value={""}> none</option>
                            {color && color.map((item, idx) => {
                              return <option value={item} key={idx}> {item} </option>
                            })}
                          </select>
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

                          <button className='highlight-button btn btn-medium button xs-margin-bottom-five' onClick={handleOnFilter} data-abc='true'>
                            Apply Filter
                        </button>
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
