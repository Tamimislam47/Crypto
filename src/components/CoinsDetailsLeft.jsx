import React, { useState, useContext } from "react";
import { BiSolidUpArrow, BiSolidDownArrow } from "react-icons/bi";
import style from "../style/CoinsDetails.module.css";
import ConvertCurrency from "./ConvertCurrency";

export default function CoinsDetailsLeft(props) {
  const [value, setvalue] = useState("usd");

  const { last_updated, image, market_data, market_cap_rank, description } =
    props;
  const englishDescription = description.en
    ? description.en.split(".")[0]
    : "No description available";

  const handleButtonClick = (e) => {
    setvalue(e);
    props.getvaluefun(e);
  };

  return (
    <div className={style.leftSide}>
      <ConvertCurrency handleButtonClick={handleButtonClick} />
      <p>Last Update: {new Date(last_updated).toLocaleString()}</p>
      <img src={image.large} alt="Coin" />
      <h1>{props.name}</h1>
      <h2>
        {value === "usd" ? "$" : "৳"} {market_data.current_price[value]}
      </h2>
      <p>
        {market_data.price_change_percentage_24h > 0 ? (
          <BiSolidUpArrow color="green" />
        ) : (
          <BiSolidDownArrow color="red" />
        )}
        {market_data.price_change_percentage_24h}%
      </p>
      <p># {market_cap_rank}</p>
      <p>{englishDescription}</p>
    </div>
  );
}
