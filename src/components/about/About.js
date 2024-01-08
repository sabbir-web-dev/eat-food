import { BsArrowRightShort } from "react-icons/bs";
import { IoIosNotificationsOutline } from "react-icons/io";
import React, { useState } from "react";
import "./About";
import "./about.css";
import aboutData from "../../fackeData/aboutContent";

function About() {
  const [showDta, setShowData] = useState(aboutData.map(() => false));
  const hendleShow = (index) => {
    const dataCheack =  [...showDta];
    dataCheack[index] = !dataCheack[index]
    setShowData(dataCheack)

  }
  return (
    <div className="about-wrap padding">
      <h2>Why you Choose us</h2>
      <p>
        Lorem ipsum dolor sit amet rerum cupiditate, libero nihil aliquid ipsum,{" "}
        <br />
        recusandae qui voluptatum impedit omnis. Qui, repudiandae nisi.
      </p>
      <div className="col-3">
        {aboutData.map((about,index) => {
          const { img, headding, content, id } = about;
          const text = `${content.slice(0, 120)} ....`;
          const fullText = content;
          const show = showDta[index]
          return (
            <div key={id} className="about-content">
              <div className="about-img">
                <img src={img} alt="" />
              </div>
              <div className="content">
                <div className="">
                  <IoIosNotificationsOutline
                    className={`ab-icon ${show ? "green" : ""}`}
                  />
                </div>
                <div className="content-right">
                  <h4>{headding}</h4>
                  <p> {show ? fullText : text}</p>
                  <h5
                    className={`seemore ${show ? "red-color" : ""}`}
                    onClick={() => hendleShow(index)}
                  >
                    {show ? "See less" : "See More"}{" "}
                    <BsArrowRightShort
                      className={`right-icon ${show ? "red" : ""}`}
                    />
                  </h5>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default About;
