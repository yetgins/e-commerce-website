import React, { useEffect, useState } from "react";
import { useStateValue } from "../../contexts/StateProvider";
import CheckoutProducts from "../Checkout/CheckoutProducts";
import "./Payment.css";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../actions/reducer";
import axios from "axios";
import { db } from "../../firebase/firebase";
import Button from "../Button/Button";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  const history = useHistory();

  const stripe = useStripe();
  const elements = useElements();

  const [succeeded, setSucceeded] = useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "post",
        url: `https://us-central1-e-commerce-c1b8d.cloudfunctions.net/api/payments/create?total=${
          getBasketTotal(basket)* 100
        }`,
      });
      setClientSecret(response.data.clientSecret);
    };
    getClientSecret();
  }, [basket]);
  console.log(">>>>>>>>>>>>>>>>>>>", clientSecret);
  console.log(getBasketTotal(basket)*100);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);

    const payload = await stripe
      .confirmCardPayment(clientSecret, {
        payment_method: {
          card: elements.getElement(CardElement),
        },
      })
      .then(({ paymentIntent }) => {
        db.collection("users")
          .doc(user?.uid)
          .collection("orders")
          .doc(paymentIntent.id)
          .set({
            basket: basket,
            amount: paymentIntent.amount,
            created: paymentIntent.created,
          });

        setSucceeded(true);
        setError(null);
        setProcessing(false);

        dispatch({
          type: "EMPTY_BASKET",
        });

        history.replace("/orders");
      });
  };

  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

  return (
    <div className="payment">
      <div className="payment_container">
        <h1>
          Checkout (<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/* delivery address*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Delivery address </h3>
          </div>
          <div className="payment_address">
            <p>{user?.email}</p>
            <p>Ortaçeşme 7/1</p>
            <p>Ümraniye , Istanbul</p>
          </div>
        </div>

        {/*Review Products*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Review Products and delivery </h3>
          </div>
          <div className="payment_items">
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
        </div>

        {/* Payment methods*/}
        <div className="payment_section">
          <div className="payment_title">
            <h3>Payment Method </h3>
          </div>
          <div className="payment_details">
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              <div className="payment_priceContainer">
                <CurrencyFormat
                  renderText={(value) => <h3>Order Total: {value}</h3>}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                
                <Button disabled={processing || disabled || succeeded} text={processing ? <p>Processing</p> : "Buy Now"} width='100%' height='30px'>
                  
                </Button>
              </div>
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;
