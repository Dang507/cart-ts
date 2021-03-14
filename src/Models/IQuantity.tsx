import IProduct from "./IProduct";


export  interface IQuantity {
    itemIQuantity: number;
    
}

export interface CartProduct extends IQuantity, IProduct {}
