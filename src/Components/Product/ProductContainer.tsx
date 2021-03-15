import { type } from 'node:os';
import React from 'react'
import IProduct from '../../Models/IProduct'
import {connect } from 'react-redux';
import Product from './Product';
import ProductPage from '../../pages/ProductPage';

//filteredSizes: Set<string>;

 export type AddProductToCart=(Product:IProduct, quantity: number ) =>void;

  interface StateToProps {
      product: IProduct[];
    
  } 
  interface DispatchToProps {
  addToCart: AddProductToCart;
  }



// const mapStateToProps= (state:StateToProps)=>({
//   return {

//   }

  
    

// })
const mapDispatchToProps =(dispatch:DispatchToProps)=>({
  addToCart:(product:IProduct,quantity:number)=> dispatch((product,quantity))

})
export type ProuductContainer = StateToProps & DispatchToProps;
export default connect (mapDispatchToProps)(ProductPage)