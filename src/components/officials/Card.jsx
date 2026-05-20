import React from "react";
import { officials } from "../../assets/data";

function Card() {
  const punongBarangay = officials.filter(
    (item) => item.position === "Punong Barangay",
  );

  const skOfficials = officials.filter((item) => item.position.includes("SK"));

  const barangayOfficials = officials.filter(
    (item) =>
      item.position !== "Punong Barangay" && !item.position.includes("SK"),
  );

  const cards = [
    {
      label: "Punong Barangay",
      count: punongBarangay.length,
      color: "bg-red-400",
    },
    {
      label: "SK Officials",
      count: skOfficials.length,
      color: "bg-blue-400",
    },
    {
      label: "Barangay Officials",
      count: barangayOfficials.length,
      color: "bg-green-400",
    },
    {
      label: "Total Officials",
      count: officials.length,
      color: "bg-indigo-400",
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-4 px-4 sm:grid-cols-4">
      {cards.map((card) => (
        <div
          key={card.label}
          className="flex items-center bg-white border rounded-sm overflow-hidden shadow"
        >
          <div className={`p-4 ${card.color}`}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-12 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
          </div>

          <div className="px-4 text-gray-700">
            <h3 className="text-sm tracking-wider">{card.label}</h3>
            <p className="text-3xl">{card.count}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card;
