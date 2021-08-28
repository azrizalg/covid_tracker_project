import React, { useState, useEffect } from "react";
import { fetchDailyData } from "../../api";
import { fetchTimeData } from "../../api";
import { Line, Bar } from "react-chartjs-2";

import styles from "./Chart.module.css";
const Chart = ({ country }) => {
  const [timeData, setTimeData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setTimeData(await fetchTimeData());
    };
    fetchData();
  }, []);

  const lineChart = timeData.length ? (
    <Line
      data={{
        labels: timeData.map(({ date }) => date),
        datasets: [
          {
            data: timeData.map(({ total_cases }) => total_cases),
            label: "Kasus",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: timeData.map(({ total_deaths }) => total_deaths),
            label: "Kematian",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
          {
            data: timeData.map(({ total_vaccinations }) => total_vaccinations),
            label: "Vaksin",
            borderColor: "green",
            backgroundColor: "rgba(42, 187, 155, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  const lineChart2 = country.length ? (
    <Line
      data={{
        labels: country.map(({ date }) => date),
        datasets: [
          {
            data: country.map(({ total_cases }) => total_cases),
            label: "Kasus",
            borderColor: "#3333ff",
            fill: true,
          },
          {
            data: country.map(({ total_deaths }) => total_deaths),
            label: "Kematian",
            borderColor: "red",
            backgroundColor: "rgba(255,0,0,0.5)",
            fill: true,
          },
          {
            data: country.map(({ total_vaccinations }) => total_vaccinations),
            label: "Vaksin",
            borderColor: "green",
            backgroundColor: "rgba(42, 187, 155, 0.5)",
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return (
    <div className={styles.container}>{country ? lineChart2 : lineChart}</div>
  );
};

export default Chart;
