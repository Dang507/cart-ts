
import IProduct from "../Models/IProduct";
import { connect } from "react-redux";
import ProductPage from "./ProductPage";
import { AddProductToCart } from "../redux/Cart/CartAction";

export type AddProductToCart = (Product: IProduct, quantity: number) => void;


interface StateToProps {
  product: IProduct[];
}
interface DispatchToProps {
  addToCart: AddProductToCart;
  
}

const mapStateToProps= (state:StateToProps)=>{
  return {
  ...state,
    
  }
}


const mapDispatchToProps = (dispatch:any): DispatchToProps => ({
  addToCart: (product: IProduct, quantity: number) => dispatch(AddProductToCart(product, quantity)),
});
export type ProuductProp = StateToProps & DispatchToProps;
export default connect(mapStateToProps,mapDispatchToProps)(ProductPage);
