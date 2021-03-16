
import { connect } from "react-redux";
import IProduct from "../../Models/IProduct";
import CartProduct from "../../Models/IQuantity";
import { RemoveProductToCart } from "../../redux/Cart/CartAction";
import { AppState } from "../../redux/rootReducer";
import CartGroup from "./CartGroup";

type removeCartItemDispatchProp = (productcart: CartProduct, id: number) => void;

interface DispatchProp {
    removeCartItem: removeCartItemDispatchProp;
}
interface Prop {
    product: CartProduct;
    key: number;
}
export type CartContainer = DispatchProp & Prop;

const mapDispatchToProps = (dispatch:any): DispatchProp => ({
    removeCartItem: (productcart: CartProduct, id: number) => dispatch (RemoveProductToCart(productcart,id)),
   
})

export default connect(null,mapDispatchToProps)(CartGroup)
