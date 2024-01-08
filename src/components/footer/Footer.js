import React from "react";
import { icons } from "../../assets/ImgManaz";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div className="footer-wrap padding">
      <div className="footer-top">
        <div className="col2">
          <img src={icons.logo} alt="" />
        </div>
        <div className="col-2 around">
          <ul>
            <Link to="" className="footer-link">
              About Online Food
            </Link>
            <Link to="" className="footer-link">
              Read Out blog
            </Link>
            <Link to="/customer-location" className="footer-link">
              Sign Uo to delever
            </Link>
            <Link to="" className="footer-link">
              Add yout Restuant
            </Link>
          </ul>
          <ul>
            <Link to="" className="footer-link">
              Get Help
            </Link>
            <Link to="" className="footer-link">
              Read Faq
            </Link>
            <Link to="/customer-location" className="footer-link">
              Vew of cahes
            </Link>
            <Link to="" className="footer-link">
              Restuant near me
            </Link>
          </ul>
        </div>
      </div>

      <div className="footer-bootm">
        <p>Coppyright &copy; {date}  Eat Food</p>
        <div className="">
          <p>Privacy Policy</p>
          <p>Tems of Use</p>
          <p>pricing</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
