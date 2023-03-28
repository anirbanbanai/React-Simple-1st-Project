import React, { useEffect, useState } from 'react';
import { addToDb, getShoppingCard } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([])

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, []);

    useEffect(() => {
        const strodCard = getShoppingCard();
        const saveCard = [];
        for(const id in strodCard){
            const addedProduct = products.find(pro => pro.id === id)
           if(addedProduct){
            const quantity  = strodCard[id];
            addedProduct.quantity = quantity;
            saveCard.push(addedProduct)
           }
           console.log('added product ', addedProduct)
        }
        setCart(saveCard)
    }, [products])

    const handleAddToCart = (product) => {
        // cart.push(product); 
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
    }

    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product => <Product

                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart
                    cart={cart}
                ></Cart>
            </div>
        </div>
    );
};

export default Shop;