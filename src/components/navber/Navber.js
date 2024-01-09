import { CgShoppingCart } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/ImgManaz";

import "./Navber.css";
import useFoodContext from "../../hook/useFoodHook";

function Navber() {
  const { logo2 } = icons;
  const [navSticy,setNavSticy] = useState(false);
  const {selectData} = useFoodContext()

    useEffect(() => {
      const handleScroll = () => {
        if(window.scrollY > 200){
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
  return (
    <nav className={`nav-wrap padding ${navSticy ? " fiext" : " "} `}>
      <Link to="/" className="logo center">
        <img src={logo2} alt="logo" />
      </Link>
      <ul>
        <Link to="" className="link">
          <div className="card-wrap">
          <CgShoppingCart />
          <span className="card-count">{selectData.length}</span>
          </div>
        </Link>
        <Link to="/login" className="link">
          Login
        </Link>
        <Link to="/login" className="link btn">
          Sign In
        </Link>
      </ul>
    </nav>
  );
}

export default Navber;
