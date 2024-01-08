import React from "react";
import './Card.css'

function Card({ item }) {
  const { key, name, price, detels, img } = item;
  return (
    <div key={key} className="item">
      <div className="item-img">
        <img src={img} alt="" />
      </div>
      <h4>{name}</h4>
      <p>{detels.slice(0, 30)}</p>
      <h3>${price}</h3>
    </div>
  );
}

export default Card;
