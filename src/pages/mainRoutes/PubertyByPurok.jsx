import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PageMeta from "../../components/common/PageMeta";

export default function PubertyByPurok() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkTheme = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkTheme();

    const observer = new MutationObserver(() => checkTheme());
    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["class"],
    });

    return () => observer.disconnect();
  }, []);

  const purokLabels = [
    "Purok 1",
    "Purok 2",
    "Purok 3",
    "Purok 4",
    "Purok 5",
    "Purok 6",
  ];

  const totalHousehold = [226, 199, 233, 26, 93, 67];
  const magnitude = [45, 60, 80, 5, 10, 12];

  const proportion = [0.2, 0.3, 0.34, 0.19, 0.11, 0.18];

  const remaining = totalHousehold.map((v, i) => v - magnitude[i]);

  const chartOptions = {
    chart: {
      type: "bar",
      stacked: true,
      toolbar: { show: false },
      foreColor: isDark ? "#E5E7EB" : "#111827",
    },

    theme: {
      mode: isDark ? "dark" : "light",
    },

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
        borderRadius: 8,
        dataLabels: {
          total: {
            enabled: true,
            formatter: function (_val, opts) {
              const i = opts.dataPointIndex;

              if (i == null || proportion[i] == null) return "";

              return `${totalHousehold[i]} (${(proportion[i] * 100).toFixed(1)}%)`;
            },
          },
        },
      },
    },

    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: purokLabels,
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#374151",
        },
      },
    },

    yaxis: {
      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#374151",
        },
      },
    },

    grid: {
      borderColor: isDark ? "#334155" : "#E5E7EB",
    },

    legend: {
      position: "bottom",
    },

    tooltip: {
      theme: isDark ? "dark" : "light",
      shared: true,
      intersect: false,
      custom: ({ dataPointIndex }) => {
        return `
          <div style="padding:10px">
            <div><b>${purokLabels[dataPointIndex]}</b></div>
            <div>Magnitude: ${magnitude[dataPointIndex]}</div>
            <div>Remaining: ${remaining[dataPointIndex]}</div>
            <div>Total Household: ${totalHousehold[dataPointIndex]}</div>
            <div>Proportion: ${(proportion[dataPointIndex] * 100).toFixed(1)}%</div>
          </div>
        `;
      },
    },

    colors: ["#465FFF", "#9CB9FF"],
  };

  const chartSeries = [
    {
      name: "Magnitude",
      data: magnitude,
    },
    {
      name: "Remaining",
      data: remaining,
    },
  ];

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <p className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Household with Income poverty threshold
      </p>

      <div className="rounded-2xl bg-white p-5 shadow-sm dark:bg-slate-900">
        <ReactApexChart
          options={chartOptions}
          series={chartSeries}
          type="bar"
          height={420}
        />
      </div>
    </>
  );
}
