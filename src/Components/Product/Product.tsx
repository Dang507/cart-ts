import React from 'react'
import IProduct from '../../Models/IProduct'
import {AddProductToCart} from './ProductContainer'

interface Props {
    product:IProduct;
    addCart: AddProductToCart;
    

}

const Product: React.FC<Props>=({product,addCart}) =>{
  
            {
    return (
        <div className="product-item"
             onClick={()=>addCart(product,0)}
        

        >
            <div className="product-img">
                <img src={require(`../../data.json/${product.Image}`)}
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
                   <button>+</button>  
                   <button>-</button>   
            <div className="product-add-btn">add cart

            </div>

            
           
           
        </div>
    )
}
}

export default Product
