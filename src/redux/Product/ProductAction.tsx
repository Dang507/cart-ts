import { Action } from "redux";
import IProduct from '../../Models/IProduct'

export enum ProductActionType {
    PRODUCT_FETCHED = "[PRODUCT] fetched",
}
export class ProductFetchedAction implements Action {

    public type: ProductActionType = ProductActionType.PRODUCT_FETCHED;
    constructor(public products: IProduct[]) { }
}
export type ProductAction = ProductFetchedAction;

export const setProducts = (product: IProduct[]) => {
    return new ProductFetchedAction(product)
}


