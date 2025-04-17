import { useState } from "react";
import { set } from "react-hook-form";

interface FetchPriceProps {
  houseSpace: string;
  setTotalPrice: (price: number) => void;
}
const useFetchCleanPrice = () => {
  const [loadingPrice, setLoadingPrice] = useState(false);
  const [errorData, setErrorData] = useState("");
  const [fetchSuccess, setFetchSuccess] = useState(false);

  const fetchPrice = async ({ houseSpace, setTotalPrice }: FetchPriceProps) => {
    setLoadingPrice(true);
    setErrorData("");
    setFetchSuccess(false); // Reset success state
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/cleaning-price`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            size: houseSpace,
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        setErrorData(errorData.error || "Ett okänt fel inträffade.");
        console.error("❌ API Error:", errorData);
        return false;
      }

      const data = await response.json();
      setTotalPrice(data.price);

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
export default useFetchCleanPrice;
