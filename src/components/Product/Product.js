import { faCoffee, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Product.css'
const Product = ({handlerAddToCart, product}) => {
    const {img ,name, price, seller, ratings } = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
           <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p>Price : ${price}</p>
                <p><small>Seller : {seller}</small></p>
                <p><small>Ratings : {ratings}</small></p>
           </div>
           <button onClick={() =>handlerAddToCart(product)} className='btn-cart'>
            <p className='btn-text'>add to cart</p>
            <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
         </button>
        </div>
    );
};

export default Product;