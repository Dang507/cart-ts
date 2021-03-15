import React from 'react'
import Product from '../Components/Product/Product'
import { ProuductContainer } from '../Components/Product/ProductContainer'
import IProduct from '../Models/IProduct'


//  interface State {
//     selectedSizes: string[];

//  }
const ProductPage=(ProductContainer:ProuductContainer)=>{
  
    return (
        <>
            <div className="product-page">
          
               <div className ="container">
                   { ProductContainer.product.map((value:IProduct,index:number)=>{
                         return (
                             <Product 
                                      product={value} 
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
