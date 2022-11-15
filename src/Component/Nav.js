import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {BsCartFill} from "react-icons/bs"


export default function Nav({ image, img }) {
  return (
    <>
      <div className="nav">
         
        <div className="photo">
          <img src={image} alt="" srcset="" />
       </div>
        
        <div className="search">
          <Link to="/cart"><BsCartFill className="img"  style={{marginRight: "1.8rem", height: "100%"}}/>
          <p className="cart">7</p></Link>
          
          
        </div>
        
      </div>
    </>
  );
}
