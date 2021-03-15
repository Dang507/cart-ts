import React, { Component } from "react";
import IProduct from "../../Models/IProduct";
import { CartGroupContainer} from "./CartGroupContainer";


interface State {
  product:IProduct;
}

const CartGroup:React.FC<State>=()=> {
 
    return (
    <div className="cart-item">
      <div className="image">
        <img src={require(``)} alt={product.title} title={product.title} />
      </div>
      <div className="details">
        <p className="title">{product.title}</p>
       
      </div>
     
    </div>
    );
  }

 
}

export default CartGroup;
