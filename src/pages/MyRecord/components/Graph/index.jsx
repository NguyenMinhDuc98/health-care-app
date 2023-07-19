import {
  CategoryScale,
  Chart as ChartJS,
  LineElement,
  LinearScale,
  PointElement,
  Tooltip,
} from "chart.js";
import React from "react";
import { Line } from "react-chartjs-2";
import { Button } from "antd";
import dayjs from "dayjs";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  // Title,
  Tooltip
  // Legend
);

export const options = {
  maintainAspectRatio: false,
  responsive: true,
  plugins: {
    legend: {
      display: false,
    },
  },
  scales: {
    x: {
      grid: {
        color: "#777777",
        drawBorder: false,
      },
      ticks: {
        beginAtZero: true,
        color: "white",
      },
    },
    // to remove the y-axis labels
    y: {
      ticks: {
        display: false,
        beginAtZero: true,
      },
      // to remove the y-axis grid
      grid: {
        drawBorder: false,
        display: false,
      },
    },
  },
};

const labels = [
  "6月",
  "7月",
  "8月",
  "9月",
  "10月",
  "11月",
  "12月",
  "1月",
  "2月",
  "3月",
  "4月",
  "5月",
];

const getRandomNum = () => {
  const min = 45;
  const max = 48;
  const rand = min + Math.random() * (max - min);
  return rand;
};

export const data = {
  labels,
  datasets: [
    {
      data: labels.map(() => getRandomNum()),
      borderColor: "#FFCC21",
      backgroundColor: "#FFCC21",
      color: "white",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => getRandomNum()),
      borderColor: "#8FE9D0",
      backgroundColor: "#8FE9D0",
    },
  ],
};

export default function Graph() {
  return (
    <div className="graph">
      <div className="flex flex-row">
        <div className="section-title">BODY RECORD</div>
        <div className="section-date">{dayjs().format("YYYY.MM.DD")}</div>
      </div>
      <Line options={options} data={data} />
      <div className="flex flex-row mt-3">
        <Button className="graph-btn">日</Button>
        <Button className="graph-btn">週</Button>
        <Button className="graph-btn">月</Button>
        <Button className="graph-btn">年</Button>
      </div>
    </div>
  );
}
