import React from "react";
import style from "../style/Cardsrow.module.css";

export default function CardsHeader({ percentage, currency }) {
  return (
    <div className={style.containerCards}>
      <div className={style.parentCardsrow}>
        <div className={style.cardsRowHeader}>
          <p>Logo</p>
          <p>Exchange</p>
          <p>Price {currency ? `(${currency})` : ""} </p>
          <p style={{ paddingRight: percentage ? "15px" : "0px" }}>
            {percentage ? "profit" : "Rank"}
          </p>
        </div>
      </div>
    </div>
  );
}
