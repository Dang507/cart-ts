import React from 'react'
import { combineReducers, Reducer } from "redux";
import { CartState } from './Cart/CartReducer';
import { FilterState } from './FilterSize/FilterReducer';
import { productReducer, ProductState } from './Product/ProductReducer';

export interface AppState{
    cartState: CartState;
    productState: ProductState;
    filterState: FilterState;
}

export const rootReducer : Reducer<AppState>=combineReducers<AppState>({
     productState:productReducer,
     cartState:
  
});