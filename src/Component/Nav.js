import React, { useEffect } from "react";
import "./nav.css";
import { Link } from "react-router-dom";
import {BsCartFill} from "react-icons/bs"
import { getCartTotal } from "../Redux/cartSlice";
import { useDispatch, useSelector } from "react-redux";


export default function Nav({image}) {
  const { cart, totalProduct } = useSelector((state) => state.allData)

  

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);
  return (
    <>
      <div className="nav">
         
        <div className="photo">
          <img src={image} alt="" srcset=""/>
       </div>
        
        <div className="search">
          <Link to="/cart"><BsCartFill className="img"  size={23} style={{marginRight: "1.6rem", height: "100%", color:"white"}}/>
          <p className="cart">{totalProduct}</p></Link>
          
          
        </div>
        
      </div>
    </>
  );
}
