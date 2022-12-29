import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../Redux/cartSlice";


export default function Items() {
 
  const data= useSelector((state)=> state.allData.productItem)
  console.log(data)
  const dispatch=useDispatch();
  

  return (
    <>
   
      <div className="headline">
        <h1>Top selling-Summer</h1>
      </div>
      <div
        className="row"
        style={{
          display: "flex",
          flexWrap: "wrap",
          marginTop: "5px",
          paddingRight: "80px",
        }}
      >
        {data.map((element) => {
          return (
            <div className="item" key={element.id}>
              <div className="itemCard">
                <img src={element.image} alt="" />
              </div>
              <div className="itemBtn">
              <button className="btn" onClick={()=> dispatch(addToCart(element))}> {element.btn}</button>
             
              </div> 
              <h5 className="paragraph">{element.para} </h5>
              <h5 className="price">Rs {element.price}</h5>
              </div>
          );
        })}
      </div>
    </>
  );
}
