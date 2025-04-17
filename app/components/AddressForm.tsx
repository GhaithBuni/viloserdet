import React, { useEffect, useState } from "react";

interface AddressFormProps {
  zip: string;
  setZip: (zip: string) => void;
  houseSpace: string;
  setHouseSpace: (space: string) => void;
  floorNumber: string;
  setFloorNumber: (floor: string) => void;
  selectedBuilding: string | null;
  setSelectedBuilding: (building: string) => void;
  selectedFloor: string | null;
  setSelectedFloor: (floorType: string) => void;
  selectedParking: string | null;
  setSelectedParking: (parking: string) => void;

  onShowToChange: (showTo: boolean) => void; // ✅ New prop
}

const AddressForm: React.FC<AddressFormProps> = ({
  zip,
  setZip,
  houseSpace,
  setHouseSpace,
  floorNumber,
  setFloorNumber,
  selectedBuilding,
  setSelectedBuilding,
  selectedFloor,
  setSelectedFloor,
  selectedParking,
  setSelectedParking,

  onShowToChange, // ✅ New prop
}) => {
  const [showTo, setShowTo] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleButtonClick = () => {
    const newErrors = {
      zip: zip.trim() === "",
      houseSpace: houseSpace.trim() === "",
      floorNumber: floorNumber.trim() === "",
      selectedBuilding: selectedBuilding === null,
      selectedFloor: selectedFloor === null,
      selectedParking: selectedParking === null,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      setShowTo(true);
      onShowToChange(true);
      setIsClicked(true);
    }
  };

  useEffect(() => {
    onShowToChange(showTo); // ✅ Notify parent whenever showTo changes
  }, [showTo, onShowToChange]);

  return (
    <>
      <h2 className="text-2xl font-bold mb-4">Varifrån flyttar ni? *</h2>

      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Postnummer"
          className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
            errors.zip
              ? "border-red-500"
              : "border-gray-300 focus:ring-[#FBBD60]"
          }`}
          value={zip}
          onChange={(e) => {
            if (/^\d{0,5}$/.test(e.target.value)) {
              setZip(e.target.value);
              setErrors((prev) => ({ ...prev, zip: false })); // Reset error
            }
          }}
        />
        {errors.zip && (
          <p className="text-red-500 text-sm">Fältet är obligatoriskt</p>
        )}
        <input
          type="number"
          placeholder="Storlek (m²)"
          className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
            errors.houseSpace
              ? "border-red-500"
              : "border-gray-300 focus:ring-[#FBBD60]"
          }`}
          value={houseSpace}
          onChange={(e) => {
            setHouseSpace(e.target.value);
            setErrors((prev) => ({ ...prev, houseSpace: false })); // Reset error
          }}
        />
        {errors.houseSpace && (
          <p className="text-red-500 text-sm">Fältet är obligatoriskt</p>
        )}
      </div>

      <div className="mt-8">
        <h2 className="text-2xl font-bold mb-4">Nuvarande adress *</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { label: "Lägenhet", icon: "/apartment.svg" },
            { label: "Villa", icon: "/house.svg" },
            { label: "Radhus", icon: "/radhus.svg" },
            { label: "Kontor", icon: "/office.svg" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setSelectedBuilding(item.label);
                setErrors((prev) => ({ ...prev, selectedBuilding: false }));
                console.log(errors.selectedBuilding);
              }}
              className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
                selectedBuilding === item.label
                  ? "bg-[#0D3F53] text-white scale-105 shadow-md"
                  : "bg-white hover:bg-gray-100"
              } ${
                errors.selectedBuilding
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-[#FBBD60]"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-16 h-16" />
              <span className="mt-2 font-semibold">{item.label}</span>
            </div>
          ))}
          {errors.selectedBuilding && (
            <p className="text-red-500 text-sm">Välj en byggnadstyp</p>
          )}
        </div>
        <div className="mt-6">
          <label className="block font-medium">Våning</label>
          <input
            type="number"
            min="0"
            placeholder="0"
            className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.floorNumber
                ? "border-red-500"
                : "border-gray-300 focus:ring-[#FBBD60]"
            }`}
            value={floorNumber}
            onChange={(e) => {
              setFloorNumber(e.target.value);
              setErrors((prev) => ({ ...prev, floorNumber: false })); // Reset error
            }}
          />
          {errors.floorNumber && (
            <p className="text-red-500 text-sm">Fältet är obligatoriskt</p>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { label: "Ingen Hiss", icon: "/stairs.svg" },
            { label: "Liten Hiss", icon: "/small-elevator.svg" },
            { label: "Stor Hiss", icon: "/elevator.svg" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setSelectedFloor(item.label);
                setErrors((prev) => ({ ...prev, selectedFloor: false }));
              }}
              className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
                selectedFloor === item.label
                  ? "bg-[#0D3F53] text-white scale-105 shadow-md"
                  : "bg-white hover:bg-gray-100"
              } ${
                errors.selectedFloor
                  ? "border-red-500"
                  : "border-gray-300 focus:ring-[#FBBD60]"
              }`}
            >
              <img src={item.icon} alt={item.label} className="w-16 h-16" />
              <span className="mt-2 font-semibold">{item.label}</span>
            </div>
          ))}
        </div>
        {errors.selectedFloor && (
          <p className="text-red-500 text-sm">Välj en våningstyp</p>
        )}

        <label className="block font-medium mt-2">
          Närmaste punkt en flyttbil kan stå
        </label>
        <input
          type="number"
          min="0"
          placeholder="10m"
          className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
            errors.selectedParking
              ? "border-red-500"
              : "border-gray-300 focus:ring-[#FBBD60]"
          }`}
          value={selectedParking ?? ""}
          onChange={(e) => {
            setSelectedParking(e.target.value);
            setErrors((prev) => ({ ...prev, selectedParking: false })); // Reset error
          }}
        />
      </div>
      {!isClicked && (
        <div className="mt-8 flex justify-center">
          <button
            onClick={() => {
              handleButtonClick();
            }}
            className="w-full md:w-[400px] text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]"
          >
            Nästa →
          </button>
        </div>
      )}
    </>
  );
};

export default AddressForm;
