import React from "react";
import style from "../style/Input.module.css";
export default function Input({ handleButtonClick }) {
  return (
    <div style={{ width: "100vw", marginLeft: "12%", marginBottom: "10px" }}>
      <button className={style.input} onClick={() => handleButtonClick("usd")}>
        USD
      </button>
      <button className={style.input} onClick={() => handleButtonClick("bdt")}>
        BDT
      </button>
    </div>
  );
}
