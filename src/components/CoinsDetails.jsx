import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import CoinsDetailsLeft from "./CoinsDetailsLeft";
import { useParams } from "react-router-dom";
import style from "../style/CoinsDetails.module.css";
import CoinsDetailsRight from "./CoinsDetailsRight";

export default function CoinsDetails() {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const [getvalue, setgetvalue] = useState("usd");
  

  const getvaluefun = (e) => {
    setgetvalue(e);
  };
  useEffect(() => {
    async function fetching() {
      setLoading(true);
      try {
        const response = await fetch(
          `https://api.coingecko.com/api/v3/coins/${id}`
        );
        const data = await response.json();

        setCoin(data); // Store the fetched coin data
      } catch (error) {
        console.error("Error fetching data:", error);
      } finally {
        setLoading(false);
      }
    }
    fetching();
  }, [id]);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          {coin && (
            <div className={style.containerDetails}>
              <CoinsDetailsLeft {...coin} getvaluefun={getvaluefun} />
              <CoinsDetailsRight getcurrency={getvalue} />
            </div>
          )}
        </>
      )}
    </>
  );
}
