import React from "react";
import "./Card.css";
import { Link } from "react-router-dom";

function Card({ item }) {
  const { key, name, price, detels, img } = item;
  return (
    <Link className="card-link" to={`/food/${key}`} state={{key}} key={key}>
      <div className="item">
        <div className="item-img">
          <img src={img} alt="" />
        </div>
        <h4>{name}</h4>
        <p>{detels.slice(0, 30)}</p>
        <h3>${price}</h3>
      </div>
    </Link>
  );
}

export default Card;
