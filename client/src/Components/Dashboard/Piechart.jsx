import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

export const Piechart = (props) => {
  const dataObj = props.dataObj;

const options={

};
  return (
    <>
   
      <Doughnut style={{padding:"10px"}} data={dataObj} options={options} />
      <h1 className="text-center  font-semibold  mr-6 mt-4 text-3xl ">Green Score : <span className="text-green-500">92/100</span></h1>
    </>
  );
};
