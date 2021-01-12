import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import Button from "../Button/Button";
import "./ProductItem.css";

const Product = ({ id, title, image, price, category,onShowDetail,product }) => {
  const [{ basket }, dispatch] = useStateValue();
  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id,
        title,
        image,
        price,
        category,
      },
    });
  };

  return (
    <div className="product" onClick={() => {
      onShowDetail && onShowDetail(product);
    }}>
      <p>{title}</p>
      <h4>{category}</h4>

      <p className="product_price">
        <small>$</small>
        <strong>{price}</strong>
      </p>
      <img src={image} alt={title} />

      <Button text="Add to Basket" onClick={(event)=>{
        event.stopPropagation();
        addToBasket(product);}} />
    </div>
  );
};

export default Product;
