import React, { useReducer } from "react";
import "./nav.css";
import {BsPlus} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"
import { useState } from "react";


// const increment = (product) => {
//   const clickedItem = cartItems.find((el) => el.id === product.id);

//   if (clickedItem) {
//     setCartItems(
//       cartItems.map((el) =>
//         el.id === product.id
//           ? { ...clickedItem, qty: clickedItem.qty + 1 }
//           : el
//       )
//     );
//   } else {
//     setCartItems([...cartItems, { ...product, qty: 1 }]);
//   }
// };
export default function Cart({ data }) {

  const [cart, setCart]=useState([data])
//const clickItem= data.map((e))
    const increment =(id)=>
    {
      cart(eid=>
        eid.map((e)=> e.id===id ? {...eid, Qty:eid.Qty + 1} :eid
        ))
    }


   return (
    <>
       <div className="cartConatiner">
          <div className="cartItem">
            <div className="heading">
              <h3>Product Name</h3>
            </div>
            <div className="Quantity">
              <h3>Quantity</h3>
            </div>
            <div className="price">
              <h3>Total</h3>
            </div>
            </div>
            {
              data.map((e)=>
              {
                   return(
                  <div className="productImage">
                  <div className="image">
                  <img src={e.image} alt="photo" />
                 
                
               </div>
              
               <div className="handle">
               <AiOutlineMinus />
              <div className="input">{e.Qty}</div>
                <button onClick={()=>increment(e.id)}>+</button>
               </div>

               <div className="price">
                <p>{e.price}</p>
               </div>
               <hr />


  
               </div>
               
           
                )

              })
           
              

            }
           
        
         
      </div>


       
    </>
  );
    }
