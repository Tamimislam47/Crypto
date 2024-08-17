import React from "react";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "../style/Navbar.module.css";
import { IoSearch } from "react-icons/io5";

export default function Navbar({ onHanlderInput }) {
  return (
    <nav>
      <h1 className={style.logo}>
        CryptoVerse
        <FaEthereum color="orange" style={{ height: "25px", width: "22px" }} />
      </h1>

      <div className={style.inputField}>
        <input
          type="text"
          placeholder="search"
          onChange={(e) => onHanlderInput(e)}
        />
        <button className={style.search}>
          <IoSearch className={style.icon} />
        </button>
      </div>

      <div className={style.leftSide}>
        <Link className={style.link} to="/">
          Home
        </Link>
        <Link className={style.link} to="/coins">
          Coins
        </Link>
      </div>
    </nav>
  );
}
