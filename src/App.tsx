import React, { useEffect } from 'react';

import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import './App.css';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import CartProduct from './Models/IQuantity';
import Product from './Components/Product/Product';
import store from '../src/redux/Store'
import {AddProductAction } from './redux/Cart/CartAction'
import ProductContainer from './pages/ProductContainer';
import CartContainer from './pages/CartContainer';
function App() {
  


  return (
 

<div className="App">
        <CartContainer/>
         <ProductContainer/>

       
       
      
 
    </div>
    
    
   
  );
}

export default App;
