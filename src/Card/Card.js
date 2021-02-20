import React from "react";

import "./Card.css";

function Card({ src, title, price, description }) {
  return (
    <div className="card">
      <img src={src} alt={title} />

      <div className="card__info">
        <h2>{title}</h2>
        <p>{description}</p>
        <h2>{price}</h2>
      </div>
    </div>
  );
}

export default Card;
