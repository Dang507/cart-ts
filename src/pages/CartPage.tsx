import React, { useState } from 'react'
import CartGroup from '../Components/Cart/CartGroup'
import IProduct from '../Models/IProduct'
import CartProduct from '../Models/IQuantity'

 const Cart=() =>{

    const [isOpen,setIsOpen]=useState(true)
    const toggle = () => {
       setIsOpen((pre:State)=>({isOpen: !pre.isOpen}))
      }
      const cartproducts=[];

    return (
        <>
        <div className="cart-btn" onClick={toggle}>x</div>
            <div className="cart-content">
            <div className="cart-group">
                {cartproducts.map((value:IProduct,index:CartProduct)=>
                return (
                <CartGroup product={value}, key={index}
                
                )
                )
                      
        

       </>
    )


export default Cart
