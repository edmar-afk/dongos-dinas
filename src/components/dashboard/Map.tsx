import LandscapeIcon from "@mui/icons-material/Landscape";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";

export default function Map() {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-200 bg-gray-100 dark:border-gray-800 dark:bg-white/[0.03]">
      <div className="px-5 pt-5 bg-white shadow-default rounded-2xl pb-3 dark:bg-gray-900 sm:px-6 sm:pt-6">
        <div className="flex justify-between">
          <div>
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white/90">
              Coverage Area
            </h3>
            <p className="mt-1 text-gray-500 text-theme-sm dark:text-gray-400">
              The Barangay has 8 (kilometers) distance fron the citiy or
              municipal center/hall.
            </p>
          </div>
        </div>
        <div className="relative ">
          <div className="max-h-[330px]" id="chartDarkStyle">
            <iframe
              title="Barangay Location"
              width="100%"
              height="280"
              className="rounded-xl border-0 mt-4"
              loading="lazy"
              allowFullScreen
              src="https://maps.google.com/maps?q=7.665071,123.359422&t=h&z=15&output=embed"
            />
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center gap-5 px-6 py-3.5 sm:gap-8 sm:py-5">
        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Latitude
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            7.6657
            <TravelExploreIcon className="text-blue-500 ml-1" />
          </p>
        </div>

        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Longtitude
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            123.3585
            <TravelExploreIcon className="text-blue-500 ml-1" />
          </p>
        </div>

        <div className="w-px bg-gray-200 h-7 dark:bg-gray-800"></div>

        <div>
          <p className="mb-1 text-center text-gray-500 text-theme-xs dark:text-gray-400 sm:text-sm">
            Land Area
          </p>
          <p className="flex items-center justify-center gap-1 text-base font-semibold text-gray-800 dark:text-white/90 sm:text-lg">
            1486.9476
            <LandscapeIcon className="text-blue-500 ml-1" />
          </p>
        </div>
      </div>
    </div>
  );
}
