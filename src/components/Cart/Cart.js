import React from 'react';
import './Cart.css'
const Cart = ({cart, clearCart, children}) => {
    console.log(cart)
    let total = 0;
    let shipping = 0;
    let quantity = 0;
    for(const product of cart){
        quantity = quantity + product.quantity;
        total = total + product.price * product.quantity;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandtotal = total +shipping + tax;
    return (
        <div className='cart'>
            <h4>order summary</h4>
            <p>selected item : {quantity}</p>
            <p>Total price : ${total}</p>
            <p>Total shipping : ${shipping}</p>
            <p>Tax : ${tax}</p>
            <h5>Grand total : ${grandtotal}</h5>
            <button onClick={clearCart}>Clear Cart</button>
            {children}
        </div>
    );
};
 
export default Cart;