import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Barchart = (props) => {

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        min: 0,
      },
    },
  };
  const dataArr = props.dataObj;

  return (
    <>
      <div>
      <Bar data={dataArr} options={options}  />
      <h1 className="text-center font-semibold  mr-6 mt-4 text-3xl ">Parameters Score</h1>
      
      </div>
    </>
  );
};
