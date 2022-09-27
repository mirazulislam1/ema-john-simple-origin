import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
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
    useEffect( ()=>{
      const storedCart = getStoredCart();
      const saveCart= [];
      for(const id in storedCart){
       const addedProduct = products.find(product => product.id === id);
       if(addedProduct){
        const quantity = storedCart[id];
        addedProduct.quantity = quantity;
        saveCart.push(addedProduct);
  
       }
      }
      setCart(saveCart);
     }, [products])

    const handlerAddToCart =(selectedProduct) =>{
      let newCart = [];
      const exist = cart.find(product => product.id === selectedProduct.id);
      if(!exist){
          selectedProduct.quantity = 1;
          newCart= [...cart, selectedProduct]
      }
      else{
        const rest = cart.filter(product => product.id !== selectedProduct.id);
        exist.quantity = exist.quantity + 1;
        newCart = [...rest, exist];
      }
        // console.log(product)
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
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
            <Cart cart={cart}></Cart>
          </div>
        </div>
       
    );
};

export default Shop;