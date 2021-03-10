import React from 'react'
import IProduct from '../../Models/IProduct'
import {AddToCartProduct} from '../../Components/Cart/ProductContainer'
import * as data from '../../data.json';
interface Props {
    product:IProduct;
    addCart: AddToCartProduct;
    

}

const Product: React.FC<Props>=({product,addCart}) =>{
  


            {
    return (
        <div className="cart-item"
             onClick={()=>addCart(product,0)}
        

        >
            <div className="cart-img">
                <img src={require(`../../data.json/${product.Image}`)}
                       title={product.Title}
                >
                </img>

            </div>
            <p className="cart-title">{product.Title}
                    
            </p>
            <div className="cart-price">
                <div className="val">
                    <b>
                        {product.Price}
                    </b>

                </div>
             

            </div>

            <button className="cart-add-btn">add cart

            </button>

            
           
           
        </div>
    )
}
}

export default Product
