import React, { useState, useEffect } from "react";
import ProductItem from "../Products/ProductItem";
import ProductService from "../../services/ProductService";
import FilteredProducts from "./FilteredProducts";

const Products = ({ category, filteredProducts }) => {
  const [products, setProducts] = useState([]);

  console.log(category);
  console.log(filteredProducts);
  
  useEffect(() => {
    retrieveProducts();
  }, []);

  const retrieveProducts = () => {
    const filterProducts = [];
    ProductService.getAll()
      .then((response) => {
        if (category === "") setProducts(response.data);
        else {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].category === category) {
              filterProducts.push(response.data[i]);
            }
          }
          setProducts(filterProducts);
          console.log(filterProducts);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  console.log(products);

  return (
    <div className="products" data-testid="products">
      {/*filteredProducts?  (
         <FilteredProducts filteredProducts={filteredProducts}/>):*/
           products.map((product) => (
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
          ))}
    </div>
  );
};

export default Products;
