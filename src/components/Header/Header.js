import React from "react";
import { Link } from "react-router-dom";
import ShoppingBasketIcon from "@material-ui/icons/ShoppingBasket";
import "./Header.css";
import { useStateValue } from "../../contexts/StateProvider";
import { auth } from "../../firebase/firebase";
import SearchBar from "./SearchBar/SearchBar";
//import {Image} from './Header.styles';

const Header = () => {
  const [{ basket, user }] = useStateValue();

  const handleAuthenticaton = () => {
    if (user) {
      auth.signOut();
    }
  };
  console.log(basket);
  return (
    <nav className="header">
      <div className="header_top">
        {/*Logo */}
        <Link to="/">
          <img
            className="header_logo"
            src="https://scontent.fsaw2-1.fna.fbcdn.net/v/t31.0-8/14707935_1788829271388556_232388326914306008_o.jpg?_nc_cat=102&ccb=2&_nc_sid=09cbfe&_nc_ohc=4PMERTtBB-4AX9M1taw&_nc_ht=scontent.fsaw2-1.fna&oh=5201bc0bc2ea6a88867d9c4916ca60e3&oe=5FFD8D19"
            alt=""
          />
        </Link>
        {/* Search box */}
        <div className="header_search">
          <SearchBar />
        </div>
        {/* 3 Links */}

        <div className="header_nav">
          <Link to={!user && "/login"}>
            <div onClick={handleAuthenticaton} className="header_option">
              <span className="header_optionLineOne">
                Hello {!user ? "Guest" : user.email}
              </span>
              <span className="header_optionLineTwo">
                {user ? "Sign Out" : "Sign In"}
              </span>
            </div>
          </Link>

          <Link to="/orders">
            <div className="header_option">
              <span className="header_optionLineOne">Returns</span>
              <span className="header_optionLineTwo">& Orders</span>
            </div>
          </Link>

         

          <Link to="/checkout">
            <div className="header_optionBasket">
              <ShoppingBasketIcon />
              <span className="header_optionLineTwo header_basketCount">
                {basket?.length}
              </span>
            </div>
          </Link>
        </div>
      </div>
      <div className="header_bottom">
        {/* Nav */}
        <div className="header_bottom-nav">
        <span>
            <Link to="/" className="header_link">
              All Products
            </Link>
          </span>
          <span>
            <Link to="/home" className="header_link">
              Home
            </Link>
          </span>
          <span>
            <Link to="/health" className="header_link">
              Health
            </Link>
          </span>
          
          <span>
            <Link to="/books" className="header_link">
              Books
            </Link>
          </span>
          <span>
            <Link to="/music" className="header_link">
              Music
            </Link>
          </span>
          <span>
            <Link to="/grocery" className="header_link">
              Grocery
            </Link>
          </span>
          <span>
            <Link to="/computers" className="header_link">
              Computers
            </Link>
          </span>
          <span>
            <Link to="/garden" className="header_link">
              Garden
            </Link>
          </span>
        </div>
        
      </div>
    </nav>
  );
};

export default Header;
