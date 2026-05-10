import React, { useEffect, useState } from "react";
import ReactApexChart from "react-apexcharts";
import PageMeta from "../../components/common/PageMeta";

import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import GroupsIcon from "@mui/icons-material/Groups";
import SchoolIcon from "@mui/icons-material/School";

export default function ElementarySchoolData() {
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

  const schoolYearLabels = ["2020-2021", "2021-2022", "2022-2023"];

  const numberOfTeacher = [7, 7, 7];
  const numberOfClassRoom = [7, 7, 7];

  const totalPerYear = numberOfTeacher.map(
    (teacher, index) => teacher + numberOfClassRoom[index],
  );

  const totalTeachers = numberOfTeacher.reduce((a, b) => a + b, 0);
  const totalClassRooms = numberOfClassRoom.reduce((a, b) => a + b, 0);
  const overallTotal = totalPerYear.reduce((a, b) => a + b, 0);

  const [animatedStats, setAnimatedStats] = useState({
    teachers: 0,
    classrooms: 0,
    overall: 0,
  });

  useEffect(() => {
    const targets = {
      teachers: totalTeachers,
      classrooms: totalClassRooms,
      overall: overallTotal,
    };

    const duration = 1000;
    const stepTime = 16;
    const steps = duration / stepTime;

    const increments = {
      teachers: targets.teachers / steps,
      classrooms: targets.classrooms / steps,
      overall: targets.overall / steps,
    };

    let current = {
      teachers: 0,
      classrooms: 0,
      overall: 0,
    };

    let i = 0;

    const interval = setInterval(() => {
      i++;

      if (i <= steps) {
        current = {
          teachers: current.teachers + increments.teachers,
          classrooms: current.classrooms + increments.classrooms,
          overall: current.overall + increments.overall,
        };

        setAnimatedStats({
          teachers: Math.floor(current.teachers),
          classrooms: Math.floor(current.classrooms),
          overall: Math.floor(current.overall),
        });
      } else {
        setAnimatedStats(targets);
        clearInterval(interval);
      }
    }, stepTime);

    return () => clearInterval(interval);
  }, [totalTeachers, totalClassRooms, overallTotal]);

  const stats = [
    {
      title: "Total Teachers",
      value: animatedStats.teachers,
      icon: <PeopleAltIcon sx={{ fontSize: 28 }} />,
    },
    {
      title: "Total Classrooms",
      value: animatedStats.classrooms,
      icon: <SchoolIcon sx={{ fontSize: 28 }} />,
    },
    // {
    //   title: "Overall",
    //   value: animatedStats.overall,
    //   icon: <GroupsIcon sx={{ fontSize: 28 }} />,
    // },
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

            formatter: (_, config) => totalPerYear[config.dataPointIndex],
          },
        },
      },
    },

    dataLabels: {
      enabled: false,
    },

    xaxis: {
      categories: schoolYearLabels,

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

    colors: ["#465FFF", "#7C3AED"],
  };

  const chartSeries = [
    {
      name: "Teachers",
      data: numberOfTeacher,
    },
    {
      name: "Classrooms",
      data: numberOfClassRoom,
    },
  ];

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <p className="mb-8 text-lg font-semibold text-gray-800 dark:text-gray-100">
        Elementary School Data by School Year
      </p>

      {/* <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-2">
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
