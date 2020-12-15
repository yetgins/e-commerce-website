import React from "react";
import { useStateValue } from "../../contexts/StateProvider";
import "./Checkout.css";
import CheckoutProducts from "./CheckoutProducts";
import Subtotal from "./Subtotal/Subtotal";

const Checkout = () => {
  const [{ basket, user }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout_left">
        {basket.length === 0 ? (
          <div>
            <h2>Your Shopping Basket is empty</h2>
            <p>
              You have no item in your basket. Please buy one or more items,
              click "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h3> Hello, {user?.email}</h3>
            <h2 className="checkout_title">Your Shopping Basket</h2>
            {basket.map((item) => (
              <CheckoutProducts
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                category={item.category}
              />
            ))}
          </div>
        )}
      </div>
      <div className="checkout_right">
        <h2>Subtotal</h2>
        <Subtotal />
      </div>
    </div>
  );
};

export default Checkout;
