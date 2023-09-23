import React from "react";
import { Bar } from "react-chartjs-2";
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";

// Register the required Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export const Barchart = () => {
  const data = {
    labels: ["p1", "p2", "p3", "p4", "p5","p6" ],
    datasets: [
      {
        label: "1",
        data: [3, 6, 8, 5,10,4],
        backgroundColor: ["#618265", "green", "blue", "orange","lightgreen","lightblue"], // Set different colors for each bar
        borderColor: "black",
        borderWidth: 1.2,
      },
    ],
  };

  const options = {
    scales: {
      y: {
        beginAtZero: true,
        max: 10,
        min: 0,
      },
    },
  };

  return (
    <>
      <div>
        <Bar data={data} options={options} />
      </div>
    </>
  );
};
