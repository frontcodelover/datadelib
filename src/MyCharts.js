import React from 'react';
import Chart from "react-apexcharts";

const MyCharts = ({ dateData }) => {
    
    console.log(dateData)

    const dateFormat = dateData?.reduce(function(prev, cur) {
        prev[cur] = (prev[cur] || 0) + 1;
        return prev;
    }, {})
    
    let tabDate = Object.keys(dateFormat)
    console.log('TABDATE',tabDate)

    let tab = []

    let tabDelib = Object.values(dateFormat)

    tabDate.map((d) => tab.push(d))

    console.log('TABDELIB', tab)




  const series = [ //data on the y-axis
    {
      name: "date",
      data: tabDelib
    }
  ];
    const options = { //data on the x-axis
        chart: {
            type: 'area',
            height: 100,
            zoom: {
                enabled: false
            },
            dataLabels: {
                enabled: false
            },
            xaxis: {
                type: 'datetime',
                labels: tab,
            },
            yaxis: {
                opposite: true
              },
              legend: {
                horizontalAlign: 'left'
              }
        }
    };
    

  return (
    <div>
      <Chart
        options={options}
        series={series}
        width="500px"
      />
    </div>
  )
}

export default MyCharts;