import React from 'react'
import Products from '../Products/Products'

const Categories = ({category}) => {
    return (
        <div>
            <h1 style={{textAlign:'center'}} >{category} Products</h1>
           <Products category={category} /> 
        </div>
    )
}



export default Categories
