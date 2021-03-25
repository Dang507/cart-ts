import Dictionary from "../../Models/IDictionary";
import CartProduct from "../../Models/IQuantity";
import {
    CartAction,
    CartType,
    AddProductAction,
    RemoveCartProductAction,
} from "./CartAction";

export interface CartState {
    products: Dictionary<CartProduct>;
}
const intial: CartState = {
    products: {},
};
export function CartReducer(
    intials: CartState = intial,
    action: CartAction ): CartState {

    switch (action.type) {
        case CartType.ADD_PRODUCT: {
            const product = (action as AddProductAction).product;

            if (intials.products[product.id]) {
                product.itemIQuantity += intials.products[product.id].itemIQuantity;
            }
            return {
                products: {
                    ...intials.products,
                    [product.id]: product,
                   
                   
                },
            };
        }

        case CartType.REMOVE_PRODUCT: {
            const id = (action as RemoveCartProductAction).id;
            const products = { ...intials.products };
            delete products[id];

            return {
                products: {
                    ...products,
                },
            };
        }

        default:
            return intials;
    }
}
