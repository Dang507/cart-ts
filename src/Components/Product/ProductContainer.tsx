import { type } from 'node:os';
import React from 'react'
import IProduct from '../../Models/IProduct'
import {connect } from 'react-redux';
import Product from './Product';



 export type AddProductToCart=(Product:IProduct, item: number ) =>void;

  interface State {
      product: IProduct[];

  } 
  interface Dispatch {
  addToCart: AddProductToCart;
  }



const mapStateToProps= (state):Dispatch=>({

  
    

})
const mapDispatchToProps =()=>({

})
export type ProuductContainer = State & Dispatch;
export default connect (mapStateToProps,mapDispatchToProps)(Product)