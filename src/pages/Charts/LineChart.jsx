import ComponentCard from "../../components/common/ComponentCard";
import LineChartOne from "../../components/charts/line/LineChartOne";
import PageMeta from "../../components/common/PageMeta";

export default function LineChart() {
  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <div className="space-y-6">
        <ComponentCard title="Household Population Distribution by Sex, by Purok">
          <LineChartOne
            total={1079}
            male={575}
            female={504}
            householdNo={235}
          />
        </ComponentCard>
      </div>
    </>
  );
}
