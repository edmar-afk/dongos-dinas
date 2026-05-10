import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PageMeta from "../../components/common/PageMeta";

import GroupsIcon from "@mui/icons-material/Groups";

export default function DistanceFromSchool() {
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

  const schoolLabels = ["Elementary", "Junior High", "Senior High"];

  const kilometers = [5, 1, 1];

  const totalDistance = kilometers.reduce((a, b) => a + b, 0);

  const [animatedDistance, setAnimatedDistance] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const stepTime = 16;
    const steps = duration / stepTime;
    const increment = totalDistance / steps;

    let current = 0;
    let i = 0;

    const interval = setInterval(() => {
      i++;

      if (i <= steps) {
        current += increment;
        setAnimatedDistance(Math.floor(current));
      } else {
        setAnimatedDistance(totalDistance);
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalDistance]);

  const chartOptions = {
    chart: {
      type: "bar",
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
      },
    },

    dataLabels: {
      enabled: true,
    },

    xaxis: {
      categories: schoolLabels,

      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#374151",
        },
      },
    },

    yaxis: {
      title: {
        text: "Kilometers",
      },

      labels: {
        style: {
          colors: isDark ? "#CBD5E1" : "#374151",
        },
      },
    },

    grid: {
      borderColor: isDark ? "#334155" : "#E5E7EB",
    },

    tooltip: {
      theme: isDark ? "dark" : "light",
    },

    colors: ["#465FFF"],
  };

  const chartSeries = [
    {
      name: "Distance (km)",
      data: kilometers,
    },
  ];

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <p className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Distance From Community to School (in kilometers)
      </p>

      {/* <div className="mb-6">
        <div className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5 shadow-sm dark:bg-slate-800">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Total Distance
              </p>

              <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
                {animatedDistance} km
              </h2>
            </div>

            <div className="rounded-xl bg-white p-3 text-yellow-500 shadow-sm dark:bg-slate-700">
              <GroupsIcon sx={{ fontSize: 28 }} />
            </div>
          </div>
        </div>
      </div> */}

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
