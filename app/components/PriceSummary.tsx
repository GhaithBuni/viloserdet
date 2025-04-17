import React, { use, useEffect, useState } from "react";
import axios from "axios"; // Import axios for API requests
import FurnitureSelection from "./FurnitureSelection";
import BookingForm from "./BookingForm";
import router from "next/router";

interface PriceSummaryProps {
  totalPrice: number;
  rabattKod: string;
  setRabattKod: (code: string) => void;
  discountApplied: boolean;
  handleApplyDiscount: () => void;
  selectedPacking: string;
  setSelectedPacking: (packing: string) => void;
  selectedAssembly: string;
  setSelectedAssembly: (assembly: string) => void;
  selectedDisposal: string;
  setSelectedDisposal: (disposal: string) => void;
  selectedCleaning: string;
  setSelectedCleaning: (cleaning: string) => void;
  selectionType: "Typiskt" | "custom" | "Kostnadsfri besiktning";
  setSelectionType: (
    type: "Typiskt" | "custom" | "Kostnadsfri besiktning"
  ) => void;
  furnitureCategories: {
    category: string;
    items: { name: string; icon: string }[];
  }[];
  selectedFurniture: Record<string, number>;
  setSelectedFurniture: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  packgingPrice: number;
  furniturePrice: number;
  cleaningPrice: number;
  formData: {
    name: string;
    email: string;
    phone: string;
    movingDay: string;
    time: string;
    personalNumber: string;
    address: string;
    newAddress: string;
    message: string;
  };
  zip: string;
  houseSpace: string;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedFloor: string | null;
  selectedParking: string | null;
  zipTo: string;
  houseSpaceTo: string;
  floorNumberTo: string;
  selectedBuildingTo: string | null;
  selectedFloorTo: string | null;
  selectedParkingTo: string | null;
  onShowToChange: (showExtraServices: boolean) => void;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  totalPrice,
  rabattKod,
  setRabattKod,
  discountApplied,
  handleApplyDiscount,
  selectedPacking,
  setSelectedPacking,
  selectedAssembly,
  setSelectedAssembly,
  selectedDisposal,
  setSelectedDisposal,
  selectedCleaning,
  setSelectedCleaning,
  selectionType,
  setSelectionType,
  furnitureCategories,
  selectedFurniture,
  setSelectedFurniture,
  packgingPrice,
  furniturePrice,
  cleaningPrice,
  formData,
  zip,
  houseSpace,
  floorNumber,
  selectedBuilding,
  selectedFloor,
  selectedParking,
  zipTo,
  houseSpaceTo,
  floorNumberTo,
  selectedBuildingTo,
  selectedFloorTo,
  selectedParkingTo,
  onShowToChange,
}) => {
  const [rutChecked, setRutChecked] = useState(false);
  const [packingOption, setPackingOption] = useState<
    "Alla rum" | "Bara Kök" | null
  >(null);
  const [storageDate, setStorageDate] = useState<Date | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [keyHandlingOptions] = useState([
    "Vi öppnar åt er",
    "Vi lämnar nyckeln på ert kontor",
    "Jag har redan lämnat nyckel",
  ]);
  const [keyHandling, setKeyHandling] = useState<string>("Vi öppnar åt er");
  const [showExtraServices, setShowExtraServices] = useState(true);
  let finalTotalPrice: number = 0;

  useEffect(() => {
    onShowToChange(showExtraServices);
  }, [showExtraServices, onShowToChange]);

  handleApplyDiscount = async () => {
    try {
      setDiscountError(null); // Clear previous errors
      console.log("Applying discount code:", rabattKod);
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/discounts/validate`,
        { code: rabattKod }
      ); // Call backend API
      if (response.data.valid) {
        setDiscountPercentage(response.data.percentage); // Store discount
        console.log(`✅ Discount applied: ${discountPercentage}%`);
      }
    } catch (error) {
      console.error("Error applying discount:", error);
      setDiscountError("Invalid or expired discount code.");
    }
  };

  const removeDiscount = () => {
    setDiscountPercentage(0);
    setRabattKod("");
    setDiscountError(null);
  };
  finalTotalPrice =
    (discountPercentage > 0
      ? totalPrice * (1 - discountPercentage / 100) // Apply discount only to totalPrice
      : totalPrice) +
    (selectedPacking === "Ja" ? packgingPrice : 0) +
    (selectedDisposal === "Ja" ? furniturePrice : 0) +
    (selectedCleaning === "Ja" ? cleaningPrice : 0);
  if (selectedFurniture["Tungt"]) {
    finalTotalPrice += 600 * selectedFurniture["Tungt"];
  }
  if (selectedFurniture["Piano"]) {
    finalTotalPrice += 600 * selectedFurniture["Piano"];
  }

  if (rutChecked) {
    finalTotalPrice = finalTotalPrice * 0.5; // Apply RUT deduction to the entire price
  }

  return (
    <>
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => {
            setShowExtraServices(false);
            console.log(selectedFurniture["Tungt"]);
          }} // Navigate back to AddressToForm page
          className="px-6 py-3 bg-[#0D3F53] text-white rounded-md hover:bg-[#0A2E3D] transition"
        >
          ⬅Bakåt
        </button>
      </div>
      <div className=" grid col-1 gap-4 md:flex justify-between  mt-8">
        {/* Extra tjänster*/}

        <div className="bg-[#FEF4E8] w-full md:w-1/2">
          <h2 className="text-2xl font-bold bg-[#F5F5F5] pb-4">
            {" "}
            Extra tjänster{" "}
          </h2>
          {[
            {
              label: "Behöver du hjälp att packa?",
              state: selectedPacking,
              setState: setSelectedPacking,
            },
            {
              label: "Behöver du hjälp att Montera/Nedmontera?",
              state: selectedAssembly,
              setState: setSelectedAssembly,
            },
            {
              label: "Behöver du hjälp med Bortslig?",
              state: selectedDisposal,
              setState: setSelectedDisposal,
            },
            {
              label: "Behöver du flyttstäd? Får du 15% Rabatt",
              state: selectedCleaning,
              setState: setSelectedCleaning,
            },
            {
              label: "Behöver du magasinering?",
              state: selectedStorage,
              setState: setSelectedStorage,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between border p-4 shadow-lg"
            >
              <span className="font-medium">{item.label}</span>
              <div className="flex gap-2">
                <button
                  className={`px-6 py-2 rounded-lg text-white font-semibold ${
                    item.state === "Ja" ? "bg-[#0D3F53]" : "bg-gray-300"
                  }`}
                  onClick={() => item.setState("Ja")}
                >
                  Ja
                </button>
                <button
                  className={`px-6 py-2 rounded-lg text-white font-semibold ${
                    item.state === "Nej" ? "bg-[#0D3F53]" : "bg-gray-300"
                  }`}
                  onClick={() => item.setState("Nej")}
                >
                  Nej
                </button>
              </div>
            </div>
          ))}

          {/* Show additional options for packing if "Ja" is selected */}
          {selectedPacking === "Ja" && (
            <div className="mt-4 p-4 border-t">
              <label className="block font-medium mb-2">Vad ska packas?</label>
              <div className="flex gap-2">
                <button
                  className={`px-6 py-2 rounded-lg text-white font-semibold ${
                    packingOption === "Alla rum"
                      ? "bg-[#0D3F53]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setPackingOption("Alla rum")}
                >
                  Alla rum
                </button>
                <button
                  className={`px-6 py-2 rounded-lg text-white font-semibold ${
                    packingOption === "Bara Kök"
                      ? "bg-[#0D3F53]"
                      : "bg-gray-300"
                  }`}
                  onClick={() => setPackingOption("Bara Kök")}
                >
                  Bara Kök
                </button>
              </div>
            </div>
          )}

          {/* Show date input for storage if "Ja" is selected */}
          {selectedStorage === "Ja" && (
            <div className="mt-4 p-4 border-t">
              <label className="block font-medium mb-2">
                Datum ut för magasinering
              </label>
              <input
                type="date"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                value={
                  storageDate ? storageDate.toISOString().split("T")[0] : ""
                }
                onChange={(e) =>
                  setStorageDate(
                    e.target.value ? new Date(e.target.value) : null
                  )
                }
              />
            </div>
          )}
        </div>
        {/* Price Summary */}
        <div className="bg-white p-6 border rounded-lg shadow-md mt-10">
          <h3 className="text-xl font-bold mb-4">Prisuppgifter</h3>
          <div className="mb-3">
            <p className="flex justify-between">
              <span>Flytthjälp</span> <span>{totalPrice} kr</span>
            </p>
          </div>

          {/* Show Packing price if selected */}
          {selectedPacking === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Packning</span> <span>{packgingPrice} kr</span>
            </p>
          )}

          {/* Show Disposal price if selected */}
          {selectedDisposal === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Möbler Bortslig</span> <span>{furniturePrice} kr</span>
            </p>
          )}

          {/* Show Cleaning price if selected */}
          {selectedCleaning === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Flyttstäd</span> <span>{cleaningPrice} kr</span>
            </p>
          )}

          {/* Show Discount Amount if discount is applied */}
          {discountPercentage > 0 && (
            <p className="flex justify-between text-red-600 font-semibold">
              <span>FlyttHäjlp Rabatt</span>
              <span>
                -{(totalPrice * (discountPercentage / 100)).toFixed(2)} kr
              </span>
            </p>
          )}

          {/* Rabattkod Input */}
          <div className="mt-4">
            <label className="block font-medium">Rabattkod</label>
            <div className="flex gap-2">
              <input
                type="text"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                placeholder="Ange kod"
                value={rabattKod}
                onChange={(e) => setRabattKod(e.target.value)}
              />
              <button
                onClick={handleApplyDiscount}
                className="px-4 py-3 bg-[#0D3F53] text-white rounded-md hover:bg-[#0A2E3D] transition"
              >
                Använd
              </button>
              {discountPercentage > 0 && (
                <button
                  onClick={removeDiscount}
                  className="px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                >
                  Ta bort rabatt
                </button>
              )}
            </div>
            {discountApplied && (
              <p className="text-green-600 mt-2">Rabattkod tillämpad!</p>
            )}
            {discountError && (
              <p className="text-red-500 mt-2">{discountError}</p>
            )}
          </div>

          {/* Total Price */}
          <div className="mt-6 p-4 bg-gray-100 rounded-lg">
            <p className="text-lg font-bold flex justify-between">
              <span>Totalt</span> <span>{finalTotalPrice.toFixed(2)} kr</span>
            </p>
            {rutChecked && (
              <p className="text-green-600 text-sm font-semibold">
                *RUT-avdraget har tillämpats (50% rabatt)
              </p>
            )}
            <p className="text-sm text-gray-500">
              *Priset kan variera beroende på de valda möbler
            </p>
          </div>
          <div className="flex items-center gap-2 mt-2">
            <input
              type="checkbox"
              id="rut"
              className="w-5 h-5"
              onChange={() => {
                setRutChecked(!rutChecked);
              }}
            />
            <label htmlFor="rut" className="font-medium">
              Rut
            </label>
          </div>
        </div>
      </div>

      {/* vad som ska flyttas  */}
      <h2 className="text-2xl font-bold mb-4 mt-12"> Vad som ska fylttas? </h2>

      {/* Valmöjligheter */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Option 1: Default Selection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="default"
            checked={selectionType === "Typiskt"}
            onChange={() => setSelectionType("Typiskt")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Typiskt för storleken</span>
        </label>

        {/* Option 2: Free Inspection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="inspection"
            checked={selectionType === "Kostnadsfri besiktning"}
            onChange={() => setSelectionType("Kostnadsfri besiktning")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Kostnadsfri besiktning</span>
        </label>

        {/* Option 3: Custom Furniture Selection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="custom"
            checked={selectionType === "custom"}
            onChange={() => setSelectionType("custom")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Välj möblerna som ska flyttas</span>
        </label>
      </div>

      {/* Möbler valbara om "Välj möblerna som ska flyttas" är valt */}
      {selectionType === "custom" && (
        <FurnitureSelection
          furnitureCategories={furnitureCategories}
          selectedFurniture={selectedFurniture}
          setSelectedFurniture={setSelectedFurniture}
        />
      )}

      {/* Nyckelöverlämning Section */}
      <h2 className="text-2xl font-bold mb-4 mt-12"> Nyckelöverlämning * </h2>

      <div className="flex flex-col gap-4 mb-6">
        {keyHandlingOptions.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="keyHandling"
              value={option}
              checked={keyHandling === option}
              onChange={(e) => {
                setKeyHandling(e.target.value); // Update state with selected option
                console.log(keyHandling); // Log the selected option
              }}
              className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BookingForm
          formData={formData}
          zip={zip}
          zipTo={zipTo}
          houseSpace={houseSpace}
          houseSpaceTo={houseSpaceTo}
          floorNumber={floorNumber}
          floorNumberTo={floorNumberTo}
          selectedFloor={selectedFloor}
          selectedFloorTo={selectedFloorTo}
          selectedBuilding={selectedBuilding}
          selectedBuildingTo={selectedBuildingTo}
          selectedParking={selectedParking}
          selectedParkingTo={selectedParkingTo}
          selectedPacking={selectedPacking}
          selectedAssembly={selectedAssembly}
          selectedCleaning={selectedCleaning}
          selectedDisposal={selectedDisposal}
          totalPrice={finalTotalPrice}
          rabattKod={rabattKod}
          rutChecked={rutChecked}
          setRutChecked={setRutChecked}
          selectedFurniture={selectedFurniture}
          furnitureCategories={furnitureCategories}
          packingOption={packingOption}
          discountPercentage={discountPercentage}
          selectionType={selectionType}
          keyHandling={[keyHandling]}
          selectedStorage={selectedStorage}
          storageDate={storageDate}
        />
      </div>
    </>
  );
};

export default PriceSummary;
