import { CgShoppingCart } from "react-icons/cg";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { icons } from "../../assets/ImgManaz";

import "./Navber.css";
import useFoodContext from "../../hook/useFoodHook";
import { auth } from "../../firebase/firebase";

function Navber() {
  const { logo2 } = icons;
  const [navSticy, setNavSticy] = useState(false);
  const { selectData,user,setSignUp} = useFoodContext();
  const {name,signIn} = user


  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setNavSticy(true);
      } else {
        setNavSticy(false);
      }
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const {getUser} = useFoodContext();

  const hendleSignOut = () => {
    auth.signOut()
    .then(res => {
      getUser(false);
    })
    .catch(err => console.log(err.message))
  }
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
        {signIn ? (
          <div className="progile-wrap" onClick={hendleSignOut} >
            {name && <h1>{name[0]}</h1>}
          </div>
        ) : (
          <div className="l-wrap">
            <Link to="/login" className="link">
              Login
            </Link>
            <Link to="/login" onClick={() =>  setSignUp(true)} className="link btn">
              Sign In
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navber;
