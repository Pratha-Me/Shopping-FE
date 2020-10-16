import React from 'react'
import '../../styles/scss/SearchBar.scss'

function SearchBar() {
    return (
      <>
        <div className="wrap">
            <div className="search">
            <input type="text" className="searchTerm" placeholder="Search for any items"></input>
            <button type="submit" className="searchButton">
                <i className="fa fa-search"></i>
            </button>
            </div>
        </div>
      </>
    );
  }
  
  export default SearchBar;