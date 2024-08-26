import React, { useEffect, useState, createContext } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import style from "../style/Cardsrow.module.css";
import Coinscards from "./Coinscards";
import CardsHeader from "./CardsHeader";
import ConvertCurrency from "./ConvertCurrency";
import { Link } from "react-router-dom";

export default function Coins() {
  const [coins, setcoins] = useState([]);
  const [loading, setloading] = useState(true);
  const [value, setvalue] = useState("usd");
  const [searchVal, setsearchVal] = useState("");

  const onHanlderInput = (e) => {
    setsearchVal(e.target.value.toLowerCase());
  };

  const handleButtonClick = (e) => {
    setvalue(e);
  };

  const filterData = (data) => {
    return data.name.toLowerCase().includes(searchVal);
  };

  useEffect(() => {
    async function fetching() {
      setloading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/markets?vs_currency=${value}`
        );
        const data = await response.json();
        if (Array.isArray(data)) {
          setcoins(data);
        } else {
          setcoins([]);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setloading(false);
      }
    }
    fetching();
  }, [value]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar onHanlderInput={onHanlderInput} />
          <ConvertCurrency handleButtonClick={handleButtonClick} />
          <CardsHeader
            percentage={true}
            currency={value === "usd" ? "usd" : "bdt"}
          />
          {coins
            .filter((data) => filterData(data))
            .map((data) => (
              <Link
                style={{ color: `white`, textDecoration: `none` }}
                to={`/coins/${data.id}`}
                key={data.id}
              >
                <div className={style.containerCards}>
                  <Coinscards
                    {...{
                      ...data,
                      currencySymbol: value === "usd" ? "$" : "৳",
                    }}
                  />
                </div>
              </Link>
            ))}
        </>
      )}
    </>
  );
}
