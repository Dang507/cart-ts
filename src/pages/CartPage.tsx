import React, { useState } from 'react'
import CartGroup from '../Components/Cart/CartGroup'
import CartGroupContainer from '../Components/Cart/CartGroupContainer'
import { ProuductProp } from '../Components/Product/ProductContainer'
import IProduct from '../Models/IProduct'
import CartProduct from '../Models/IQuantity'
import ProductCart,  {CartProp}  from '../pages/CartContainer'





const CartPage = (CartProp: CartProp) => {



  //  const [isOpen,setIsOpen]=useState(true)
  //   const toggle = () => {
  //      setIsOpen((pre:State)=>({isOpen: !pre.isOpen}))
  //     }
  const cartproducts: any[] = [];
  // for (const a in ProductCart) {


  // }
   
  return (
    <>
      <div className="cart-btn" >x</div>
      <div className="cart-content">
        <div className="cart-group">
          {cartproducts.map((value, index) => <CartGroupContainer product={value} key={index} />)} 

        </div>
      </div>



    </>
  )
}

export default CartPage
