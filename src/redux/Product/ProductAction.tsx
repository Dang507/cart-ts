import { Action } from "redux";
import IProduct from '../../Models/IProduct'

export enum ProductType {
    PRODUCT_FETCHED = "[PRODUCT] fetched",
}
export class ProductFetchedAction implements Action {

    public type: ProductType = ProductType.PRODUCT_FETCHED;
    constructor(public products: IProduct[]) { }
}
export type ProductAction = ProductFetchedAction;




