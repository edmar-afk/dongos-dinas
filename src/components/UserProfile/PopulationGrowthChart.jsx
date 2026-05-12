import React from "react";
import Chart from "react-apexcharts";

function PopulationGrowthChart() {
  const series = [
    {
      name: "Population",
      data: [866, 900, 981, 1030, 1057, 990, 1010],
    },
  ];

  const options = {
    chart: {
      type: "line",
      toolbar: {
        show: false,
      },
    },
    stroke: {
      curve: "smooth",
      width: 4,
    },
    xaxis: {
      categories: ["1990", "1995", "2000", "2007", "2010", "2015", "2020"],
    },
    dataLabels: {
      enabled: true,
    },
    markers: {
      size: 6,
    },
    title: {
      text: "Population Growth of Dongos (1990-2020)",
      align: "left",
    },
    yaxis: {
      title: {
        text: "Population",
      },
    },
    tooltip: {
      y: {
        formatter: function (value) {
          return value + " people";
        },
      },
    },
  };

  return (
    <div className="w-full rounded-xl bg-white p-4 shadow">
      <Chart options={options} series={series} type="line" height={250} />
    </div>
  );
}

export default PopulationGrowthChart;
