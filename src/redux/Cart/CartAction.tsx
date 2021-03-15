import { Dispatch } from 'redux';
import {Action} from 'redux'
import IProduct from '../../Models/IProduct';
 import CartProduct from '../../Models/IQuantity'
 export enum CartTypes {
     ADD_PRODUCT="[CART_PRODUCT] ADD",
     REMOVE_PRODUCT="[CART_PRODUCT] REMOVE"

 }
  
 export class AddProductAction implements Action {
    public readonly type: CartTypes = CartTypes.ADD_PRODUCT;
    constructor(public product: CartProduct) {}
  }
  
  export class RemoveCartProductAction implements Action {
    public readonly type: CartTypes = CartTypes.REMOVE_PRODUCT;
    constructor(public product: CartProduct, public id: number) {}
  }

 export const AddProductToCart=(product:IProduct,quantity:number)=>{
    const ProductToCart: CartProduct = {
        ...product,
        itemIQuantity:quantity
      };
      return new AddProductAction(ProductToCart);
 }

 export const RemoveProductToCart = (product:CartProduct,id:number) => (dispatch:Dispatch)=>{
     dispatch(new RemoveCartProductAction(product,id));


 }
export type CartAction= AddProductAction & RemoveCartProductAction;