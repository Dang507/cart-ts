import React, { Component, useState } from "react";
import IProduct from "../../Models/IProduct";

import {CartGroupProp} from '../Cart/CartGroupContainer'




const CartGroup = (CartGroups: CartGroupProp) => {

  
  

  const [Del,setDel]=useState(false)
  const toggleDel =()=> {
    setDel(!Del)
  }

  if (!CartGroups.product) {
    return (<div> </div>);
  }
  
  return (
    <div className="cart-item" onClick={toggleDel}>
      <div className="remove-btn" onClick={()=>CartGroups.removeCartItem(CartGroups.product,CartGroups.key)}>
     
      </div>
      <div className="details">
        <p className="title">{CartGroups.product.Title}</p>
        <div className="img">
          <img src={CartGroups.product.Image}></img>
        </div>
        <div className="cart-name"> {CartGroups.product.Name}</div>
      </div>

    </div>
  );
}

 


export default CartGroup;
