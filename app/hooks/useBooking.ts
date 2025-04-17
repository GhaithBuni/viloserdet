import { useState } from "react";
import axios from "axios";

interface BookingData {
  name: string;
  personalNumber: string;
  email: string;
  phone: string;
  movingDay: string;

  address: string;
  newAddress: string;
  message: string;
  rabattKod?: string;
  totalPrice: number;
  // Origin Details
  zip: string;
  houseSpace: string | null;
  selectedFloor: string | null;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedParking: string | null;
  // Destination Details
  zipTo: string;
  houseSpaceTo: string;
  floorNumberTo: string;
  selectedBuildingTo: string | null;
  selectedFloorTo: string | null;
  selectedParkingTo: string | null;
  selectedPacking?: string | null;
  selectedAssembly?: string | null;
  selectedDisposal?: string | null;
  selectedCleaning?: string | null;
}

interface Booking {
  _id: string;
  name: string;
  personalNumber: string;
  email: string;
  phone: string;
  movingDay: string;

  address: string;
  newAddress: string;
  message: string;
  rabattKod?: string;
  totalPrice: number;
  // Origin Details
  zip: string;
  houseSpace: string | null;
  selectedFloor: string | null;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedParking: string | null;
  // Destination Details
  zipTo: string;
  houseSpaceTo: string;
  floorNumberTo: string;
  selectedBuildingTo: string | null;
  selectedFloorTo: string | null;
  selectedParkingTo: string | null;
  selectedPacking?: string | null;
  selectedAssembly?: string | null;
  selectedDisposal?: string | null;
  selectedCleaning?: string | null;
}

const useBooking = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [bookings, setBookings] = useState<Booking[]>([]);

  const addBooking = async (bookingData: BookingData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("🟡 Sending data to API:", bookingData);

      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings`,
        bookingData,
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      console.log("✅ Booking Successful:", data);
      setSuccess(true);
    } catch (error) {
      console.error("❌ Booking Error:", error);
      setError(
        axios.isAxiosError(error) && error.response
          ? error.response.data.error || "Server error"
          : "Unknown error"
      );
    }

    setLoading(false);
  };

  const getBookings = async () => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await axios.get<Booking[]>(
        `${process.env.NEXT_PUBLIC_API_URL}/bookings`
      );

      console.log("✅ Bookings Fetched:", data);
      setBookings(data);
    } catch (error) {
      console.error("❌ Fetch Bookings Error:", error);
      setError(
        axios.isAxiosError(error) && error.response
          ? error.response.data.error || "Server error"
          : "Unknown error"
      );
    }

    setLoading(false);
  };

  return { addBooking, getBookings, bookings, loading, error, success };
};

export default useBooking;
