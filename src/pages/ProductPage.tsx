import React from 'react'
import Product from '../Components/Product/Product'
import SortSize from '../Components/SortSize/SortSize'
import product from '../Components/Product/Product'
import { render } from '@testing-library/react'


 interface State {
 
 }
const ProductPage:React.FC =()=>{
  
    return (
        <>
            <div className="product-page">
            <SortSize/>

               <div className ="container">
            
              
               </div>

            </div>
        </>
    )
    
    
}

export default ProductPage
