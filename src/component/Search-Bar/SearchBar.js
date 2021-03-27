import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  getCatAndSubCat,
  getProducts1,
  getItemList,
  getAllItemList,
} from "../../services/InventoryService";
import "../../styles/scss/SearchBar.scss";

function SearchBar() {
  const [input, setInput] = useState("");
  let [data, setData] = useState();
  const [filterData, setFilterData] = useState();

  useEffect(() => {
    getAllItemList().then((response) => {
      setData(response.data.ItemList);
    });
  }, []);

  const handleChange = (e) => {
    e.preventDefault();
    setInput(e.target.value);
  };

  // Regular Expression
  function escapeRegExp(string) {
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  }

  const handleClick = () => {
    setInput("");
  };

  // Search Logic
  if (input && input.length > 0) {
    data =
      data &&
      data.filter((i) => {
        return (
          escapeRegExp(i.itemName.toLowerCase()).match(
            escapeRegExp(input.toLowerCase())
          ) ||
          escapeRegExp(i.catName.toLowerCase()).match(
            escapeRegExp(input.toLowerCase())
          ) ||
          escapeRegExp(i.subCatName.toLowerCase()).match(
            escapeRegExp(input.toLowerCase())
          )
        );
      });
  }

  return (
    <>
      <div className='wrap'>
        <div className='search'>
          <input
            type='text'
            className='searchTerm'
            placeholder='Search for any items'
            onChange={handleChange}
            value={input}
          />
          <button type='submit' className='searchButton'>
            <i className='fa fa-search' style={{ color: "white" }}></i>
          </button>
        </div>
        {input && (
          <div className='search-dropdown p-3'>
            {data && data.length === 0 ? (
              <h5>No Results for "{`${input && input}`}"</h5>
            ) : (
              <h5>Showing Results for "{`${input && input}`}"</h5>
            )}
            <hr />
            {data &&
              data.map((datas) => {
                return (
                  <>
                    {/* <h3 style={{ color: 'black' }}>{datas.categoryName}</h3> <hr /> */}
                    <Link
                      to={{
                        pathname: `/product-details/${datas.itemName}`,
                        state: datas,
                      }}
                      onClick={handleClick}
                    >
                      <div className='search-card'>
                        <div className='container'>
                          <div className='row'>
                            <div className='col-md-4'>
                              <div className='search-image-container'>
                                <img
                                  src={datas.link[0]}
                                  alt='Avatar'
                                  className='image'
                                ></img>
                              </div>
                            </div>
                            <div className='col-md-5 search-title'>
                              <p className='font-bolder'>{datas.itemName}</p>
                            </div>
                            <div className='col-md-3 search-price'>
                              <p>Rs. {datas.unitPrice}</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <hr />
                    </Link>
                  </>
                );
              })}
          </div>
        )}
      </div>
    </>
  );
}

export default SearchBar;
