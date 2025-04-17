"use client";

import { useState } from "react";

const furnitureCategories = [
  {
    category: "Liten (0-1 m3)",
    items: [
      { name: "Stol", icon: "/chair.svg" },
      { name: "Fåtölj", icon: "/armchair.svg" },
      { name: "Bord", icon: "/table.svg" },
      { name: "Byrå", icon: "/dresser.svg" },
      { name: "Matta", icon: "/matta.svg" },
    ],
  },
  {
    category: "Medelstor (1-2 m3)",
    items: [
      { name: "Soffa", icon: "/sofa.svg" },
      { name: "Matbord", icon: "/dining-table.svg" },
      { name: "Skåp", icon: "/cabinet.svg" },
      { name: "Säng", icon: "/bed.svg" },
    ],
  },
  {
    category: "Stor (2-4 m3)",
    items: [
      { name: "Stort Soffa", icon: "/big-soffa.svg" },
      { name: "Stort Bord", icon: "/large-table.svg" },
      { name: "Garderob", icon: "/wardrobe.svg" },
      { name: "Stor Säng", icon: "/big-bed.svg" },
    ],
  },
  {
    category: "Elektronik",
    items: [
      { name: "Tvättmaskin&Kylskåp", icon: "/washing-machine.svg" },
      { name: "TV", icon: "/tv.svg" },
      { name: "Lampa", icon: "/lamp.svg" },
    ],
  },
  {
    category: "Speciella Möbler",
    items: [
      { name: "Känslig", icon: "/kanslig.svg" },
      { name: "Tungt", icon: "/tungt.svg" },
      { name: "Piano", icon: "/piano.svg" },
    ],
  },
];

const useBookingState = () => {
  const [rabattKod, setRabattKod] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [packgingPrice, setPackgingPrice] = useState(0); // Initial price before discount
  const [furniturePrice, setFurniturePrice] = useState(0); // Initial price before discount
  const [cleaningPrice, setCleaningPrice] = useState(0); // Initial price before discount
  const [totalPrice, setTotalPrice] = useState(0); // Initial price before discount
  const [keyHandling, setKeyHandling] = useState<string | null>(null);
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [selectedFloor, setSelectedFloor] = useState<string | null>(null);
  const [selectedParking, setSelectedParking] = useState<string | null>(null);
  const [zip, setZip] = useState("");
  const [zipTo, setZipTo] = useState("");
  const [houseSpace, setHouseSpace] = useState("");
  const [floorNumber, setFloorNumber] = useState("");
  const [showTo, setShowTo] = useState(false);
  const [showExtraServices, setShowExtraServices] = useState(false);
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [selectedBuildingTo, setSelectedBuildingTo] = useState<string | null>(
    null
  );
  const [selectedFloorTo, setSelectedFloorTo] = useState<string | null>(null);
  const [selectedParkingTo, setSelectedParkingTo] = useState<string | null>(
    null
  );
  const [houseSpaceTo, setHouseSpaceTo] = useState("");
  const [floorNumberTo, setFloorNumberTo] = useState("");
  const [selectedPacking, setSelectedPacking] = useState<string | null>(null);
  const [selectedAssembly, setSelectedAssembly] = useState<string | null>(null);
  const [selectedDisposal, setSelectedDisposal] = useState<string | null>(null);
  const [selectedCleaning, setSelectedCleaning] = useState<string | null>(null);
  const [roomCount, setRoomCount] = useState(0);
  const [kitchenCount, setKitchenCount] = useState(0);
  const [selectionType, setSelectionType] = useState<"Typiskt" | "custom">(
    "Typiskt"
  );

  const [selectedFurniture, setSelectedFurniture] = useState<
    Record<string, number>
  >({});
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    movingDay: "",
    time: "",
    personalNumber: "",
    address: "",
    newAddress: "",
    message: "",
  });
  return {
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
    showTo,
    setShowTo,
    showExtraServices,
    setShowExtraServices,
    errors,
    setErrors,
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
    roomCount,
    setRoomCount,
    kitchenCount,
    setKitchenCount,
    selectionType,
    setSelectionType,
    selectedFurniture,
    setSelectedFurniture,
    furnitureCategories,
    keyHandling,
    setKeyHandling,
    packgingPrice,
    setPackgingPrice,
    furniturePrice,
    setFurniturePrice,
    cleaningPrice,
    setCleaningPrice,
    formData,
    setFormData,
  };
};

export default useBookingState;
