"use client";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import validationSchema from "../Validation/validationSchema";
import { useRouter } from "next/navigation";
import useBooking from "../hooks/useBooking";
import Calendar from "react-calendar"; // Import react-calendar
import "react-calendar/dist/Calendar.css"; // Import react-calendar styles
import axios from "axios"; // Import axios for fetching locked dates

interface BookingFormProps {
  formData: {
    name: string;
    email: string;
    phone: string;
    movingDay: string;

    personalNumber: string;
    address: string;
    newAddress: string;
    message: string;
  };

  // Origin Details
  zip: string;
  houseSpace: string;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedFloor: string | null;
  selectedParking: string | null;
  // Destination Details
  zipTo: string;
  houseSpaceTo: string;
  floorNumberTo: string;
  selectedBuildingTo: string | null;
  selectedFloorTo: string | null;
  selectedParkingTo: string | null;
  furnitureCategories: {
    category: string;
    items: { name: string; icon: string }[];
  }[];
  rabattKod: string;
  selectedFurniture: Record<string, number>;
  selectedPacking: string | null;
  selectedAssembly: string | null;
  selectedDisposal: string | null;
  selectedCleaning: string | null;
  totalPrice: number;
  discountPercentage: number;
  rutChecked: boolean;
  setRutChecked: (rut: boolean) => void;
  packingOption: "Alla rum" | "Bara Kök" | null;
  selectionType: "Typiskt" | "custom" | "Kostnadsfri besiktning";
  keyHandling: string[];
  selectedStorage: string; // Added this property
  storageDate: Date | null;
  // packgingPrice: number;
  // setPackgingPrice: (count: number) => void;
  // furniturePrice: number;
  // setFurniturePrice: (count: number) => void;
  // cleaningPrice: number;
  // setCleaningPrice: (count: number) => void;
}

const BookingForm: React.FC<BookingFormProps> = ({
  formData,

  // Origin Details
  zip,
  houseSpace,
  floorNumber,
  selectedBuilding,
  selectedFloor,
  selectedParking,
  // Destination Details
  zipTo,
  houseSpaceTo,
  floorNumberTo,
  selectedBuildingTo,
  selectedFloorTo,
  selectedParkingTo,
  selectedPacking,
  selectedAssembly,
  selectedDisposal,
  selectedCleaning,
  totalPrice,
  rabattKod,
  selectedFurniture,
  furnitureCategories,
  packingOption,
  rutChecked,
  discountPercentage,
  selectionType,
  keyHandling,
  selectedStorage,
  storageDate,
}) => {
  const { addBooking, loading, error, success } = useBooking(); // Use the booking hook
  const router = useRouter(); // ✅ Initialize router
  const [lockedDates, setLockedDates] = useState<Date[]>([]); // State for locked dates
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to toggle calendar visibility

  useEffect(() => {
    if (success) {
      router.push("/thank-you"); // ✅ Redirect after successful booking
    }
    const fetchLockedDates = async () => {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/locked-dates`
        ); // Fetch locked dates from API

        setLockedDates(response.data.map((date: string) => new Date(date))); // Convert to Date objects
      } catch (error) {
        console.error("Failed to fetch locked dates:", error);
      }
    };

    fetchLockedDates();
  }, [router]);

  // Handle booking submission
  const handleBooking = async (values: typeof formData) => {
    const bookingData = {
      ...values,
      totalPrice,
      rabattKod,
      zip,
      houseSpace,
      selectedFloor,
      floorNumber,
      selectedBuilding,
      selectedParking,
      zipTo,
      houseSpaceTo,
      floorNumberTo,
      selectedBuildingTo,
      selectedFloorTo,
      selectedParkingTo,
      selectedPacking,
      selectedAssembly,
      selectedDisposal,
      selectedCleaning,
      selectedFurniture,
      furnitureCategories,
      packingOption,
      rutChecked,
      discountPercentage,
      selectionType,
      keyHandling,
      selectedStorage,
      storageDate,
    };

    await addBooking(bookingData);
  };

  useEffect(() => {
    if (success) {
      router.replace("/thank-you"); // ✅ Navigate after success
    }
  }, [success, router]); // ✅ Runs when success is true
  // Formik setup
  const formik = useFormik({
    initialValues: formData,
    validationSchema,
    onSubmit: async (values) => {
      await handleBooking(values); // Call handleBooking on form submission
    },
  });

  return (
    <div className="md:col-span-2 ">
      <h2 className="text-2xl font-bold mb-4 mt-12"> Bokning uppgifter *</h2>

      {/* Form Fields */}
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block font-medium">Namn</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Ditt namn"
              value={formik.values.name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.name && formik.errors.name && (
              <div className="text-red-500">{formik.errors.name}</div>
            )}
          </div>
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Din email"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-500">{formik.errors.email}</div>
            )}
          </div>
          <div>
            <label className="block font-medium">Telefon</label>
            <input
              type="tel"
              name="phone"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Ditt telefonnummer"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.phone && formik.errors.phone && (
              <div className="text-red-500">{formik.errors.phone}</div>
            )}
          </div>
          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block font-medium">Datum</label>
              <div>
                <input
                  type="text"
                  readOnly
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none cursor-pointer"
                  placeholder="Välj datum"
                  value={
                    formik.values.movingDay
                      ? new Date(formik.values.movingDay).toLocaleDateString()
                      : ""
                  }
                  onClick={() => setIsCalendarOpen(!isCalendarOpen)} // Toggle calendar visibility
                />
                {isCalendarOpen && (
                  <div className="mt-2">
                    <Calendar
                      value={
                        formik.values.movingDay
                          ? new Date(formik.values.movingDay)
                          : null
                      }
                      onChange={(date) => {
                        formik.setFieldValue("movingDay", date);
                        setIsCalendarOpen(false); // Close calendar after selecting a date
                      }}
                      minDate={new Date()} // Add minimum date
                      tileDisabled={({ date }) => {
                        const today = new Date();
                        today.setHours(0, 0, 0, 0);

                        return (
                          date < today ||
                          lockedDates.some(
                            (lockedDate) =>
                              lockedDate.toDateString() === date.toDateString()
                          )
                        );
                      }}
                    />
                  </div>
                )}
              </div>
              {formik.touched.movingDay && formik.errors.movingDay && (
                <div className="text-red-500">{formik.errors.movingDay}</div>
              )}
            </div>
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium">Personnummer</label>
            <input
              type="text"
              name="personalNumber"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Ditt personnummer"
              value={formik.values.personalNumber}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.personalNumber && formik.errors.personalNumber && (
              <div className="text-red-500">{formik.errors.personalNumber}</div>
            )}
          </div>
          <div>
            <label className="block font-medium">Adress</label>
            <input
              type="text"
              name="address"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Från adress"
              value={formik.values.address}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.address && formik.errors.address && (
              <div className="text-red-500">{formik.errors.address}</div>
            )}
          </div>
          <div>
            <label className="block font-medium">Nya Adress</label>
            <input
              type="text"
              name="newAddress"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Till adress"
              value={formik.values.newAddress}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.newAddress && formik.errors.newAddress && (
              <div className="text-red-500">{formik.errors.newAddress}</div>
            )}
          </div>
          <div className="md:col-span-2">
            <label className="block font-medium">Meddelande</label>
            <textarea
              name="message"
              className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
              placeholder="Ditt meddelande (valfritt)"
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="text-red-500">{formik.errors.message}</div>
            )}
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <button
            type="submit"
            className="w-full md:w-[400px] text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]"
            disabled={loading} // Disable the button while loading
          >
            {loading ? "Bokar..." : "Boka"}
          </button>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}{" "}
        {/* Display error message */}
      </form>
    </div>
  );
};

export default BookingForm;
