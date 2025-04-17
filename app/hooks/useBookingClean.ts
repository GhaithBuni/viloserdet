import { useState } from "react";
import axios from "axios";

interface BookingData {
  name: string;
  personalNumber: string;
  email: string;
  phone: string;
  movingDay: string;

  adress: string;

  message: string;
  finalTotalPrice: number;
  rabattKod: string;
  rabattPercentage: number;
  persienner: string;
  extraBadrum: string;
  extraToalett: string;
  inglasadDuschhörna: string;
  insidanMaskiner: string;
  rutChecked: boolean;
}

interface Booking {
  _id: string;
  name: string;
  personalNumber: string;
  email: string;
  phone: string;
  movingDay: string;

  address: string;
  message: string;
}

const useBookingClean = () => {
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
        "http://localhost:4000/api/clean-bookings",
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
  const addBookingVisning = async (bookingData: BookingData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      console.log("🟡 Sending data to API:", bookingData);

      const { data } = await axios.post(
        "http://localhost:4000/api/clean-visning",
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
        "http://localhost:4000/api/clean-bookings"
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

  return {
    addBooking,
    getBookings,
    bookings,
    loading,
    error,
    success,
    addBookingVisning,
  };
};

export default useBookingClean;
