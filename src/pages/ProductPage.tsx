import React from 'react'
import Product from '../Components/Product/Product'
import FilterSize from '../Components/FilterSize/FilterSize'
import { render } from '@testing-library/react'
import { ProuductContainer } from '../Components/Product/ProductContainer'
import IProduct from '../Models/IProduct'


//  interface State {
//     selectedSizes: string[];

//  }
const ProductPage=(ProductContainer:ProuductContainer)=>{
  
    return (
        <>
            <div className="product-page">
            <FilterSize/>

               <div className ="container">
                   { ProductContainer.product.map((value:IProduct,index:number)=>{
                         return (
                             <Product product={value} 
                                      key={index}
                                      addToCart={ProductContainer.addToCart}/>
                         );

                     })}
            
              
               </div>

            </div>
        </>
    )
    
    
}

export default ProductPage
