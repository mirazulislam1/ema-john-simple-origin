import React from 'react';

const Cart = ({cart}) => {
    return (
        <div>
            <h4>order summary</h4>
            <p>selected item : {cart.length}</p>
        </div>
    );
};

export default Cart;