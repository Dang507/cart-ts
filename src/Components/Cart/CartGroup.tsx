import React, { Component } from "react";
import IProduct from "../../Models/IProduct";
import { CartContainer} from "./CartGroupContainer";




const CartGroup:React.FC<CartContainer>=()=> {
 
    return (
    <div className="cart-item">
      <div className="image">
        <img src= >
          
        </img>

      </div>
      <div className="details">
        <p className="title">{product.title}</p>
       
      </div>
     
    </div>
    );
  }

 
}

export default CartGroup;
