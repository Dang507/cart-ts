import  Dictionary  from "../../Models/Dictionary";
import  CartProduct  from "../../Models/IQuantity";
import {CartAction,CartTypes,AddProductAction} from './CartAction'

export interface CartState {
    products: Dictionary<CartProduct>
}
const intial: CartState={
    products:{}
}
export function CartReducer (state:CartState=intial,action:CartAction):CartState {
    switch (action.type){
        case CartTypes.ADD_PRODUCT:
            const product = (action as AddProductAction).product
            if (state.products[product.Image]){
                product.itemIQuantity += state.products[Image].item
            }
        }


        case CartTypes.REMOVE_PRODUCT:
          
            
        

    }


}
