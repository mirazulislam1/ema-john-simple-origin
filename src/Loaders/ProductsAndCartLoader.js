import { getStoredCart } from "../utilities/fakedb";

export const productsAndCartLoader =async () =>{
    // get products
    const productsData = await fetch('http://localhost:5000/products');
    const {products} = await productsData.json();

    // get cart
    const savedCart = getStoredCart();
    const initialCart = [];
    for(const id in savedCart){
       const addProduct = products.find(product => product._id === id);
       if(addProduct){
        const quantity = savedCart[id];
        addProduct.quantity = quantity;
        initialCart.push(addProduct);
       }
    }
    
    return {products , initialCart};
}