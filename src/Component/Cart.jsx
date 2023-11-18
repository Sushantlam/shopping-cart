import React, { useEffect, useReducer } from "react";
import "./nav.css";
import { BsPlus } from "react-icons/bs"
import { AiOutlineMinus } from "react-icons/ai"
import { useState } from "react";
import item from "../data";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { FaMinus, FaPlus, FaTrash } from "react-icons/fa"
import { checkout, decreaseQuantity, getCartTotal, increaseQuantity, removeItem } from "../Redux/cartSlice";



export default function Cart() {


  // const [first, setfirst] = useState()

  // const increment = (id) => {
  //   const updateQuantity = data.find((item) => item.id === id && item.Qty++)
  //   console.log(updateQuantity)
  //   setfirst({ ...first, updateQuantity })
  // }

  // const decrement = (id) => {
  //   const updateQuantity = data.find((item) => item.id === id && item.Qty--)
  //   console.log(updateQuantity)
  //   setfirst({ ...first, updateQuantity })
  // }

  // const TotalPrice = data.reduce(
  //   (InitialPrice, selectedItem) =>
  //     InitialPrice + selectedItem.qty * selectedItem.price,
  //   0
  // );
  // console.log(TotalPrice)

  const { cart, totalProduct, totalPriceBeforeTax } = useSelector((state) => state.allData)



  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>

      {console.log(totalProduct)}
      {cart.length === 0 ? (
        <div id="cartBackground">
          <div className="sorry"> Sorry !! No Items Added In this cart</div>
          <Link id="BackLink" to="/">
            <button id="btnBack"> Go to Shop</button>
          </Link>
        </div>) :

       
<div className="totalContent">
  
  <div className="cartFelx">

 
             <div className="cartConatiner">
              <strong className="cartLength">{cart.length} Items on Cart</strong>
              <hr />

              {
                cart.map((e) => {
                  console.log(e);
                  return (


                    <div className="productImage" key={e.id}>
                      <div className="image">
                        <img src={e.image} alt="photo" />


                      </div>

                      <div className="handle">
                        <button className="handleButton"  ><FaMinus onClick={() => dispatch(decreaseQuantity(e.id))} className="img" style={{ color: "gray" }} size={10} /></button>
                        <div className="input">{e.Qty}</div>
                        <button className="handleButton"  ><FaPlus onClick={() => dispatch(increaseQuantity(e.id))} className="img" style={{ color: "gray" }} size={10} /></button>
                      </div>
                      <div className="handle">
                            <div className="input">{e.price * e.Qty}</div>
                           </div>


                      <div className="total">
                        <FaTrash className="img" onClick={() => dispatch(removeItem(e.id))} style={{ color: "gray" }} size={14} />
                      </div>

                    </div>

                  )

                })
              }

           


            </div> 
            <div className="cartRight">
              <div className="priceSummary">
                <div className="priceFlex" >
                <h3>No. of Product</h3>
                <h5>{totalProduct}</h5>
                
                </div>
                <div className="priceFlex" >
                <h3>No. of Item</h3>
                <h5>{totalPriceBeforeTax}</h5>
               
                </div>
                <button className="checkOut" onClick={()=> dispatch(checkout())} >Check Out</button>
                  
              </div>
            </div>
            </div> 
</div>
         

        




      }



    </>
  );
}
