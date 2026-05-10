import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PageMeta from "../../components/common/PageMeta";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import WomanIcon from "@mui/icons-material/Woman";
import HomeIcon from "@mui/icons-material/Home";
import GroupsIcon from "@mui/icons-material/Groups";

export default function AgeSexDistribution() {
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
    "Purok 7",
  ];

  const maleData = [113, 100, 131, 16, 56, 36, 123];
  const femaleData = [113, 99, 102, 10, 37, 31, 112];
  const householdData = [50, 42, 50, 6, 26, 14, 47];

  const totalPopulationPerPurok = maleData.map((m, i) => m + femaleData[i]);

  const totalMale = maleData.reduce((a, b) => a + b, 0);
  const totalFemale = femaleData.reduce((a, b) => a + b, 0);
  const totalHousehold = householdData.reduce((a, b) => a + b, 0);
  const totalPopulation = totalPopulationPerPurok.reduce((a, b) => a + b, 0);

  const [animatedStats, setAnimatedStats] = useState({
    male: 0,
    female: 0,
    household: 0,
    population: 0,
  });

  useEffect(() => {
    const targets = {
      male: totalMale,
      female: totalFemale,
      household: totalHousehold,
      population: totalPopulation,
    };

    const duration = 1000;
    const stepTime = 16;
    const steps = duration / stepTime;

    const increments = {
      male: targets.male / steps,
      female: targets.female / steps,
      household: targets.household / steps,
      population: targets.population / steps,
    };

    let current = { male: 0, female: 0, household: 0, population: 0 };
    let i = 0;

    const interval = setInterval(() => {
      i++;

      if (i <= steps) {
        current = {
          male: current.male + increments.male,
          female: current.female + increments.female,
          household: current.household + increments.household,
          population: current.population + increments.population,
        };

        setAnimatedStats({
          male: Math.floor(current.male),
          female: Math.floor(current.female),
          household: Math.floor(current.household),
          population: Math.floor(current.population),
        });
      } else {
        setAnimatedStats(targets);
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalMale, totalFemale, totalHousehold, totalPopulation]);

  const stats = [
    {
      title: "Total Male",
      value: animatedStats.male,
      icon: <PeopleAltIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Total Female",
      value: animatedStats.female,
      icon: <WomanIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Total Households",
      value: animatedStats.household,
      icon: <HomeIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Overall",
      value: animatedStats.population,
      icon: <GroupsIcon sx={{ fontSize: 28 }} />,
    },
  ];

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
            offsetY: -10,
            style: {
              fontSize: "14px",
              fontWeight: 700,
              color: isDark ? "#E5E7EB" : "#111827",
            },
            formatter: (_, config) =>
              totalPopulationPerPurok[config.dataPointIndex],
          },
        },
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
      position: "top",
      labels: {
        colors: isDark ? "#E5E7EB" : "#111827",
      },
    },

    tooltip: {
      theme: isDark ? "dark" : "light",
    },

    colors: ["#465FFF", "#7C3AED", "#FACC15"],
  };

  const chartSeries = [
    { name: "Male", data: maleData },
    { name: "Female", data: femaleData },
    { name: "Households", data: householdData },
  ];

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <p className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Households Population Distribution by sex, by purok
      </p>

      <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
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
