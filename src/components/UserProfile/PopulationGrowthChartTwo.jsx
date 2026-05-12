import React from "react";
import Chart from "react-apexcharts";

function PopulationGrowthChartTwo() {
  const series = [
    {
      name: "Population",
      data: [866, 900, 981, 1030, 1057, 990, 1010],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      toolbar: {
        show: false,
      },
    },
    plotOptions: {
      bar: {
        borderRadius: 6,
        columnWidth: "55%",
      },
    },
    xaxis: {
      categories: ["1990", "1995", "2000", "2007", "2010", "2015", "2020"],
    },
    dataLabels: {
      enabled: true,
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
      <Chart options={options} series={series} type="bar" height={250} />
    </div>
  );
}

export default PopulationGrowthChartTwo;
