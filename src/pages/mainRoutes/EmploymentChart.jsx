import Chart from "react-apexcharts";

function EmploymentChart() {
  const options = {
    chart: {
      type: "pie",
      fontFamily: "Outfit, sans-serif",
    },

    labels: ["Labor force", "Employed", "Unemployed"],

    colors: ["#465FFF", "#FACC15", "#60A5FA"],

    legend: {
      position: "bottom",
    },

    dataLabels: {
      enabled: true,
      formatter: function (val, opts) {
        return opts.w.config.series[opts.seriesIndex];
      },
    },

    stroke: {
      width: 2,
    },

    tooltip: {
      theme: "light",
      y: {
        formatter: (val) => `${val}`,
      },
    },
  };

  const series = [441, 61, 85];

  return (
    <div className="w-full bg-white dark:bg-gray-900 rounded-2xl p-5">
      <h2 className="text-lg font-semibold mb-4">Local Economy: Employment</h2>

      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
}

export default EmploymentChart;
