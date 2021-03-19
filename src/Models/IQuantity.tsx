import IProduct from "./IProduct";


export interface IQuantity {
    itemIQuantity: number;
    
}

export default interface CartProduct extends IQuantity, IProduct {}
