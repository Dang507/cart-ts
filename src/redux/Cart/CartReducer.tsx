import { Dictionary } from "../../Models/dictionary";
import { CartProduct } from "../../Models/IQuantity";

export interface CartState {
    products: Dictionary<CartProduct>
}
const intial: CartState={
    products:{}
}
export function CartReducer (state=intial,action:CartAction)
