import React, { useState } from "react";

export default function Items({handleSumbit, item}) {
 

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
        {item.map((element) => {
          return (
            <div className="item">
              <div className="itemCard">
                <img src={element.image} alt="" />
              </div>
              <div className="itemBtn">
              <button className="btn"onClick={()=>handleSumbit(element.id)}> {element.btn}</button>
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
