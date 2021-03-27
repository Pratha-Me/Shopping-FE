import React, { useEffect, useState } from "react";
import "../../styles/css/SubCategory.css";
import ProductCard from "../../component/Product-Card/ProductCard";
import { getProducts } from "../../services/InventoryService";
import TopHeader from "../Header/TopHeader";
import NavbarMenu from "../Header/NavbarMenu";
import { Link } from "react-router-dom";
import { css } from "@emotion/core";
import RotateLoader from "react-spinners/RotateLoader";

// Can be a string as well. Need to ensure each key-value pair ends with ;
const override = css`
  display: block;
  margin: 10vh auto;
`;

function SubCategory(props) {
  const productHeight = "290px";
  const productWidth = "100%";
  const productImageHeight = "72%";
  const [loadingColor, setLoadingColor] = useState("#051774");
  const [loading, setLoading] = useState(true);
  const [color, setColor] = useState(null);
  const [size, setSize] = useState(null);
  const [brand, setBrand] = useState(null);
  const [items, setItems] = useState([]);
  const [sort, setSort] = useState([]);
  const [cat, setCat] = useState("");
  const [subcat, setSubCat] = useState("");

  const [desc, setDesc] = useState(null);
  const [qcolor, setQcolor] = useState(null);
  const [qsize, setQsize] = useState([]);
  const [qbrand, setQbrand] = useState([]);
  const [minPrice, setMinPrice] = useState(null);
  const [maxPrice, setMaxPrice] = useState(null);

  const handleOnFilter = () => {
    let queryParam = `productId=${props.match.params.id}`;
    if (desc) queryParam += "&description=" + desc + "&";
    if (qcolor) queryParam += "&color=" + qcolor + "&";
    // if (qbrand) queryParam += '&brand=' + qbrand + '&';
    if (qbrand.length > 0) queryParam += "&brand=" + qbrand.join(",") + "&";
    if (qsize.length > 0) queryParam += "&size=" + qsize.join(",") + "&";
    if (minPrice && maxPrice)
      queryParam += "&minPrice=" + minPrice + "&maxPrice=" + maxPrice + "&";

    (async () => {
      const data = await getProducts(queryParam);
      setItems(data.data.itemList);
    })();
  };

  const handleOnChangeDescription = (event) => {
    setDesc(event.target.value);
  };

  const handleOnChangeColor = (event) => {
    setQcolor(event.target.value);
  };

  const handleMinPrice = (event) => {
    setMinPrice(event.target.value);
  };

  const handleMaxPrice = (event) => {
    setMaxPrice(event.target.value);
  };
  const handleBrand = (event) => {
    // setQbrand(event.target.value);
    if (qbrand.includes(event.target.value)) {
      setQbrand(qbrand.filter((item) => item != event.target.value));
    } else {
      setQbrand([...qbrand, event.target.value]);
    }
  };

  const handleOnClickSize = (event) => {
    if (qsize.includes(event.target.value)) {
      setQsize(qsize.filter((item) => item != event.target.value));
    } else {
      setQsize([...qsize, event.target.value]);
    }
  };

  useEffect(() => {
    getProducts(`productId=${props.match.params.id}`)
      .then((response) => {
        const size = new Set();
        const color = new Set();
        const cat = new Set();
        const subCat = new Set();
        const brand = new Set();
        response.data.itemList.forEach((item) => {
          size.add(item.size);
          color.add(item.color);
          cat.add(item.catName);
          subCat.add(item.subCatName);
          brand.add(item.brand);
        });

        setItems(() => response.data.itemList);
        setColor([...color]);
        setSize([...size]);
        setCat(...cat);
        setSubCat(...subCat);
        setBrand([...brand]);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [props.match.params.id]);

  const handleSort = (ascending) => {
    setSort({
      sortValue: ascending
        ? items.sort(
            (a, b) => parseFloat(a.unitPrice) - parseFloat(b.unitPrice)
          )
        : items.sort(
            (a, b) => parseFloat(b.unitPrice) - parseFloat(a.unitPrice)
          ),
    });
  };

  const priceFilterStyle = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  const priceInputStyle = {
    // width:"15rem",
    backgroundColor: "#f3f3f3",
  };
  return (
    <>
      <TopHeader />
      <NavbarMenu />
      <div className='container-fluid'>
        <div className='subcategory'>
          <div className='row'>
            <div className='d-none d-md-block col-md-12 col-xl-12 pl-4 pt-4 pb-2'>
              <nav aria-label='breadcrumb' className='subCat-breadcrumb'>
                <ol className='breadcrumb bg-transparent'>
                  <li className='breadcrumb-item'>
                    <Link to='/'>Home</Link>
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {cat}
                  </li>
                  <li className='breadcrumb-item active' aria-current='page'>
                    {subcat}
                  </li>
                </ol>
              </nav>
            </div>
          </div>
          <div className='container-fluid'>
            <div className='row'>
              <div className='col-xs-12 col-sm-12 col-md-3 text-center mt-3'>
                <div className='form-group'>
                  <h3>{props.match.params.product}</h3>
                  <p className='mt-1 pl-1 text-secondary'>{`(${items.length} items)`}</p>
                </div>
              </div>
              <div className='col-xs-12 col-sm-12 col-md-2 offset-md-7'>
                <div className='dropdown text-center'>
                  <button
                    className='btn sort-button btn-md dropdown-toggle'
                    type='button'
                    id='dropdownMenuButton'
                    data-toggle='dropdown'
                    aria-haspopup='true'
                    aria-expanded='false'
                    style={{ width: "200px" }}
                  >
                    Sort By
                  </button>
                  <div
                    className='dropdown-menu'
                    aria-labelledby='dropdownMenuButton'
                  >
                    <button
                      className='btn dropdown-item'
                      onClick={() => handleSort(true)}
                    >
                      Low to High
                    </button>
                    <div className='dropdown-divider'></div>
                    <button
                      className='btn dropdown-item'
                      onClick={() => handleSort(false)}
                    >
                      High to Low
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <RotateLoader
              color={loadingColor}
              loading={loading}
              css={override}
              size={15}
            />
          ) : (
            <div className='container-fluid'>
              <div className='row'>
                <div className='col-md-3 col-xl-3 col-sm-12 col-xs-12'>
                  <div className='my-4'>
                    <div className='row d-flex justify-content-center'>
                      <div className='col-md-12'>
                        <div className='card'>
                          <article className='filter-group'>
                            <header className='card-header'>
                              {" "}
                              <a
                                href='#'
                                data-toggle='collapse'
                                data-target='#collapse_aside1'
                                data-abc='true'
                                aria-expanded='false'
                                className='collapsed'
                              >
                                {" "}
                                <i className='icon-control fa fa-chevron-down' />
                                <h6 className='title'>Description </h6>
                              </a>{" "}
                            </header>
                            <div className='card-body'>
                              <div
                                className='form-group'
                                style={priceFilterStyle}
                              >
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
                              {" "}
                              <a
                                href='#'
                                data-toggle='collapse'
                                data-target='#collapse_aside2'
                                data-abc='true'
                                aria-expanded='false'
                                className='collapsed'
                              >
                                {" "}
                                <i className='icon-control fa fa-chevron-down' />
                                <h6 className='title'>Price </h6>
                              </a>{" "}
                            </header>
                            <div className='card-body'>
                              {" "}
                              <div className='form-row'>
                                <div className='form-group col-md-6'>
                                  {" "}
                                  <label>Min</label>{" "}
                                  <input
                                    className='form-control'
                                    placeholder='Rs. 0'
                                    type='number'
                                    onChange={handleMinPrice}
                                  />{" "}
                                </div>
                                <div className='form-group text-right col-md-6'>
                                  {" "}
                                  <label>Max</label>{" "}
                                  <input
                                    className='form-control'
                                    placeholder='Rs. 5,000,00'
                                    type='number'
                                    onChange={handleMaxPrice}
                                  />{" "}
                                </div>
                              </div>{" "}
                            </div>
                          </article>
                          {size && size.length > 1 ? (
                            <article className='filter-group'>
                              <header className='card-header'>
                                {" "}
                                <a
                                  href='#'
                                  data-toggle='collapse'
                                  data-target='#collapse_aside3'
                                  data-abc='true'
                                  aria-expanded='false'
                                  className='collapsed'
                                >
                                  {" "}
                                  <i className='icon-control fa fa-chevron-down' />
                                  <h6 className='title'>Size </h6>
                                </a>{" "}
                              </header>
                              <div className='card-body'>
                                {" "}
                                {size &&
                                  size.map((item, idx) => {
                                    return (
                                      <span key={idx}>
                                        <label className='checkbox-btn'>
                                          <input
                                            type='checkbox'
                                            onClick={handleOnClickSize}
                                            value={item}
                                          />{" "}
                                          <span className='btn btn-light'>
                                            {" "}
                                            {item}{" "}
                                          </span>{" "}
                                        </label>
                                      </span>
                                    );
                                  })}
                              </div>
                            </article>
                          ) : (
                            ""
                          )}
                          {color && color.length > 1 ? (
                            <article className='filter-group'>
                              <header className='card-header'>
                                {" "}
                                <a
                                  href='#'
                                  data-toggle='collapse'
                                  data-target='#collapse_aside3'
                                  data-abc='true'
                                  aria-expanded='false'
                                  className='collapsed'
                                >
                                  {" "}
                                  <i className='icon-control fa fa-chevron-down' />
                                  <h6 className='title'>Color </h6>
                                </a>{" "}
                              </header>

                              <div className='container c-color-swatch mt-2 mb-4'>
                                <select
                                  name='color'
                                  label='color'
                                  onChange={handleOnChangeColor}
                                >
                                  <option value={""}> none</option>
                                  {color &&
                                    color.map((item, idx) => {
                                      return (
                                        <option value={item} key={idx}>
                                          {" "}
                                          {item}{" "}
                                        </option>
                                      );
                                    })}
                                </select>
                              </div>
                            </article>
                          ) : (
                            ""
                          )}
                          {brand && brand.length > 1 ? (
                            <article className='filter-group'>
                              <header className='card-header'>
                                <a
                                  href='#'
                                  data-toggle='collapse'
                                  data-target='#collapse_aside4'
                                  data-abc='true'
                                  className='collapsed'
                                  aria-expanded='false'
                                >
                                  <i className='icon-control fa fa-chevron-down' />
                                  <h6 className='title'>Brands</h6>
                                </a>
                              </header>
                              <div className='card-body'>
                                {brand &&
                                  brand.map((brandName, idx) => {
                                    return (
                                      <label
                                        key={idx}
                                        className='custom-control'
                                      >
                                        <input
                                          type='checkbox'
                                          className='custom-control-input'
                                          value={brandName}
                                          onClick={handleBrand}
                                        />
                                        <div className='custom-control-label'>
                                          {brandName}
                                        </div>
                                      </label>
                                    );
                                  })}
                              </div>
                            </article>
                          ) : (
                            ""
                          )}
                        </div>
                        <button
                          className=' btn btn-medium button xs-margin-bottom-five apply-filter-button'
                          onClick={handleOnFilter}
                          data-abc='true'
                        >
                          Apply Filter
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
                <div className='col-md-9 col-sm-12 col-xs-12'>
                  <div className='row'>
                    {items.map((item, idx) => (
                      <div
                        key={idx}
                        className='col-lg-3 col-md-3 col-sm-6 col-xs-6'
                      >
                        <ProductCard
                          height={productHeight}
                          width={productWidth}
                          imgHeight={productImageHeight}
                          product={item}
                        >
                          {" "}
                        </ProductCard>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
}

export default SubCategory;
