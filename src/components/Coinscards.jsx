import React from "react";
import style from "../style/Cardsrow.module.css";

export default function Coinscards(props) {
  const {
    current_price: price,
    price_change_percentage_24h: percentage,
    image,
    name,
    currencySymbol,
  } = props;

  return (
    <div className={style.cardsRow}>
      <div>
        <img src={image} alt={name} />
      </div>
      <div>
        <p>{name}</p>
      </div>
      <div>
        <p>
          {currencySymbol} {price.toFixed(2)}
        </p>
      </div>
      <div>
        <span style={{ color: percentage > 0 ? "green" : "red" }}>
          {percentage > 0 ? "+" : ""}
          {percentage.toFixed(2)}%
        </span>
      </div>
    </div>
  );
}
