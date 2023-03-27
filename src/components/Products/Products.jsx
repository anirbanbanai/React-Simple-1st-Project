import React from 'react';
import './Products.css'

const Products = (props) => {
  console.log(props.product);
  const {img , name , price,ratings , quantity , seller} = props.product;
    return (
        <div className='product'>
            <img  src={img} alt="" />
            <div className='product-info'>
            <h6 className='product-name'>{name}</h6>
            <p>price :  ${price}</p>
            <p>Menufactural : {seller}</p>
            <p>rate : {ratings} start</p>
            </div>
            <button className='btn-card'>Add to Card</button>
        </div>
    );
};

export default Products;