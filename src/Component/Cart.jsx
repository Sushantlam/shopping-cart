import React, { useReducer } from "react";
import "./nav.css";
import {BsPlus} from "react-icons/bs"
import {AiOutlineMinus} from "react-icons/ai"
import { useState } from "react";
import item from "../data";
import { Link } from "react-router-dom";



export default function Cart({ data }) {


const [first, setfirst] = useState()

const increment =(id)=>
{
  const updateQuantity= data.find((item) => item.id === id && item.Qty++ )
  console.log(updateQuantity)
 setfirst({...first, updateQuantity})
}

const decrement =(id)=>
{
const updateQuantity= data.find((item) => item.id === id && item.Qty-- )
 console.log(updateQuantity)
setfirst({...first, updateQuantity})
}

const TotalPrice = data.reduce(
  (InitialPrice, selectedItem) =>
    InitialPrice + selectedItem.qty * selectedItem.price,
  0
);


   return (
    <>
    {data.length === 0 && (
        <div id="cartBackground">
          <div> Sorry !! No Items Added In this cart</div>
          <Link id="BackLink" to="/">
            <button id="btnBack">&laquo; Go to Shop</button>
          </Link>
        </div>)}
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
               <button  onClick={()=>decrement(e.id)}>-</button>
              <div className="input">{e.Qty}</div>
                <button onClick={()=>increment(e.id)}>+</button>
               </div>

               <div className="price">
                <p>{e.price*e.Qty}</p>
               </div>

               <hr />
               

               

  
               </div>
               
               
           
                )
                

              }
              )
           
              

            }
           
           <div className="total">
                <p>{TotalPrice} </p>
               </div>

         
      </div>


       
    </>
  );
    }
