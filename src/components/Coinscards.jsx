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
    <div className={style.parentCardsrow}>
      <div key={props.id} className={style.coinsCardsRow}>
        <div className={style.cardsRowDiv}>
          <img className={style.coinsImg} src={image} alt={name} />
        </div>
        <div className={style.cardsRowDiv}>
          <p>{name}</p>
        </div>
        <div className={style.cardsRowDiv}>
          <p>
            {currencySymbol}{price.toFixed(2)}
          </p>
        </div>
        <div className={style.cardsRowDiv}>
          <span style={{ color: percentage > 0 ? "green" : "red" }}>
            {percentage > 0 ? "+" : ""}
            {percentage.toFixed(2)}%
          </span>
        </div>
      </div>
    </div>
  );
}
