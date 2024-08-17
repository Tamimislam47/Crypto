import React from "react";
import style from "../style/Cardsrow.module.css";

export default function Cardsrow(props) {
  const { trust_score_rank: rank, trade_volume_24h_btc: price } = props;

  return (
    <div key={props.id} className={style.cardsRow}>
      <div>
        <img src={props.image} alt={props.name} />
      </div>
      <div>
        <p>{props.name}</p>
      </div>
      <div>
        <p>{price.toFixed(2)}</p>
      </div>
      <div>
        <p>{rank}</p>
      </div>
    </div>
  );
}
