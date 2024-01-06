import { CgShoppingCart } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/ImgManaz";

import "./Navber.css";

function Navber() {
  const { logo2 } = icons;
  const [navSticy,setNavSticy] = useState(false);


    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 100){
          setNavSticy(true);
        }else{
          setNavSticy(false)
        }
      }
      window.addEventListener("scroll", handleScroll)

     return () =>{
      window.removeEventListener("scroll", handleScroll)
      }
    },[])
    console.log(navSticy)
  return (
    <nav className="nav-wrap padding ">
      <Link to="/" className="logo center">
        <img src={logo2} alt="logo" />
      </Link>
      <ul>
        <Link to="" className="link">
          <div className="card-wrap">
          <CgShoppingCart />
          <span className="card-count">0</span>
          </div>
        </Link>
        <Link to="" className="link">
          Login
        </Link>
        <Link to="" className="link btn">
          Sign In
        </Link>
      </ul>
    </nav>
  );
}

export default Navber;
