import React from "react";

const buildingOptions = [
  { label: "Lägenhet", icon: "/apartment.svg" },
  { label: "Villa", icon: "/house.svg" },
  { label: "Kontor", icon: "/office.svg" },
  { label: "Lager", icon: "/warehouse.svg" },
];

interface BuildingSelectionProps {
  selectedBuilding: string | null;
  setSelectedBuilding: (building: string) => void;
}

const BuildingSelection: React.FC<BuildingSelectionProps> = ({
  selectedBuilding,
  setSelectedBuilding,
}) => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {buildingOptions.map((item) => (
        <div
          key={item.label}
          onClick={() => setSelectedBuilding(item.label)}
          className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
            selectedBuilding === item.label ? "bg-blue-500 text-white" : "bg-white"
          }`}
        >
          <img src={item.icon} alt={item.label} className="w-16 h-16" />
          <span className="mt-2 font-semibold">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default BuildingSelection;
