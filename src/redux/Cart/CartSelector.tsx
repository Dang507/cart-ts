import { createSelector } from "reselect";

import { AppState } from "../rootReducer";
import { CartState } from "./CartReducer";

const getCart = (state: AppState) => state.cartState;
export const getProductToCart = createSelector(
  getCart,
  (cart: CartState) => cart.products
);
