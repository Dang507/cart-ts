import React from 'react'
import IProduct from '../../Models/IProduct'
import { AddProductToCart } from './ProductContainer'
import './product.css'


interface Props {
    product: IProduct;
    addToCart: AddProductToCart;
    key: number;
}

const Product = (prop: Props) => {

    {
        return (
            <div className="product-item"
                onClick={() =>  prop.addToCart(prop.product, 0)}
            >

                <div className="product-img">
                    <img src='./Components/Product/asset/images/10412368723880252_1.jpg' 
                        
                    >
                    </img>

                </div>
                <p className="product-title">{prop.product.Title}

                </p>
                <div className="product-price">
                    <div className="val">
                        <b>
                            {prop.product.Price}
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
