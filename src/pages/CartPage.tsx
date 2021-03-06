import  { useState } from "react";
import CartItemContainer from "../Components/Cart/CartItemContainer";
import CartProduct from "../Models/IQuantity";
import { CartProp } from "../pages/CartContainer";
import "./CartPage.css";




const CartPage = (CartProp: CartProp) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const ItemInCart = [];
  for (const a in CartProp.ProductCart) {
    ItemInCart.push(CartProp.ProductCart[a]);
  }
  const item = ItemInCart.reduce((sum: number, items: CartProduct) => {
    return sum + items.itemIQuantity;
  }, 0);
  const cart = isOpen ? "cart-page" : "cart-page cart-page--cart-close ";
  const bags = isOpen ? "bags" : "bags bags--cart-close ";
  const itemquantity = isOpen  ? "item-quantity"   : "item-quantity item-quantity--cart-close";

  return (
    <div className={cart}>
      <div className="cart-close-button" onClick={handleToggle}>
        X
      </div>
      <div className="cart-content">
        <div className="cart-header">
          <div className={bags} onClick={handleToggle}>
            <span className={itemquantity}>{item}</span>
          </div>
          <span className="header-title">Cart</span>
        </div>
        <div className="cart-item" >
          {ItemInCart.map((value, index) => (
            <CartItemContainer product={value} id={index} />
          ))}
       
        </div>
      </div>
      
    </div>
  );
};

export default CartPage;
