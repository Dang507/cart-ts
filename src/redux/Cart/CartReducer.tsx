import Dictionary from "../../Models/IDictionary";
import CartProduct from "../../Models/IQuantity";
import { CartAction, CartTypes, AddProductAction, RemoveCartProductAction } from './CartAction'

export interface CartState {
    products: Dictionary<CartProduct>
}
const intial: CartState = {
    products:{}
}
export function CartReducer(state: CartState = intial, action: CartAction): CartState {
    switch (action.type) {
        case CartTypes.ADD_PRODUCT: {
            const product = (action as AddProductAction).product;
            if (state.products[product.Image]) {
                product.itemIQuantity += state.products[product.Image].itemIQuantity
            }
            return {
                ...state,
                products: {
                    ...state.products,
                [product.Image]:product,
                }
            }
        }

        case CartTypes.REMOVE_PRODUCT: {
            const id = (action as RemoveCartProductAction).id;
            const products = { ...state.products };
            delete products[id];
            return {
                ...state,
                products,
            }
        }

        default:
            return state;

    }


}


