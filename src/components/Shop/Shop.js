import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
import './Shop.css'
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect( ()=>{
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    }, [])

    const handlerAddToCart =(product) =>{
        console.log(product)
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <div className='shop-container'>
          <div className="products-container">
            {
                products.map(product =><Product
                     product={product} key={product.id} handlerAddToCart={handlerAddToCart}></Product>)
            }
          </div>
          <div className="cart-container">
          <h4>order summary</h4>
            <p>selected item : {cart.length}</p>
          </div>
        </div>
       
    );
};

export default Shop;