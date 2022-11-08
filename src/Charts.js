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
  
  export function Charts({ myData }) {

    const dateFormat = myData?.reduce(function(prev, cur) {
      prev[cur] = (prev[cur] || 0) + 1;
      return prev;
    }, {})
    
    console.log(myData)

  let tabDate = Object?.keys(dateFormat)?.reverse()
  let tabDelib = Object?.values(dateFormat)?.reverse()

  const options = {
    responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
  },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
    
};

const labels = tabDate;

const data = {
  labels,
  datasets: [
    {
      fill: false,
      label: "Nombre d'actes",
      data: tabDelib,
      borderColor: '#00DEA3',
      backgroundColor: '#00DEA3',
      tension: 0.4
    },
  ],
};

return <Line options={options} data={data} />;
}
