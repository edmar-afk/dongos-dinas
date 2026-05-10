import {
  ArrowDownIcon,
  ArrowUpIcon,
  BoxIconLine,
  GroupIcon,
} from "../../icons";
import Badge from "../ui/badge/Badge";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import HolidayVillageIcon from "@mui/icons-material/HolidayVillage";
import OtherHousesIcon from "@mui/icons-material/OtherHouses";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CabinIcon from "@mui/icons-material/Cabin";
export default function EcommerceMetrics() {
  return (
    <>
    <p className='text-2xl font-bold text-gray-800 dark:text-white/90 mt-4'>Population Size</p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <PeopleAltIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>

          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total Population
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                1079
              </h4>
            </div>
            <p className="flex items-center gap-1 text-sm text-green-800 bg-green-100 px-4 py-2 rounded-full">
              <CalendarMonthIcon
                fontSize={"small"}
                className="text-green-500"
              />
              RBI 2023
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <HolidayVillageIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Total No. of Household
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                5,359
              </h4>
            </div>

            <p className="flex items-center gap-1 text-sm text-green-800 bg-green-100 px-4 py-2 rounded-full">
              <CalendarMonthIcon
                fontSize={"small"}
                className="text-green-500"
              />
              RBI 2023
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <OtherHousesIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Average Household Size
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                1.5(1-2)
              </h4>
            </div>

            <p className="flex items-center gap-1 text-sm text-green-800 bg-green-100 px-4 py-2 rounded-full">
              <CalendarMonthIcon
                fontSize={"small"}
                className="text-green-500"
              />
              RBI 2023
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-white/[0.03] md:p-6">
          <div className="flex items-center justify-center w-12 h-12 bg-gray-100 rounded-xl dark:bg-gray-800">
            <CabinIcon className="text-gray-800 size-6 dark:text-white/90" />
          </div>
          <div className="flex items-end justify-between mt-5">
            <div>
              <span className="text-sm text-gray-500 dark:text-gray-400">
                Density
              </span>
              <h4 className="mt-2 font-bold text-gray-800 text-title-sm dark:text-white/90">
                0.73
              </h4>
            </div>

            <p className="flex items-center gap-1 text-sm text-green-800 bg-green-100 px-4 py-2 rounded-full">
              <CalendarMonthIcon
                fontSize={"small"}
                className="text-green-500"
              />
              RBI 2023
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
