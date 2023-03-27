import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div className='shop-container'>
            <div className="product-container">
                {
                    products.map(pro => <Products
                        key={pro.id}
                        product={pro}
                    ></Products>)
                }
            </div>
            <div className="card-container">
                <h4>Order summary</h4>
            </div>
        </div>
    );
};

export default Shop;