import React, { Component } from "react";
import IProduct from "../../Models/IProduct";

import {CartGroupProp} from '../Cart/CartGroupContainer'




const CartGroup = (CartGroup: CartGroupProp) => {

  return (
    <div className="cart-item">
      <div className="image">
        <img  >

        </img>

      </div>
      <div className="details">
        <p className="title">{CartGroup.product.Title}</p>

      </div>

    </div>
  );
}

 


export default CartGroup;
