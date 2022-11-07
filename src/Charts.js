import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend,
} from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
  Legend
  );
  
  export function Charts({ dateData }) {

    const dateFormat = dateData?.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
  }, {})

  let tabDate = Object.keys(dateFormat).reverse()
  let tabDelib = Object.values(dateFormat).reverse()

  const options = {
    responsive: true,
  plugins: {
    legend: {
      position: 'top',
    },
    title: {
      display: true,
      text: 'Chart.js Line Chart',
    },
  },
};

const labels = tabDate;

const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Nombre d'actes",
      data: tabDelib,
      borderColor: 'rgb(53, 162, 235)',
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

return <Line options={options} data={data} />;
}
