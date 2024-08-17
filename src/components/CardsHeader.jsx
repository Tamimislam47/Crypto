import React from "react";
import style from "../style/Cardsrow.module.css";

export default function CardsHeader({ percentage,currency }) {
  
  return (
    <div className={style.containerCards}>
      <div className={style.cardsHeader}>
        <p>Logo</p>
        <p>Exchange</p>
        <p>Price ({currency}) </p>
        <p>{percentage ? "percentage" : "Rank"}</p>
      </div>
    </div>
  );
}
