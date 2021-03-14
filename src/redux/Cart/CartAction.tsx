import {Action} from 'redux'
 import {CartProduct} from '../../Models/IQuantity'
 export enum CartProductActionTypes {
     ADD_PRODUCT="[CART_PRODUCT] ADD",
     REMOVE_PRODUCT="[CART_PRODUCT] REMOVE"

 }
 export function AddCartProductAction = (Action:Action,CartProduct:CartProduct)=>{

     CartProductActionTypes.ADD_PRODUCT,    
     
 }