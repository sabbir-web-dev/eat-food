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
  const { selectData, user, getSignUp } = useFoodContext();
  const { name, signIn, img } = user;

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

  const { getUser } = useFoodContext();



  const hendleSignOut = () => {
    auth
      .signOut()
      .then((res) => {
        getUser(false);
        getSignUp(false);
      })
      .catch((err) => console.log(err.message));
  };
  return (
    <nav className={`nav-wrap padding ${navSticy ? " fiext" : " "} `}>
      <Link to="/" className="logo center">
        <img src={logo2} alt="logo" />
      </Link>
      <ul>
        <Link to="" className="link">
          <div className="card-wrap">
            <Link className="link" to="checkout">
              <CgShoppingCart />
            </Link>
            <span className="card-count">
              {selectData && selectData.length}
            </span>
          </div>
        </Link>
        {signIn ? (
          <div className="progile-wrap" onClick={hendleSignOut}>
            {img ? <img src={img} alt="" /> : name && <h1>{name[0]}</h1>}
          </div>
        ) : (
          <div className="l-wrap">
            <Link to="/login" onClick={() => getSignUp(true)} className="link">
              Login
            </Link>
            <Link
              to="/login"
              onClick={() => getSignUp(false)}
              className="link btn"
            >
              Sign In
            </Link>
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navber;
