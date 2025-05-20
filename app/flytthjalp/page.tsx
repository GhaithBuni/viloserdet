"use client";

import React, { useEffect, useRef } from "react";
import useBookingState from "../hooks/useBookingState";
import AddressForm from "../components/AddressForm";
import AddressToForm from "../components/AddressToForm";
import PriceSummary from "../components/PriceSummary";

const Page = () => {
  const showToRef = useRef<HTMLDivElement | null>(null); // ✅ Correct type
  const showExtraServicesRef = useRef<HTMLDivElement | null>(null); // ✅ Ref for showExtraServices
  const {
    rabattKod,
    setRabattKod,
    discountApplied,
    setDiscountApplied,
    totalPrice,
    setTotalPrice,
    zip,
    setZip,
    zipTo,
    setZipTo,
    houseSpace,
    setHouseSpace,
    floorNumber,
    setFloorNumber,
    showExtraServices,
    setShowExtraServices,
    setShowTo,
    showTo,
    houseSpaceTo,
    setHouseSpaceTo,
    floorNumberTo,
    setFloorNumberTo,
    selectedBuilding,
    setSelectedBuilding,
    selectedFloor,
    setSelectedFloor,
    selectedParking,
    setSelectedParking,
    selectedBuildingTo,
    setSelectedBuildingTo,
    selectedFloorTo,
    setSelectedFloorTo,
    selectedParkingTo,
    setSelectedParkingTo,
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
    selectedFurniture,
    setSelectedFurniture,
    furnitureCategories,
    packgingPrice,
    setPackgingPrice,
    furniturePrice,
    setFurniturePrice,
    cleaningPrice,
    setCleaningPrice,
    formData,
  } = useBookingState();

  useEffect(() => {
    if (showTo && showToRef.current) {
      showToRef.current.scrollIntoView({
        behavior: "smooth",
        block: "nearest",
      });
    }
    if (showExtraServices && showExtraServicesRef.current) {
      showExtraServicesRef.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showTo, showExtraServices]);

  return (
    <div>
      {/* Header Section */}
      <div className="relative bg-white  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('flytthjalp.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h1
          className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-white text-center relative 
    after:block after:h-1 after:bg-[#DEB82D] after:mt-2 
    after:mx-auto after:w-full after:max-w-[200px] md:after:max-w-[300px] lg:after:max-w-[400px] z-10 mt-20"
        >
          Flytthjälp
        </h1>
      </div>
      <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
        <div className="container mx-auto px-6 py-12 mt-12">
          {!showExtraServices && (
            <>
              <AddressForm
                zip={zip}
                setZip={setZip}
                houseSpace={houseSpace}
                setHouseSpace={setHouseSpace}
                floorNumber={floorNumber}
                setFloorNumber={setFloorNumber}
                selectedBuilding={selectedBuilding}
                setSelectedBuilding={setSelectedBuilding}
                selectedFloor={selectedFloor}
                setSelectedFloor={setSelectedFloor}
                selectedParking={selectedParking}
                setSelectedParking={setSelectedParking}
                onShowToChange={(showTo: boolean) => setShowTo(showTo)}
              />

              {showTo && (
                <div ref={showToRef}>
                  <>
                    <AddressToForm
                      zip={zip}
                      zipTo={zipTo}
                      setZipTo={setZipTo}
                      houseSpace={houseSpace}
                      houseSpaceTo={houseSpaceTo}
                      setHouseSpaceTo={setHouseSpaceTo}
                      floorNumber={floorNumber}
                      floorNumberTo={floorNumberTo}
                      setFloorNumberTo={setFloorNumberTo}
                      selectedBuilding={selectedBuilding}
                      selectedBuildingTo={selectedBuildingTo}
                      setSelectedBuildingTo={setSelectedBuildingTo}
                      selectedFloor={selectedFloor}
                      selectedFloorTo={selectedFloorTo}
                      setSelectedFloorTo={setSelectedFloorTo}
                      selectedParking={selectedParking}
                      selectedParkingTo={selectedParkingTo}
                      setSelectedParkingTo={setSelectedParkingTo}
                      setTotalPrice={setTotalPrice}
                      setPackgingPrice={setPackgingPrice}
                      setFurniturePrice={setFurniturePrice}
                      setCleaningPrice={setCleaningPrice}
                      onShowToChange={(showExtraServices: boolean) =>
                        setShowExtraServices(showExtraServices)
                      }
                    />
                  </>
                </div>
              )}
            </>
          )}

          {showExtraServices && (
            <div ref={showExtraServicesRef}>
              <>
                <PriceSummary
                  totalPrice={totalPrice}
                  setTotalPrice={setTotalPrice}
                  rabattKod={rabattKod}
                  setRabattKod={setRabattKod}
                  discountApplied={discountApplied}
                  setDiscountApplied={setDiscountApplied}
                  handleApplyDiscount={() => {}}
                  selectedPacking={selectedPacking ?? ""}
                  setSelectedPacking={setSelectedPacking}
                  selectedAssembly={selectedAssembly ?? ""}
                  setSelectedAssembly={setSelectedAssembly}
                  selectedDisposal={selectedDisposal ?? ""}
                  setSelectedDisposal={setSelectedDisposal}
                  selectedCleaning={selectedCleaning ?? ""}
                  setSelectedCleaning={setSelectedCleaning}
                  selectionType={selectionType}
                  setSelectionType={(type) =>
                    setSelectionType(type as "Typiskt" | "custom")
                  }
                  furnitureCategories={furnitureCategories}
                  selectedFurniture={selectedFurniture}
                  setSelectedFurniture={setSelectedFurniture}
                  packgingPrice={packgingPrice}
                  setPackgingPrice={setPackgingPrice}
                  furniturePrice={furniturePrice}
                  setFurniturePrice={setFurniturePrice}
                  cleaningPrice={cleaningPrice}
                  setCleaningPrice={setCleaningPrice}
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
                  onShowToChange={(showExtraServices: boolean) =>
                    setShowExtraServices(showExtraServices)
                  }
                />
              </>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Page;
