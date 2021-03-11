import { type } from 'node:os';
import React from 'react'
import IProduct from '../../Models/IProduct'
import {connect } from 'react-redux';
import Product from './Product';



 export type AddCartToProduct=(Product:IProduct, item: number ) =>void;

  interface State {
      product: IProduct [];

  } 
  interface Dispatch {
  addToCart: AddCartToProduct;
  }



const mapStateToProps= (dispatch):Dispatch=>({
  addToCart:(product:IProduct,quantity:number)=>dispatch(AddCartToProduct)
    

})
const mapDispatchToProps =()=>({

})
export type ProuductContainer = State & Dispatch;
export default connect (mapStateToProps,mapDispatchToProps)(Product)