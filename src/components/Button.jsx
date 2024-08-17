import React from "react";
import style from "../style/CoinsDetails.module.css";

export default function Button({OnSetday,day,text}) {
  return (
    <div>
      <button onClick={() => OnSetday(day)} className={style.button}>
        {text}
      </button>
    </div>
  );
}
