import React from 'react'
import IProduct from '../../Models/IProduct'
import {AddProductToCart} from './ProductContainer'
import products from '../../data.json'


interface Props {
    product:IProduct;
    addToCart: AddProductToCart;
    key:number; 
}

const Product:React.FC<Props>= ({product,addToCart})=>{
  
            {
    return (
        <div className="product-item"
             onClick={()=>addToCart(product,0)}
             
             
        >
              <div className="product-img">
                <img src={product.Image}
                       title={product.Title}
                >
                </img>

            </div>
            <p className="product-title">{product.Title}
                    
            </p>
            <div className="product-price">
                <div className="val">
                    <b>
                        {product.Price}
                    </b>

                </div>
             

            </div>
                 
            <div className="product-add-btn">add cart

            </div> 
         

        
        

            
           
           
        </div>
    )
}
}

export default Product
    {/* <div className="product-img">
                <img src={product.Image}
                       title={product.Title}
                >
                </img>

            </div>
            <p className="product-title">{product.Title}
                    
            </p>
            <div className="product-price">
                <div className="val">
                    <b>
                        {product.Price}
                    </b>

                </div>
             

            </div>
                 
            <div className="product-add-btn">add cart

            </div> */}