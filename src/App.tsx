import React, { useEffect } from 'react';

import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import './App.css';
import Store from './redux/Store';
import { Provider } from 'react-redux';
import CartProduct from './Models/IQuantity';
import Product from './Components/Product/Product';
import store from '../src/redux/Store'

function App() {
  
  return (
 

<div className="App">
          <ProductPage/>
          <CartPage/>
      

    </div>
    
    
   
  );
}

export default App;
