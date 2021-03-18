
import {AppState} from '../rootReducer'
import {ProductState} from './ProductReducer'
import { createSelector } from "reselect";
const getProductState = (state: AppState) => state.productState;

export const getProducts = createSelector(
  getProductState,
  (state: ProductState) => state.products,
);