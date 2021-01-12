import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { Image, Container, Product, Heading } from "./ProductDetail.styles";
import { useStateValue } from "../../contexts/StateProvider";
import Button from "../Button/Button";

const ProductDetail = () => {
  const { productId } = useParams();
  const { state } = useLocation();
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    dispatch({
      type: "ADD_TO_BASKET",
      item: {
        id: state.product.id,
        title: state.product.title,
        image: state.product.image,
        price: state.product.price,
        category: state.product.category,
      },
    });
  };

  console.log(state.product);
  return (
    <>
      <Heading>Product Detail - {productId}</Heading>
      <Container>
        <Product>
          <p>{state.product.title}</p>
          <h4>{state.product.category}</h4>
          <p className="product_price">
            <small>$</small>
            <strong>{state.product.price}</strong>
          </p>
          <Image src={state.product.image} alt={state.product.title} />
          <Button text="Add to Basket" onClick={addToBasket} />
        </Product>

        <ul>
          <h5>About this product </h5> <li>{state.product.detail}</li>
          <li>{state.product.detail2}</li>
          <li>{state.product.detail3}</li>
          
        </ul>
      </Container>
    </>
  );
};

export default ProductDetail;
