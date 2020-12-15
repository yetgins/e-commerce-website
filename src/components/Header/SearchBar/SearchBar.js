import React, { useState } from "react";
import "./SearchBar.css";
import SearchIcon from "@material-ui/icons/Search";
import ProductService from "../../../services/ProductService";
import Products from "../../Products/Products";
import { Link } from "react-router-dom";
import FilteredProducts from "../../Products/FilteredProducts";

const SearchBar = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  
  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const findByTitle = () => {
    ProductService.findByTitle(searchTitle)
      .then((response) => {
        setFilteredProducts(response.data);
        console.log(response.data);
        
      })
      .catch((e) => {
        console.log(e);
      });
  };
//<Products filteredProducts={filteredProducts} /> <FilteredProducts filteredProducts={filteredProducts} />
//{filteredProducts && filteredProducts.length>0 ? <FilteredProducts filteredProducts={filteredProducts} /> :''}
  console.log(searchTitle);
  return (
    <>
      <div className="header_search">
        <input
          className="header_searchInput"
          type="text"
          placeholder="Search by title"
          value={searchTitle}
          onChange={onChangeSearchTitle}
        />
        <Link to="/">
        <SearchIcon type="button" onClick={searchTitle && findByTitle} className="header_searchIcon" />
        </Link>
        
      </div>
    </>
  );
};

export default SearchBar;
