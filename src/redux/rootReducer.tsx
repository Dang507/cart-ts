
import { combineReducers, Reducer } from "redux";
 import { CartReducer, CartState } from './Cart/CartReducer';

import { productReducer, ProductState } from './Product/ProductReducer';

export interface AppState{
     cartState: CartState;
     productState: ProductState;
  
}

export const rootReducer : Reducer<AppState>=combineReducers<AppState>({
     productState:productReducer,
     cartState: CartReducer
}); 