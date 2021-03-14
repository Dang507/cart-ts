import { type } from 'node:os';
import React from 'react'
import IProduct from '../../Models/IProduct'
import {connect } from 'react-redux';
import Product from './Product';



 export type AddProductToCart=(Product:IProduct, item: number ) =>void;

  interface StateToProps {
      product: IProduct[];
      filteredSizes: Set<string>;
  } 
  interface DispatchToProps {
  addToCart: AddProductToCart;
  }



const mapStateToProps= (state)=>({

  
    

})
const mapDispatchToProps =()=>({

})
export type ProuductContainer = StateToProps & DispatchToProps;
export default connect (mapStateToProps,mapDispatchToProps)(Product)