import React, { useState } from "react";
import { FaEthereum } from "react-icons/fa";
import { Link } from "react-router-dom";
import style from "../style/Navbar.module.css";
import { IoSearch } from "react-icons/io5";

export default function Navbar({ onHanlderInput }) {
  const [menubar, setMenubar] = useState(false);

  const myFunction = () => {
    setMenubar((prevState) => !prevState);
  };

  return (
    <>
      <nav>
        <h1 className={style.logo}>
          CryptoVerse
          <FaEthereum
            color="orange"
            style={{ height: "25px", width: "22px" }}
          />
        </h1>

        {/* search */}
        <div className={style.inputField}>
          <input type="text" placeholder="search" onChange={onHanlderInput} />
          <button className={style.search}>
            <IoSearch className={style.icon} />
          </button>
        </div>

        <div className={style.leftSide}>
          <Link className={style.link} to="/">
            <p>Home</p>
          </Link>
          <Link className={style.link} to="/coins">
            <p>Coins</p>
          </Link>
        </div>

        <div
          className={`${style.container} ${menubar ? style.change : ""}`}
          onClick={myFunction}
        >
          <div className={style.bar1}></div>
          <div className={style.bar2}></div>
          <div className={style.bar3}></div>
        </div>
      </nav>

      {/* menubar */}
      <div className={style.outContainer}>
        <div className={style.outnavinputField}>
          <input type="text" placeholder="search" onChange={onHanlderInput} />
          <button className={style.outsearch}>
            <IoSearch className={style.outicon} />
          </button>
        </div>
        <div className={`${menubar ? style.show : style.menuDown}`}>
          <Link className={style.link} to="/">
            Home
          </Link>
          <Link className={style.link} to="/coins">
            Coins
          </Link>
          <Link className={style.link}>Logout</Link>
        </div>
      </div>
    </>
  );
}
