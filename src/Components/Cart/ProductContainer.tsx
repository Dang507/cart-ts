import { type } from 'node:os';
import React from 'react'
import IProduct from '../../Models/IProduct'
import {connect } from 'react-redux';



 export type AddToCartProduct=(Product:IProduct, item: number ) =>void;
  interface State {
      product: IProduct [];

  } 
  interface Dispatch {
addToCart: AddToCartProduct;
  }


function ProductContainer() {
    return (
        <div>
            
        </div>
    )
}

export default ProductContainer
