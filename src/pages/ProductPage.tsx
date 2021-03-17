import React from 'react'
import Product from '../Components/Product/Product'
import { ProuductProp } from '../Components/Product/ProductContainer'
import IProduct from '../Models/IProduct'

const ProductPage = (ProductProp: ProuductProp) => {

    return (
        
        <>
            <div className="product-page">

                <div className="container">
                    { ProductProp.product.map((value: IProduct, index: number) => {
                        return (
                            <Product
                             
                                product={value}
                                key={index}
                                addToCart={ProductProp.addToCart} />
                        );

                    })}


                </div>

            </div>
        </>
    )


}

export default ProductPage
