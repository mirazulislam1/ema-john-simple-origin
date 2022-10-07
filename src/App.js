import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import { productsAndCartLoader } from './Loaders/ProductsAndCartLoader';


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        loader: () => fetch('products.json'),
        element: <Shop></Shop>
      },
      {
        path: 'inventory',
        element : <Inventory></Inventory>
      },
      {
        path: 'orders',
        loader: productsAndCartLoader,
        element : <Orders></Orders>
      },
      {
        path:'about',
        element: <About></About>
      }
    ]
  },
 
 ])
  return (
    <div>
        <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

