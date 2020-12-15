import React from 'react';
import ProductItem from "../Products/ProductItem";
import './ProductItem.css';

const FilteredProducts = ({filteredProducts}) => {

    console.log(filteredProducts);
    return (
      <div className='home'>
        <div className='filteredProducts'>
           {filteredProducts && filteredProducts.map((product) => (
            <ProductItem
              id={product.id}
              title={product.title}
              price={product.price}
              category={product.category}
              image={product.image}
            />
           ))}
        </div>
        </div>
    )
}

export default FilteredProducts
