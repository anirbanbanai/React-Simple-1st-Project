import React from 'react';
import './Cart.css'

const Cart = (props) => {
    const { cart } = props;

    let total = 0;
    let totalShiping = 0;
    for(const product of cart){
        total = total + product.price;
        totalShiping = totalShiping + product.shipping;
    }

    const tax = total * 7 /100;
    const grandTotal = total + totalShiping + tax;

    return (
        <div className='Cart'>
            <h4>Order Summary</h4>
            <p>Selected Items: {cart.length}</p>
            <p>Total Price : { total}</p>
            <p>Shipping : {totalShiping}</p>
            <p>Tax : { tax.toFixed(2)}</p>
            <h5>Grand Total : { grandTotal.toFixed(2)}</h5>
        </div>
    );
};

export default Cart;