import React, { Component, useState } from "react";
import IProduct from "../../Models/IProduct";
import "./CartGroup.css";
import { CartGroupProp } from "../Cart/CartGroupContainer";

const CartGroup = (CartGroups: CartGroupProp) => {
  return (
    <div className="cart-item">
      <div
        className="remove-btn"
        onClick={() =>
          CartGroups.removeProductCart(CartGroups.product, CartGroups.id)
        }
        title={CartGroups.product.Title}>

      </div>
      <div className="cart-img">
        <img src={CartGroups.product.Image}></img>
      </div>

      <div className="detail">
        <p className="title">{CartGroups.product.Title}</p>
        <p className="cart-itemquantity"> {CartGroups.product.itemIQuantity}</p>
      </div>
    </div>
  );
};

export default CartGroup;
