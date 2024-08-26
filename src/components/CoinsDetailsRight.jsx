import React, { useEffect, useState } from "react";
import style from "../style/CoinsDetails.module.css";
import { Line } from "react-chartjs-2";
import { useParams } from "react-router-dom";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Button from "./Button";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export default function CoinsDetailsRight({ getcurrency }) {
  const [Data, setData] = useState([]);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [Height, setHeight] = useState(null);
  const [Width, setWidth] = useState(null);

  const [days, setdays] = useState(1);
  const { id } = useParams();

  const OnSetday = (e) => {
    setdays(e);
  };

  const mydata = {
    // For setting chart data
    labels: Data.map((val) => {
      const date = new Date(val[0]);
      const time =
        date.getHours() > 12
          ? `${date.getHours() - 12} : ${date.getMinutes()} PM`
          : `${date.getHours()} : ${date.getMinutes()} AM`;
      return days === 1 ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price In Past Days ${days} in ${getcurrency}`,
        data: Data.map((price) => price[1]),
        backgroundColor: "rgba(75,192,192,0.2)",
        borderColor: "orange",
      },
    ],
  };

  const options = {
    elements: {
      point: {
        radius: 1,
      },
    },
  };

  useEffect(() => {
    async function fetching() {
      const response = await fetch(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=${getcurrency}&days=${days}`
      );

      const data = await response.json();
      setData(data.prices);
    }
    fetching();

    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [days, getcurrency, id, screenWidth, Height]);

  return (
    <div className={style.chartContainer}>
      <div className={style.coinsDetailsRight}>
        <Line
          data={mydata}
          options={options}
          height={screenWidth <= 768 ? 200 : 110}
        />
        <div className={style.buttons}>
          <Button text="1Day" OnSetday={OnSetday} day={1} />
          <Button text="1Month" OnSetday={OnSetday} day={30} />
          <Button text="1Year" OnSetday={OnSetday} day={365} />
        </div>
      </div>
    </div>
  );
}
