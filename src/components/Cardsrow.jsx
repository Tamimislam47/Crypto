import React from "react";
import style from "../style/Cardsrow.module.css";

export default function Cardsrow(props) {
  const { trust_score_rank: rank, trade_volume_24h_btc: price } = props;

  return (
    <div className={style.parentCardsrow} >
      <div key={props.id} className={style.cardsRow}>
        <div className={style.cardsRowDiv} >
          <img  src={props.image} alt={props.name} />
        </div>
        <div className={style.cardsRowDiv} >
          <p>{props.name}</p>
        </div>
        <div className={style.cardsRowDiv} >
          <p>{price.toFixed(2)}</p>
        </div>
        <div className={style.cardsRowDiv} >
          <p>{rank}</p>
        </div>
      </div>
    </div>
  );
}
