import React from "react";
import ReactApexChart from "react-apexcharts";

function PopulationChart() {
  const series = [
    24, 89, 118, 123, 115, 103, 66, 41, 56, 62, 44, 38, 35, 30, 12, 15, 9, 10,
  ];

  const options = {
    chart: {
      type: "pie",
    },
    labels: [
      "Under 1",
      "1-4",
      "5-9",
      "10-14",
      "15-19",
      "20-24",
      "25-29",
      "30-34",
      "35-39",
      "40-44",
      "45-49",
      "50-54",
      "55-59",
      "60-64",
      "65-69",
      "70-74",
      "75-79",
      "80+",
    ],
    legend: {
      position: "bottom",
    },
    dataLabels: {
      enabled: true,
      formatter: function (val) {
        return val.toFixed(1) + "%";
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + " people";
        },
      },
    },
    title: {
      text: "Population of Dongos by Age Group (2015)",
      align: "center",
    },
  };

  return (
    <div className="bg-white p-4 rounded-xl shadow">
      <ReactApexChart
        options={options}
        series={series}
        type="pie"
        height={500}
      />
    </div>
  );
}

export default PopulationChart;
