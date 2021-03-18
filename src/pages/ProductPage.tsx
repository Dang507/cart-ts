import React from 'react'
import Product from '../Components/Product/Product'
import { ProuductProp } from '../Components/Product/ProductContainer'
import IProduct from '../Models/IProduct'
import DataProduct from '../data'
 import './productpage.css'
import src from '*.avif'
 
const ProductPage = (ProductProp: ProuductProp) => {

    return (
        
        <>
            <div className="product-page">

                <div className="container">
                    {DataProduct.map((value: IProduct, index: number) => {
                        return (
                            <Product
                                product={value}
                                key={index}
                                addToCart={ProductProp.addToCart
                                
                                } />
                        );

                    })}


                </div>

            </div>
        </>
    )


}

export default ProductPage
