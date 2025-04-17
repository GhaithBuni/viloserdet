import React, { useEffect, useState } from "react";
import useFetchPrice from "../hooks/useFetchPrice"; // ✅ Import the hook

interface AddressFormProps {
  // Nuvarande adress
  zip: string;
  houseSpace: string;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedFloor: string | null;
  selectedParking: string | null;
  // New address
  zipTo: string;
  setZipTo: (zip: string) => void;
  houseSpaceTo: string;
  setHouseSpaceTo: (space: string) => void;
  floorNumberTo: string;
  setFloorNumberTo: (floor: string) => void;
  selectedBuildingTo: string | null;
  setSelectedBuildingTo: (bulding: string) => void;
  selectedFloorTo: string | null;
  setSelectedFloorTo: (floorType: string) => void;
  selectedParkingTo: string | null;
  setSelectedParkingTo: (parking: string) => void;
  setTotalPrice: (price: number) => void;
  setPackgingPrice: (count: number) => void;
  setFurniturePrice: (count: number) => void;
  setCleaningPrice: (count: number) => void;
  onShowToChange: (showExtraServices: boolean) => void; // ✅ New prop
}

const AddressForm: React.FC<AddressFormProps> = ({
  zip,
  houseSpace,
  floorNumber,
  selectedBuilding,
  selectedFloor,
  selectedParking,
  setTotalPrice,
  setPackgingPrice,
  setFurniturePrice,
  setCleaningPrice,
  zipTo,
  setZipTo,
  houseSpaceTo,
  setHouseSpaceTo,
  floorNumberTo,
  setFloorNumberTo,
  selectedBuildingTo,
  setSelectedBuildingTo,
  selectedFloorTo,
  setSelectedFloorTo,
  selectedParkingTo,
  setSelectedParkingTo,

  onShowToChange,
}) => {
  const { fetchPrice, loadingPrice, errorData, fetchSuccess } = useFetchPrice(); // ✅ Get the function and loading state
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [showExtraServices, setShowExtraServices] = useState(false);
  useEffect(() => {
    onShowToChange(showExtraServices);
  }, [showExtraServices, onShowToChange]);

  const handleButtonClick = () => {
    const newErrors = {
      zip: zipTo.trim() === "",
      houseSpace: houseSpaceTo.trim() === "",
      floorNumber: floorNumberTo.trim() === "",
      selectedBuilding: selectedBuildingTo === null,
      selectedFloor: selectedFloorTo === null,
      selectedParking: selectedParkingTo === null,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      // Handle successful validation here
      console.log("All fields are valid!");
      return true;
    }
    return false;
  };
  return (
    <>
      <h2 className="text-2xl font-bold mb-4 mt-20"> Vart flyttar vi? *</h2>

      {/* ✅ Address Fields with Zip Code Input */}
      <div className="grid grid-cols-1 gap-6">
        <input
          type="text"
          placeholder="Postnummer"
          className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
            errors.zip
              ? "border-red-500"
              : "border-gray-300 focus:ring-[#FBBD60]"
          }`}
          value={zipTo}
          onChange={(e) => {
            if (/^\d{0,5}$/.test(e.target.value)) {
              setZipTo(e.target.value);
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
          value={houseSpaceTo}
          onChange={(e) => {
            setHouseSpaceTo(e.target.value);
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
                setSelectedBuildingTo(item.label);
                setErrors((prev) => ({ ...prev, selectedBuilding: false }));
                console.log(errors.selectedBuilding);
              }}
              className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
                selectedBuildingTo === item.label
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
          {errors.selectedBuildingTo && (
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
            value={floorNumberTo}
            onChange={(e) => {
              setFloorNumberTo(e.target.value);
              setErrors((prev) => ({ ...prev, floorNumber: false })); // Reset error
            }}
          />
          {errors.floorNumber && (
            <p className="text-red-500 text-sm">Fältet är obligatoriskt</p>
          )}
        </div>

        {/* Floor Selection - Responsive Grid */}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
          {[
            { label: "Ingen Hiss", icon: "/stairs.svg" },
            { label: "Liten Hiss", icon: "/small-elevator.svg" },
            { label: "Stor Hiss", icon: "/elevator.svg" },
          ].map((item) => (
            <div
              key={item.label}
              onClick={() => {
                setSelectedFloorTo(item.label);
                setErrors((prev) => ({ ...prev, selectedFloor: false }));
              }}
              className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
                selectedFloorTo === item.label
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

        {/* Parking Distance - Responsive Grid */}
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
          value={selectedParkingTo ?? ""}
          onChange={(e) => {
            setSelectedParkingTo(e.target.value);
            setErrors((prev) => ({ ...prev, selectedParking: false })); // Reset error
          }}
        />
      </div>
      <div className="mt-8 flex justify-center">
        <button
          onClick={() => {
            if (handleButtonClick()) {
              fetchPrice({
                houseSpace,
                zip,
                zipTo,
                floorNumber,
                floorNumberTo,
                selectedFloor,
                selectedFloorTo,
                selectedParking,
                setTotalPrice,
                setPackgingPrice,
                setFurniturePrice,
                setCleaningPrice,
                selectedParkingTo,
              }).then((success) => {
                if (success) {
                  setShowExtraServices(true);
                }
              });
            }
          }}
          className={`w-full md:w-[400px] text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition ${
            loadingPrice
              ? "bg-gray-400 cursor-not-allowed"
              : "bg-[#0D3F53] text-white hover:bg-[#0A2E3D]"
          }`}
          disabled={loadingPrice}
        >
          {loadingPrice ? "Laddar..." : "Nästa →"}
        </button>
      </div>
      {!fetchSuccess && errorData && (
        <p className="mt-4 text-red-600 bg-red-100 border border-red-400 px-4 py-2 rounded-lg shadow-md">
          ⚠️ {errorData}
        </p>
      )}
    </>
  );
};

export default AddressForm;
