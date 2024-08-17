import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import Navbar from "./Navbar";
import style from "../style/Cardsrow.module.css";
import Cardsrow from "./Cardsrow";
import CardsHeader from "./CardsHeader";

const BASEURL = "https://api.coingecko.com/api/v3/exchanges";

export default function Cards() {
  const [exchanges, setexchanges] = useState([]);
  const [loading, setloading] = useState(true);
  const [searchVal, setsearchVal] = useState("");

  const onHanlderInput = (e) => {
    setsearchVal(e.target.value.toLowerCase());
  };

  const filterData = (data) => {
    return data.id.toLowerCase().includes(searchVal)
  }

  useEffect(() => {
    async function fetching() {
      const response = await fetch(BASEURL);
      const data = await response.json();
      setexchanges(data);
      setloading(false);
    }
    fetching();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Navbar onHanlderInput={onHanlderInput} />
          <CardsHeader />
          {exchanges
            .filter((data) =>
              filterData(data)
            )
            .map((data, id) => (
              <div key={id} className={style.containerCards}>
                <Cardsrow {...data} />
              </div>
            ))}
        </>
      )}
    </>
  );
}
