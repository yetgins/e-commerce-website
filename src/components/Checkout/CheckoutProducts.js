import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import Button from "../Button/Button";
import "./CheckoutProducts.css";

const CheckoutProducts = ({
  id,
  title,
  image,
  price,
  category,
  hideButton,
}) => {
  const [ {basket },dispatch] = useStateValue();
  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id,
    });
  };
  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct_image" src={image} alt="" />

      <div className="checkoutProduct_info">
        <p className="checkoutProduct_title">{title}</p>
        <p className="checkoutProduct_category">{category}</p>
        <p className="checkoutProduct_price">
          <small>$</small>
          <strong>{price}</strong>
        </p>

        {!hideButton && (
          <Button onClick={removeFromBasket} text='Remove from Basket' />
          
        )}
      </div>
    </div>
  );
};

export default CheckoutProducts;
