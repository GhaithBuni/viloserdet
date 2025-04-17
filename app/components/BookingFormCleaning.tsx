import { useFormik } from "formik";
import validationSchemaClean from "../Validation/validationSchemaClean";
import React, { useEffect, useState } from "react";
import useBookingClean from "../hooks/useBookingClean";
import { useRouter } from "next/navigation";
import Calendar from "react-calendar"; // Import react-calendar
import "react-calendar/dist/Calendar.css"; // Import react-calendar styles
import axios from "axios"; // Import axios for fetching locked dates
import { number } from "yup";

interface BookingFormCleaningProps {
  adress: string;
  finalTotalPrice: number;
  rabattKod: string;
  rabattPercentage: number;
  persienner: string;
  extraBadrum: string;
  extraToalett: string;
  inglasadDuschhörna: string;
  insidanMaskiner: string;
  rutChecked: boolean;
  selectedBuilding: string;
  houseSpace: string;
  diskmaskin: boolean;
  tvattmaskin: boolean;
  torktumlare: boolean;
}

export const BookingFormCleaning: React.FC<BookingFormCleaningProps> = ({
  finalTotalPrice,
  rabattKod,
  rabattPercentage,
  persienner,
  extraBadrum,
  extraToalett,
  inglasadDuschhörna,
  insidanMaskiner,
  rutChecked,
  adress,
  houseSpace,
  selectedBuilding,
  diskmaskin,
  tvattmaskin,
  torktumlare,
}) => {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      movingDay: "",
      personalNumber: "",
      lägenhetsnycklar: "",
      message: "",
    },
    validationSchema: validationSchemaClean,
    onSubmit: async (values) => {
      console.log("Form values:", values);
      await handleBooking(values);
    },
  });
  const { addBooking, loading, error, success } = useBookingClean();
  const [lockedDates, setLockedDates] = useState<Date[]>([]); // State for locked dates
  const [isCalendarOpen, setIsCalendarOpen] = useState(false); // State to toggle calendar visibility
  const router = useRouter(); // ✅ Initialize router

  const handleBooking = async (values: typeof formik.values) => {
    const bookingData = {
      ...values,
      adress,
      finalTotalPrice,
      rabattKod,
      rabattPercentage,
      persienner,
      extraBadrum,
      extraToalett,
      inglasadDuschhörna,
      insidanMaskiner,
      rutChecked,
      houseSpace,
      selectedBuilding,
      diskmaskin,
      tvattmaskin,
      torktumlare,
    };

    await addBooking(bookingData);
  };
  useEffect(() => {
    if (success) {
      router.replace("/thank-you"); // ✅ Navigate after success
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
  }, [success, router]); // ✅ Runs when success is true
  return (
    <div>
      {/* Booking Form */}
      <form onSubmit={formik.handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Bokning uppgifter *</h2>

            {/* Form Fields */}
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
                  <div className="text-red-500 text-sm">
                    {formik.errors.name}
                  </div>
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
                  <div className="text-red-500 text-sm">
                    {formik.errors.email}
                  </div>
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
                  <div className="text-red-500 text-sm">
                    {formik.errors.phone}
                  </div>
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
                          ? new Date(
                              formik.values.movingDay
                            ).toLocaleDateString()
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
                          tileDisabled={({ date }) =>
                            lockedDates.some(
                              (lockedDate) =>
                                lockedDate.toDateString() ===
                                date.toDateString()
                            )
                          } // Disable locked dates
                        />
                      </div>
                    )}
                  </div>
                  {formik.touched.movingDay && formik.errors.movingDay && (
                    <div className="text-red-500">
                      {formik.errors.movingDay}
                    </div>
                  )}
                </div>
              </div>
              <div className="">
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
                {formik.touched.personalNumber &&
                  formik.errors.personalNumber && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.personalNumber}
                    </div>
                  )}
              </div>
              <div>
                <label className="block font-medium">Lägenhetsnycklar </label>
                <select
                  name="lägenhetsnycklar"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  value={formik.values.lägenhetsnycklar}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                >
                  <option value="" disabled>
                    Välj alternativ
                  </option>
                  <option value="hemma">Jag ska vara hemma</option>
                  <option value="lämna">Jag ska lämna nycklarna till er</option>
                </select>
                {formik.touched.lägenhetsnycklar &&
                  formik.errors.lägenhetsnycklar && (
                    <div className="text-red-500 text-sm">
                      {formik.errors.lägenhetsnycklar}
                    </div>
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
          </div>
        </div>
        <div className="mt-8 flex justify-start">
          <button
            type="submit"
            className="w-full md:w-[400px] text-lg font-semibold py-4 rounded-lg shadow-md flex items-center justify-center transition bg-[#0D3F53] text-white hover:bg-[#0A2E3D]"
            disabled={loading} // Disable the button while loading
            onClick={() => {
              console.log("errors", formik.errors);
              console.log("touched", formik.touched);
            }}
          >
            {loading ? "Bokar..." : "Boka"}
          </button>
        </div>
        {error && <div className="text-red-500 mt-4">{error}</div>}{" "}
      </form>
    </div>
  );
};
