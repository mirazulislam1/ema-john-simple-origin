import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Main from './layout/Main';
import Shop from './components/Shop/Shop';
import Inventory from './components/Inventory/Inventory';
import Orders from './components/Orders/Orders';
import { productsAndCartLoader } from './Loaders/ProductsAndCartLoader';
import SignUp from './components/SignUp/SignUp';
import Login from './components/Login/Login';
import Shipping from './components/Shipping/Shipping';
import PrivateRoute from './routes/PrivateRoute';


function App() {
 const router = createBrowserRouter([
  {
    path:'/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <Shop></Shop>
      },
      {
        path: 'inventory',
        element : <PrivateRoute><Inventory></Inventory></PrivateRoute>
      },
      {
        path: 'orders',
        loader: productsAndCartLoader,
        element : <Orders></Orders>
      },
      {
        path:'about',
        element: <About></About>
      },
      {
        path: 'signup',
        element:<SignUp></SignUp>
      },
      {
        path: 'login',
        element:<Login></Login> 
      },
      {
        path:'shipping',
        element: <PrivateRoute><Shipping></Shipping></PrivateRoute>
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

