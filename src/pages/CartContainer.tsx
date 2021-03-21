import { connect } from "react-redux";
import IDictionary from "../Models/IDictionary";
import IProduct from "../Models/IProduct";
import CartProduct from "../Models/IQuantity";
import { AddProductToCart } from "../redux/Cart/CartAction";
import { AppState } from "../redux/rootReducer";
import CartPage from '../pages/CartPage'
import { getProductToCart } from "../redux/Cart/CartSelector";

export type addProductCartDispatchProp = (product: IProduct, quantity: number) => void;

interface DisPatchProp {
    addProductCart: addProductCartDispatchProp;
}
interface StateProp {
    ProductCart: IDictionary<CartProduct>
}

export type CartProp = DisPatchProp & StateProp

const mapDispatchToProps = (dispatch: any): DisPatchProp => ({
    addProductCart: (product: IProduct, quantity: number) => dispatch(AddProductToCart(product, quantity))
});

const mapStateToProps = (state: AppState): StateProp => ({
    ProductCart: getProductToCart(state)
})

export default connect(mapStateToProps, mapDispatchToProps)(CartPage)
