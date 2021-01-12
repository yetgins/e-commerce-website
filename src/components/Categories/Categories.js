import React,{useState} from 'react'
import Products from '../Products/Products'
import ProductService from '../../services/ProductService';
import SearchIcon from "@material-ui/icons/Search";

const Categories = ({category}) => {
    const [searchTitle, setSearchTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  const onChangeSearchTitle = (e) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };

  const findByTitle = () => {
      const filterProducts=[];
    ProductService.findByTitle(searchTitle)
      .then((response) => {
        for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].category === category) {
              filterProducts.push(response.data[i]);
            }
          }
        setFilteredProducts(filterProducts);
        console.log(filterProducts);
        
      })
      .catch((e) => {
        console.log(e);
      });
  };
    return (
        <>
        <div className="search">
            
            <input
              type="text"
              className="searchInput"
              placeholder="Search by title"
              value={searchTitle}
              onChange={onChangeSearchTitle}
            />
            <div className="input-group-append">
              <SearchIcon
                className="searchIcon"
                type="button"
                onClick={findByTitle}
              >
                Search
              </SearchIcon>
            </div>
          
        </div>
        <div>
            <h1 style={{textAlign:'center'}} >{category} Products</h1>
           <Products category={category} filteredProducts={filteredProducts} /> 
        </div>
        </>
    )
}



export default Categories
