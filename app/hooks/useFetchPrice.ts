import { useState } from "react";

interface FetchPriceProps {
  houseSpace: string;
  zip: string;
  zipTo: string;
  floorNumber: string;
  floorNumberTo: string;
  selectedFloor: string | null;
  selectedFloorTo: string | null;
  selectedParking: string | null;
  selectedParkingTo: string | null;
  setTotalPrice: (price: number) => void;
  setPackgingPrice: (count: number) => void;
  setFurniturePrice: (count: number) => void;
  setCleaningPrice: (count: number) => void;
}

const useFetchPrice = () => {
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const fetchPrice = async ({
    houseSpace,
    zip,
    zipTo,
    floorNumber,
    floorNumberTo,
    selectedFloor,
    selectedFloorTo,
    selectedParking,
    setTotalPrice,
    selectedParkingTo,
    setPackgingPrice,
    setFurniturePrice,
    setCleaningPrice,
  }: FetchPriceProps) => {
    setLoadingPrice(true);
    setErrorData("");
    setFetchSuccess(false); // Reset success state
    try {
      const response = await fetch("http://localhost:4000/api/pricing", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          size: houseSpace,
          startPostcode: zip,
          endPostcode: zipTo,
          floor: floorNumber,
          newFloor: floorNumberTo,
          elevator: selectedFloor,
          newElevator: selectedFloorTo,
          parkingDistance: selectedParking,
          parkingDistanceTo: selectedParkingTo,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        setErrorData(errorData.error || "Ett okänt fel inträffade.");
        console.error("❌ API Error:", errorData);
        return false;
      }

      const data = await response.json();
      setTotalPrice(data.price);
      setCleaningPrice(data.cleaning);
      setFurniturePrice(data.FurniturePrice);
      setPackgingPrice(data.packning);
      setFetchSuccess(true);
      return true; // ✅ Success
    } catch (error) {
      console.error("❌ Fetch Error:", error);
      return false;
    } finally {
      setLoadingPrice(false);
    }
  };
  return { fetchPrice, loadingPrice, errorData, fetchSuccess };
};

export default useFetchPrice;
