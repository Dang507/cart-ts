import React, { useState } from 'react'
import CartGroupContainer, { CartGroupProp } from '../Components/Cart/CartGroupContainer'
import { ProuductProp } from './ProductContainer'

import IProduct from '../Models/IProduct'
import CartProduct from '../Models/IQuantity'
import ProductCart, { CartProp } from '../pages/CartContainer'

import CartGroup from '../Components/Cart/CartGroup'

import './CartPage.css'
const CartPage = (CartProp: CartProp) => {

  const [isOpen, setIsOpen] = useState(false)


  const toggle = () => {
    setIsOpen(!isOpen)
  }


  const productItemToCart = [];
  for (const a in ProductCart) {
    productItemToCart.push(CartProp.ProductCart[a])
  }
  const item = productItemToCart.reduce((sum: number, items: CartProduct) => {
    return sum
  }, 0)

  return (
    <>
      <div className="cart-btn" onClick={toggle} >x</div>
      <div className="cart-content" >

        <span >{item}</span>

        <div className="cart-group">
          {productItemToCart.map((value, index) => {

            <CartGroupContainer product={value} key={index} />
          }
          )}

        </div>
      </div>



    </>
  )
}

export default CartPage
