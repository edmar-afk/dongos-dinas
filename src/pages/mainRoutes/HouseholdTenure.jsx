import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PageMeta from "../../components/common/PageMeta";
import GroupsIcon from "@mui/icons-material/Groups";

export default function HouseholdTenure() {
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
    "Owner",
    "Rent",
    "Shared with Owner",
    "Stay free with consent",
    "Illegal",
  ];

  const numOfFamilies = [100, 0, 15, 77, 0];

  const totalHouseholds = numOfFamilies.reduce((a, b) => a + b, 0);

  const [animatedTotal, setAnimatedTotal] = useState(0);

  useEffect(() => {
    const duration = 1000;
    const stepTime = 16;
    const steps = duration / stepTime;

    const increment = totalHouseholds / steps;

    let current = 0;
    let i = 0;

    const interval = setInterval(() => {
      i++;

      if (i <= steps) {
        current += increment;
        setAnimatedTotal(Math.floor(current));
      } else {
        setAnimatedTotal(totalHouseholds);
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalHouseholds]);

  const stats = purokLabels.map((label, idx) => ({
    title: label,
    value: numOfFamilies[idx],
    proportion: `${numOfFamilies[idx]}/${totalHouseholds}`,
    icon: <GroupsIcon sx={{ fontSize: 28 }} />,
  }));

  const chartOptions = {
    chart: {
      type: "bar",
      stacked: false,
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

    dataLabels: { enabled: false },

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
      show: false,
    },

    tooltip: {
      theme: isDark ? "dark" : "light",
    },

    colors: ["#465FFF"],
  };

  const chartSeries = [
    {
      name: "Households",
      data: numOfFamilies,
    },
  ];

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <p className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Household by Tenure Status
      </p>

      {/* STATS WITH PROPORTION */}
      <p className='text-lg text-gray-500 mb-4'>Proportion</p>
      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3 xl:grid-cols-5">
        {stats.map((item) => (
          <div
            key={item.title}
            className="rounded-2xl border-l-4 border-yellow-400 bg-yellow-50 p-5 shadow-sm dark:bg-slate-800"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  {item.title}
                </p>

                <h2 className="mt-2 text-3xl font-bold text-gray-800 dark:text-white">
                  {item.value}
                </h2>

                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300">
                  {item.proportion}
                </p>
              </div>

              <div className="rounded-xl bg-white p-3 text-yellow-500 shadow-sm dark:bg-slate-700">
                {item.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

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
