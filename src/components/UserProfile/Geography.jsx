import { useModal } from "../../hooks/useModal";
import { Modal } from "../ui/modal";
import Button from "../ui/button/Button";
import Input from "../form/input/InputField";
import Label from "../form/Label";
import hallImg from "../../assets/image/hall.jpg";
import KayakingIcon from "@mui/icons-material/Kayaking";
import LandscapeIcon from "@mui/icons-material/Landscape";
import FlagIcon from "@mui/icons-material/Flag";
import PopulationGrowthChart from "./PopulationGrowthChart";
import PopulationGrowthChartTwo from "./PopulationGrowthChartTwo";
export default function Geography() {
  const { isOpen, openModal, closeModal } = useModal();
  const handleSave = () => {
    // Handle save logic here
    console.log("Saving changes...");
    closeModal();
  };
  return (
    <>
      <div className="p-5 border border-gray-200 rounded-2xl dark:border-gray-800 lg:p-6 my-4">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
          <div>
            <h4 className="text-lg font-semibold text-gray-800 dark:text-white/90 lg:mb-6">
              Physical geography
            </h4>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3 2xl:gap-x-32">
              <div>
                <img src={hallImg} alt="" />
              </div>{" "}
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  <LandscapeIcon className="text-orange-600 mb-1 mr-1" /> Mount
                  Timolan
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  19.21 km (11.94 mi) to the North-West (N39°W)
                </p>

                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400 mt-4">
                  <KayakingIcon className="text-blue-600 mb-1 mr-1" /> Lake Wood
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  28.02 km (17.41 mi) to the North-West (N46°W)
                </p>

                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400 mt-4">
                  <FlagIcon className="text-red-600 mb-1 mr-1" /> Dumanquilas
                  Point
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  29.99 km (18.63 mi) to the South-West (S42°W)
                </p>
              </div>
              <div>
                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400">
                  <FlagIcon className="text-green-600 mb-1 mr-1" /> Igai Point
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  33.50 km (20.82 mi) to the West (S83°W)
                </p>

                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400 mt-4">
                  <FlagIcon className="text-yellow-600 mb-1 mr-1" /> Flecha
                  Point
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  34.48 km (21.42 mi) to the South (S8°E)
                </p>

                <p className="mb-2 text-xs leading-normal text-gray-500 dark:text-gray-400 mt-4">
                  <LandscapeIcon className="text-orange-600 mb-1 mr-1" /> Mount
                  Pinukis
                </p>
                <p className="text-sm font-medium text-gray-800 dark:text-white/90">
                  37.17 km (23.09 mi) to the North-North-West (N22°W)
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-3 2xl:gap-x-32 mt-8">
              <div>
                <p className='text-justify leading-8'>
                  The population of Dongos grew from 866 in 1990 to 1,010 in
                  2020, an increase of 144 people over the course of 30 years.
                  The latest census figures in 2020 denote a positive annualized
                  growth rate of 0.42%, or an increase of 20 people, from the
                  previous population of 990 in 2015.
                </p>
              </div>{" "}
              <div>
               <PopulationGrowthChart/>
              </div>
              <div>
               <PopulationGrowthChartTwo/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
