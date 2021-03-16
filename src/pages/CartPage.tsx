import React, { useState } from 'react'
import CartGroup from '../Components/Cart/CartGroup'
import CartGroupContainer from '../Components/Cart/CartGroupContainer'
import IProduct from '../Models/IProduct'
import CartProduct from '../Models/IQuantity'

 const Cart=() =>{

    const [isOpen,setIsOpen]=useState(true)
    const toggle = () => {
       setIsOpen((pre:State)=>({isOpen: !pre.isOpen}))
      }
      const cartproducts=[];
      for (const a in cartproducts ){
        cartproducts.push (cartproducts[a]);

        
      }
    return (
        <>
        <div className="cart-btn" onClick={toggle}>x</div>
            <div className="cart-content">
            <div className="cart-group">
              {cartproducts.map((value,index)=><CartGroupContainer product={value} key={index}/>)}
                
                </div>
                </div>
                      
        

       </>
    )


export default Cart
