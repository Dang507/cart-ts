import { Dictionary } from "../../Models/dictionary";
import IProduct from "../../Models/IProduct";
import { CartProduct } from "../../Models/IQuantity";
import { AppState } from "../../redux/rootReducer";

type  addCartProductDispatchProp= (product:IProduct,quantity:number)=>void;

interface DispatchProp {
    addCartProduct:addCartProductDispatchProp;
}
interface StateProp {
    cartProducts:Dictionary<CartProduct>
}

const mapStateToProps=(state:AppState):StateProp=>({

})
export type CartContainer = StateProp & DispatchProp;