import React from "react";
import "./Home.css";
import Products from "../Products/Products";

const Home = () => {
    

  return (
    <div className="home">
      <div className="home_container">
        <img
          className="home_image"
          src='http://pngimg.com/uploads/macbook/macbook_PNG75.png'
          alt=""
        />
        <Products category=''/>
      </div>
      
    </div>
  );
};

export default Home;
