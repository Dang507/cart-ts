import IProduct from "../../Models/IProduct";
import CartProduct from "../../Models/IQuantity";

import { RemoveProductToCart } from '../../redux/Cart/CartAction'
import {connect} from 'react-redux'
import CartItem from "./CartItem";
type RemoveProductToCartProp = (product: CartProduct, id: number) => void;

interface DispatchProp {
    removeProductCart: RemoveProductToCartProp;
}
interface StateProp {
    product: CartProduct;
    id: number;
}
export type CartItemProp = DispatchProp & StateProp

const mapDispatchToProps = (dispatch: any): DispatchProp => ({
    removeProductCart:(cartproduct: CartProduct, id: number)=> dispatch(RemoveProductToCart(cartproduct, id)),
})

export default connect (null,mapDispatchToProps)(CartItem)