import React, { useState } from 'react'
import CartGroup from '../Components/Cart/CartGroup'
import CartGroupContainer from '../Components/Cart/CartGroupContainer'
import { ProuductProp } from './ProductContainer'

import IProduct from '../Models/IProduct'
import CartProduct from '../Models/IQuantity'
import ProductCart,  {CartProp}  from '../pages/CartContainer'



interface State {
  isOpen: boolean;
}

const CartPage = (CartProp:CartProp,state:State) => {

     const [isOpen,setIsOpen]=useState(true)

  
    const toggle = () => {
      setIsOpen(!isOpen)
      }


  const cartproducts=[] ;
  for (const a in ProductCart) 
     cartproducts.push(CartProp.ProductCart[a])

  const item= cartproducts.reduce((sum:number,items:CartProduct)=>{
    return sum + items.itemIQuantity
  },0)
  
    
  
   
  return (
    <>
      <div className="cart-btn"onClick={toggle} >x</div>
      <div className="cart-content">
      <div  >
              <span >{item}</span>
            </div>
        <div className="cart-group">
          {cartproducts.map((value, index) => <CartGroupContainer product={value} key={index} />)} 

        </div>
      </div>



    </>
  )
}

export default CartPage
