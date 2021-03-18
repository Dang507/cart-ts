import { type } from "node:os";
import React from "react";
import IProduct from "../Models/IProduct";
import { connect } from "react-redux";
import Product from "../Components/Product/Product";
import ProductPage from "./ProductPage";
import { AddProductToCart } from "../redux/Cart/CartAction";
import { AppState } from "../redux/rootReducer";


export type AddProductToCart = (Product: IProduct, quantity: number) => void;

interface StateToProps {
  product: IProduct[];
}
interface DispatchToProps {
  addToCart: AddProductToCart;
  
}

const mapStateToProps= (state:any):StateToProps =>{

  
   return {
     ...state,
   }

}
const mapDispatchToProps = (dispatch:any): DispatchToProps => ({
  addToCart: (product: IProduct, quantity: number) => dispatch(AddProductToCart(product, quantity)),
});
export type ProuductProp = StateToProps & DispatchToProps;
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);
