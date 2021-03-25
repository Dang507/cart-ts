
import ProductItem from '../Components/Product/ProductItem'
import { ProuductProp } from './ProductContainer'
import IProduct from '../Models/IProduct'
import DataProduct from '../data'
 import './productpage.css'

 
const ProductPage = (ProductProp: ProuductProp) => {

    return (
        
        <>
            <div className="product-page">
                <div className="container">
                    <header className="header">Demo</header>
                    {DataProduct.map((value: IProduct, index: number) => {
                        return (
                            <ProductItem
                                product={value}
                                key={index}
                                addToCart={ProductProp.addToCart}
                                
                                 />
                        );

                    })}


                </div>

            </div>
        </>
    )


}

export default ProductPage
