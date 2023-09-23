import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Piechart = () => {
  const data = {
    labels: ['p1','p2','p3'],
    datasets: [{
        label:'Poll',
        data: [3,6,4],
        backgroundColor: ["red", "green","orange"],
        borderColor: "black",
        borderWidth: 1.2,
    }]
  };
const options={

};
  return (
    <>
   
      <Doughnut style={{padding:"10px"}} data={data} options={options} />
    </>
  );
};
