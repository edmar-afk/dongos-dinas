import EcommerceMetrics from "../../components/dashboard/EcommerceMetrics";
import StatisticsChart from "../../components/dashboard/StatisticsChart";
import RecentOrders from "../../components/dashboard/RecentOrders";
import DemographicCard from "../../components/dashboard/DemographicCard";
import PageMeta from "../../components/common/PageMeta";
import Map from "../../components/dashboard/Map";
import TableOne from "../../components/dashboard/TableOne";
import LineChart from "../Charts/LineChart";
import EmploymentChart from "./EmploymentChart";
export default function Home() {
  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />
      <div className="grid grid-cols-12 items-stretch gap-4 md:gap-6">
        <div className="col-span-12 space-y-6 xl:col-span-7">
          <EcommerceMetrics />
        </div>

        <div className="col-span-12 xl:col-span-5">
          <Map />
        </div>

        <div className="col-span-12 grid grid-cols-1 md:grid-cols-2 gap-6">
          <LineChart />
          <EmploymentChart />
        </div>
      </div>
    </>
  );
}
