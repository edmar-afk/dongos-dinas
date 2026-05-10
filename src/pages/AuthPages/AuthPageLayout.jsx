import React from "react";
import GridShape from "../../components/common/GridShape";
import { Link } from "react-router";
import ThemeTogglerTwo from "../../components/common/ThemeTogglerTwo";
import logo from "../../assets/image/logo.jpg";

export default function AuthLayout({ children }) {
  return (
    <div className="relative p-6 bg-white z-1 dark:bg-gray-900 sm:p-0">
      <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
        {children}

        <div className="items-center hidden w-full h-full lg:w-1/2 bg-brand-950 dark:bg-white/5 lg:grid">
          <div className="relative flex items-center justify-center z-1">
            <GridShape />

            <div className="flex flex-col items-center max-w-md">
              <Link
                to="/signin"
                className="mb-4 flex flex-row items-center gap-4"
              >
                <img
                  width={231}
                  height={48}
                  src={logo}
                  alt="Logo"
                  className="w-14 rounded-full"
                />
                <p className="text-3xl font-bold text-white">
                  Lungsod sa Dungos
                </p>
              </Link>

              <p className="text-center text-gray-400 dark:text-white/60">
                Gikan sa lungsod sa Dinas, Zamboanga del Sur
              </p>
            </div>
          </div>
        </div>

        <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
          <ThemeTogglerTwo />
        </div>
      </div>
    </div>
  );
}
