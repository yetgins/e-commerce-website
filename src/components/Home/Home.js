import React,{useState} from "react";
import "./Home.css";
import Products from "../Products/Products";
import ProductService from '../../services/ProductService';
import SearchIcon from "@material-ui/icons/Search";
import ImageSlider from "../ImageSlider/ImageSlider";
import { SliderData } from "../ImageSlider/SliderData";
import { useHistory } from 'react-router-dom';

const Home = () => {
  const [searchTitle, setSearchTitle] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);
  const history = useHistory();

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

  const handleShowDetailClick = (product) => {
    history.push(`/products/${product.id}`, { product });
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
    <div className="home">
      
      
      <div className="home_container">
      
        <ImageSlider slides={SliderData} />
        <Products category='' filteredProducts={filteredProducts} onShowDetail={handleShowDetailClick} />
      </div>
      
    </div>
    </>
  );
};

export default Home;
