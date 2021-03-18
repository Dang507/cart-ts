import React from 'react'
import  Dictionary  from '../../Models/IDictionary';
import IProduct from '../../Models/IProduct';
import  CartProduct  from '../../Models/IQuantity';
import { ProductAction,ProductActionType } from './ProductAction';

export interface ProductState {
  products: IProduct[];
}
const initialState: ProductState = {
  products: [],
};
export function productReducer (state:ProductState=initialState, action:ProductAction)
{
  switch (action.type) {

    case ProductActionType.PRODUCT_FETCHED:

      return {
        ...state,
        products: action.products,
      };

    default:
      return state;
  }
}

