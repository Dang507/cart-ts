import React from 'react';

import ProductPage from './pages/ProductPage'
import CartPage from './pages/CartPage'
import './App.css';
import Store from './redux/Store';
import { Provider } from 'react-redux';


function App() {
  
  return (
  
   

   
    <div className="App">
          <ProductPage/>
          <CartPage/>

    </div>
   
  );
}

export default App;
