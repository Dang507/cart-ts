import React, { Component, useState } from "react";
import IProduct from "../../Models/IProduct";
import "./CartItem.css";
import { CartItemProp } from "./CartItemContainer";

const CartItem = (CartGroups: CartItemProp) => {
  return (
    <div className="item">
      <div
        className="remove-icon"
        onClick={() =>
          CartGroups.removeProductCart(CartGroups.product, CartGroups.product.id)
        }
        title={CartGroups.product.Title}>

      </div>
      <div className="cart-img">
        <img src={CartGroups.product.Image}></img>
      </div>

      <div className="detail">
      
        <p className="title">{CartGroups.product.Title}</p>
        <p className = "price">Price:{CartGroups.product.Price}</p>
        <p className="cart-itemquantity">Quantity: {CartGroups.product.itemIQuantity}</p>
      </div>
    </div>
  );
};

export default CartItem;
