import { Dispatch } from 'redux';
import { Action } from 'redux'
import IProduct from '../../Models/IProduct';
import CartProduct from '../../Models/IQuantity'
export enum CartType {
  ADD_PRODUCT = " ADD",
  REMOVE_PRODUCT = " REMOVE"

}

export class AddProductAction implements Action {
  public readonly type: CartType = CartType.ADD_PRODUCT;
  constructor(public product: CartProduct) { }
}

export class RemoveCartProductAction implements Action {
  public readonly type: CartType = CartType.REMOVE_PRODUCT;
  constructor(public product: IProduct, public id: number) { }
}

export const AddProductToCart = (product: IProduct, quantity: number) => {
  const ProductToCart: CartProduct = {
    ...product,
    itemIQuantity: quantity,
  };
  
  return new AddProductAction(ProductToCart);
  
}

export const RemoveProductToCart = (product: IProduct, id: number) => (dispatch: Dispatch) => {
  dispatch(new RemoveCartProductAction(product, id));


}
export type CartAction = AddProductAction | RemoveCartProductAction;