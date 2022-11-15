import React from "react";
import { Link } from "react-router-dom";

export default function Item({ photo, price, para, id, btn}) {


  return (
    <>
      <div className="item">
        <div className="itemCard">
          <img src={photo} alt="" />
          
        </div>
        <h3 className="paragraph">
            {para}   </h3>
          <h3 className="price">{price}</h3>
           <button > {btn}</button>
      </div>
    </>
  );
}
