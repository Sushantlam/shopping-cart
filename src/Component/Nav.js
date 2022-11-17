import React from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {BsCartFill} from "react-icons/bs"


export default function Nav({ image, img }) {
  return (
    <>
      <div className="nav">
         
        <div className="photo">
         <Link to="/"> <img src={image} alt="" srcset="" /></Link>
       </div>
        
        <div className="search">
          <Link to="/cart"><BsCartFill className="img"  style={{marginRight: "1.8rem", height: "100%"}}/>
          <p className="cart">7</p></Link>
          
          
        </div>
        
      </div>
    </>
  );
}
