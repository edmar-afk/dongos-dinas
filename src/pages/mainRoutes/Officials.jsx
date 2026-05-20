import PageMeta from "../../components/common/PageMeta";
import PunongBrgy from "../../components/officials/PunongBrgy";
import { officials } from "../../assets/data";
import Card from "../../components/officials/Card";

export default function Officials() {
  const kagawad = officials.filter((o) => o.position === "Barangay Kagawad");

  const skOfficials = officials.filter((o) =>
    ["SK Chairperson", "SK Kagawad", "SK Treasurer", "SK Secretary"].includes(
      o.position,
    ),
  );

  const adminOfficials = officials.filter(
    (o) =>
      ![
        "Punong Barangay",
        "Barangay Kagawad",
        "SK Chairperson",
        "SK Kagawad",
        "SK Treasurer",
        "SK Secretary",
      ].includes(o.position),
  );

  const Column = ({ title, data, showPosition = false }) => (
    <div className="flex-1 bg-gray-50 rounded-xl border shadow-sm overflow-hidden">
      <div className="bg-gray-100 px-4 py-3 border-b">
        <div className="text-sm font-semibold text-gray-800">{title}</div>
      </div>

      <div className="p-3 space-y-2">
        {data.map((official) => (
          <div
            key={official.id}
            className="flex flex-col rounded-lg border bg-white px-3 py-5 shadow-sm hover:shadow-md transition"
          >
            <div className="text-md font-semibold text-gray-900">
              {official.name}
            </div>

            {showPosition && (
              <div className="text-xs text-gray-500 mt-0.5">
                {official.position}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <>
      <PageMeta title="Dinas" description="Dinas" />

      <div className="grid gap-6 md:gap-8">
        <div className="text-2xl font-bold text-gray-900">
          Officials and Punong Barangays
        </div>

        <div className="">
          <PunongBrgy />
        </div>

        <div className="">
          <Card />
        </div>

        <div className="flex flex-col md:flex-row gap-6">
          <Column title="Barangay Kagawad" data={kagawad} />
          <Column title="SK Officials" data={skOfficials} />
          <Column
            title="Administrative Officials"
            data={adminOfficials}
            showPosition
          />
        </div>
      </div>
    </>
  );
}
