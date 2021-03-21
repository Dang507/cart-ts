import React, { useState } from "react";
import CartGroupContainer, {
  CartGroupProp,
} from "../Components/Cart/CartGroupContainer";
import { ProuductProp } from "./ProductContainer";

import IProduct from "../Models/IProduct";
import CartProduct from "../Models/IQuantity";
import ProductCart, { CartProp } from "../pages/CartContainer";

import CartGroup from "../Components/Cart/CartGroup";

import "./CartPage.css";
const CartPage = (CartProp: CartProp) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const productItemToCart = [];
  for (const a in ProductCart) {
    productItemToCart.push(CartProp.ProductCart[a]);

  }
  const item = productItemToCart.reduce((sum: number, items: CartProduct) => {
    return sum
  }, 0);
  const cart = isOpen ? "cart-page" : "cart-page cart-page--cart-close ";
  const bag = isOpen ? "bags" : "bags bags--cart-close ";

  return (
    <>
      <div className={cart}>
        <div className="cart-close-btn" onClick={handleToggle}>
          x
        </div>
        <div className="cart-content">
          <div className="cart-header" >
            <div  className={bag} onClick={handleToggle}>
            <span >{item}</span>
            </div>
            <span className="cart-title">Cart</span>
          </div>

          <div className="cart-group">
            {productItemToCart.map((value, index) => {
              <CartGroupContainer product={value} key={index} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default CartPage;
