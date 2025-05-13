"use client";

import React, { useState, useEffect } from "react";
import useFetchCleanPrice from "../hooks/UseFetchCleanPrice"; // Replace with the actual path to your hook

import axios from "axios"; // Import axios for API requests
import { BookingFormCleaning } from "../components/BookingFormCleaning";
import { BookingFormVisning } from "../components/BookingFornVisning";

const Page = () => {
  const [adress, setAdress] = useState("");
  const [houseSpace, setHouseSpace] = useState("");
  const [stad, setStad] = useState(""); // State for the selected city
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [rabattKod, setRabattKod] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [totalPrice, setTotalPrice] = useState(0); // Initial price before discount
  const [showExtraServices, setShowExtraServices] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [rutChecked, setRutChecked] = useState(true);
  let finalTotalPrice: number = 0;

  // Extra Tjänster states
  const [persienner, setPersienner] = useState<number>(0); // Change type to number with initial value 0
  const [extraBadrum, setExtraBadrum] = useState<string>("Nej");
  const [extraToalett, setExtraToalett] = useState<string>("Nej");
  const [inglasadDuschhörna, setInglasadDuschhörna] = useState<string>("Nej");
  const [insidanMaskiner, setInsidanMaskiner] = useState<string>("Nej");
  const [diskmaskin, setDiskmaskin] = useState<boolean>(false);
  const [tvattmaskin, setTvattmaskin] = useState<boolean>(false);
  const [torktumlare, setTorktumlare] = useState<boolean>(false);
  const { fetchPrice, loadingPrice, errorData, fetchSuccess } =
    useFetchCleanPrice(); // ✅ Get the function and loading state

  const handleApplyDiscount = async () => {
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
  const Prices = {
    Persienner: 100,
    ExtraBadrum: 300,
    ExtraToalett: 200,
    InglasadDuschhörna: 200,
    InsidanMaskiner: 100,
  };

  const removeDiscount = () => {
    setDiscountPercentage(0);
    setRabattKod("");
    setDiscountError(null);
  };

  const handleButtonClick = () => {
    const newErrors = {
      houseSpace: houseSpace.trim() === "",
      adress: adress.trim() === "",
      stad: stad.trim() === "",
      selectedBuilding: selectedBuilding === null,
    };

    setErrors(newErrors);

    if (!Object.values(newErrors).includes(true)) {
      // Handle successful validation here
      console.log("All fields are valid!");
      return true;
    }
    return false;
  };
  finalTotalPrice =
    (discountPercentage > 0
      ? totalPrice * (1 - discountPercentage / 100) // Apply discount only to totalPrice
      : totalPrice) +
    persienner * Prices.Persienner +
    (extraBadrum === "Ja" ? Prices.ExtraBadrum : 0) +
    (extraToalett === "Ja" ? Prices.ExtraToalett : 0) +
    (inglasadDuschhörna === "Ja" ? Prices.InglasadDuschhörna : 0) +
    ((diskmaskin ? Prices.InsidanMaskiner : 0) +
      (tvattmaskin ? Prices.InsidanMaskiner : 0) +
      (torktumlare ? Prices.InsidanMaskiner : 0));
  if (!rutChecked) {
    finalTotalPrice = finalTotalPrice * 2;
  }
  useEffect(() => {
    if (insidanMaskiner === "Nej") {
      setDiskmaskin(false);
      setTvattmaskin(false);
      setTorktumlare(false);
    }
  }, [insidanMaskiner]);

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white  flex items-center  h-[65vh] md:h-[70vh] lg:h-[100vh]">
        <div
          className="absolute inset-0 bg-[url('/1.jpg')] bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url('/visning.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        ></div>

        <h1
          className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-white text-center relative 
  after:block after:h-1 after:bg-[#DEB82D] after:mt-2 
  after:mx-auto after:w-full after:max-w-[200px] md:after:max-w-[300px] lg:after:max-w-[400px] z-10"
        >
          Visningstädning
        </h1>
      </div>

      <div className="container mx-auto px-6 py-12 mt-12 ">
        {!showExtraServices && (
          <>
            <h2 className="text-2xl font-bold mb-4">Adress Information *</h2>

            <div className="grid grid-cols-1 gap-6 ">
              {/* Address Field */}
              <input
                type="text"
                placeholder="Adress"
                className={` md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
                  errors.zipFrom
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#DEB82D]"
                }`}
                value={adress}
                onChange={(e) => {
                  setAdress(e.target.value);
                }}
              />

              {/* City Dropdown */}
              <select
                value={stad}
                onChange={(e) => setStad(e.target.value)}
                className={` md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
                  errors.stad
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#DEB82D]"
                }`}
              >
                <option value="" disabled>
                  Välj stad
                </option>
                <option value="Uppsala">Uppsala</option>
                <option value="Enköping">Enköping</option>
                <option value="Stockholm">Stockholm</option>
                <option value="Karlstad">Karlstad</option>
                <option value="Västerås">Västerås</option>
              </select>

              {/* House Size Field */}
              <input
                type="number"
                min="1"
                placeholder="Storlek (m²)"
                className={` md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
                  errors.houseSpace
                    ? "border-red-500 focus:ring-red-500"
                    : "border-gray-300 focus:ring-[#DEB82D]"
                }`}
                value={houseSpace}
                onChange={(e) => setHouseSpace(e.target.value)}
              />
            </div>

            {/* Building Type - Responsive Grid */}
            <div className="mt-8 ">
              <h2 className="text-2xl font-bold mb-4">Välj building *</h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  { label: "Lägenhet", icon: "/apartment.svg" },
                  { label: "Villa", icon: "/house.svg" },
                  { label: "Radhus", icon: "/radhus.svg" },
                ].map((item) => (
                  <div
                    key={item.label}
                    onClick={() => setSelectedBuilding(item.label)}
                    className={`p-6 border rounded-lg flex flex-col items-center cursor-pointer transition ${
                      selectedBuilding === item.label
                        ? "bg-[#0D3F53] text-white scale-105 shadow-md"
                        : errors.selectedBuilding
                        ? "border-red-500"
                        : "bg-white hover:bg-gray-100"
                    }`}
                  >
                    <img
                      src={item.icon}
                      alt={item.label}
                      className="w-16 h-16"
                    />
                    <span className="mt-2 font-semibold">{item.label}</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
        {!isClicked && (
          <>
            <div className="mt-8 flex justify-center">
              <button
                onClick={() => {
                  if (handleButtonClick()) {
                    fetchPrice({
                      houseSpace,
                      setTotalPrice,
                    }).then((success) => {
                      if (success) {
                        setShowExtraServices(true);
                        setIsClicked(true); // Set isClicked to true after successful fetch
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
          </>
        )}
        {showExtraServices && (
          <>
            {/* Back Button */}
            <div className="mb-4">
              <button
                onClick={() => {
                  setShowExtraServices(false);
                  setIsClicked(false); // Reset isClicked state
                }} // Navigate back to AddressToForm page
                className="px-6 py-3 bg-[#0D3F53] text-white rounded-md hover:bg-[#0A2E3D] transition"
              >
                ⬅Bakåt
              </button>
            </div>
            {/* Extra Tjänster Section */}
            <div className="grid col-1 gap-4 md:flex justify-between mt-8">
              <div className="w-full md:w-1/2">
                <div className="bg-[#F5F5F5] p-4 mb-4">
                  <h2 className="text-2xl font-bold">Extra Tjänster</h2>
                </div>
                <div className="flex flex-col gap-1">
                  {[
                    {
                      label: "Persienner",
                      component: (
                        <div className="flex items-center gap-2">
                          <button
                            className={`px-4 py-2 rounded-lg text-white font-semibold bg-[#0D3F53]`}
                            onClick={() =>
                              setPersienner(Math.max(0, persienner - 1))
                            }
                          >
                            -
                          </button>
                          <span className="w-8 text-center">{persienner}</span>
                          <button
                            className={`px-4 py-2 rounded-lg text-white font-semibold bg-[#0D3F53]`}
                            onClick={() => setPersienner(persienner + 1)}
                          >
                            +
                          </button>
                        </div>
                      ),
                    },
                    {
                      label: "Extra badrum",
                      state: extraBadrum,
                      setState: setExtraBadrum,
                    },
                    {
                      label: "Extra toalett",
                      state: extraToalett,
                      setState: setExtraToalett,
                    },
                    {
                      label: "Inglasad duschhörna",
                      state: inglasadDuschhörna,
                      setState: setInglasadDuschhörna,
                    },
                    {
                      label: "Insidan av vitvaror",
                      state: insidanMaskiner,
                      setState: setInsidanMaskiner,
                      extraContent: insidanMaskiner === "Ja" && (
                        <div className="w-full mt-4">
                          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {[
                              {
                                title: "Diskmaskin",
                                state: diskmaskin,
                                setState: setDiskmaskin,
                              },
                              {
                                title: "Tvättmaskin",
                                state: tvattmaskin,
                                setState: setTvattmaskin,
                              },
                              {
                                title: "Torktumlare",
                                state: torktumlare,
                                setState: setTorktumlare,
                              },
                            ].map((appliance) => (
                              <div
                                key={appliance.title}
                                onClick={() =>
                                  appliance.setState(!appliance.state)
                                }
                                className={`p-3 rounded-lg cursor-pointer transition-all transform hover:scale-105 shadow-sm hover:shadow-md ${
                                  appliance.state
                                    ? "bg-[#0D3F53] text-white"
                                    : "bg-gray-100 hover:bg-gray-200"
                                }`}
                              >
                                <div className="flex items-center justify-between space-x-2">
                                  <span className="font-medium text-sm truncate">
                                    {appliance.title}
                                  </span>
                                  <span className="text-sm whitespace-nowrap">
                                    100 kr
                                  </span>
                                </div>
                                <div className="mt-1 text-xs">
                                  {appliance.state ? (
                                    <div className="flex items-center gap-1">
                                      <span>✓</span> Vald
                                    </div>
                                  ) : (
                                    <span className="text-gray-600">
                                      Klicka för att välja
                                    </span>
                                  )}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      ),
                    },
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex flex-col bg-[#FEF4E8] border rounded-lg p-4 shadow-lg"
                    >
                      <div className="flex items-center justify-between">
                        <span className="font-medium">{item.label}</span>
                        {item.label === "Persienner" ? (
                          item.component
                        ) : (
                          <div className="flex gap-2">
                            <button
                              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                                item.state === "Ja"
                                  ? "bg-[#0D3F53]"
                                  : "bg-gray-300"
                              }`}
                              onClick={() =>
                                item.setState && item.setState("Ja")
                              }
                            >
                              Ja
                            </button>
                            <button
                              className={`px-6 py-2 rounded-lg text-white font-semibold ${
                                item.state === "Nej"
                                  ? "bg-[#0D3F53]"
                                  : "bg-gray-300"
                              }`}
                              onClick={() =>
                                item.setState && item.setState("Nej")
                              }
                            >
                              Nej
                            </button>
                          </div>
                        )}
                      </div>
                      {item.extraContent && (
                        <div className="mt-4 w-full">{item.extraContent}</div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Price Summary */}
              <div className="bg-white p-6 border rounded-lg shadow-md mt-9 ">
                <h3 className="text-xl font-bold mb-4">Prisuppgifter</h3>
                <div className="mb-3">
                  <p className="flex justify-between">
                    {rutChecked ? (
                      <>
                        <span>Visningstädning</span>{" "}
                        <span>{totalPrice} kr</span>
                      </>
                    ) : (
                      <>
                        <span>Visningstädning</span>{" "}
                        <span>{totalPrice * 2} kr</span>
                      </>
                    )}
                  </p>
                </div>
                {persienner > 0 && (
                  <p className="flex justify-between text-green-600 font-semibold">
                    <span>Persienner ({persienner} st)</span>
                    <span>{persienner * Prices.Persienner} kr</span>
                  </p>
                )}
                {extraBadrum === "Ja" && (
                  <p className="flex justify-between text-green-600 font-semibold">
                    <span>Extra Badrum</span>{" "}
                    <span>{Prices.ExtraBadrum} kr</span>
                  </p>
                )}
                {extraToalett === "Ja" && (
                  <p className="flex justify-between text-green-600 font-semibold">
                    <span>ExtraToalett</span>{" "}
                    <span>{Prices.ExtraToalett} kr</span>
                  </p>
                )}
                {inglasadDuschhörna === "Ja" && (
                  <p className="flex justify-between text-green-600 font-semibold">
                    <span>InglasadDuschhörna</span>{" "}
                    <span>{Prices.InglasadDuschhörna} kr</span>
                  </p>
                )}
                {insidanMaskiner === "Ja" && (
                  <>
                    {diskmaskin && (
                      <p className="flex justify-between text-green-600 font-semibold">
                        <span>Diskmaskin</span>
                        <span>100 kr</span>
                      </p>
                    )}
                    {tvattmaskin && (
                      <p className="flex justify-between text-green-600 font-semibold">
                        <span>Tvättmaskin</span>
                        <span>100 kr</span>
                      </p>
                    )}
                    {torktumlare && (
                      <p className="flex justify-between text-green-600 font-semibold">
                        <span>Torktumlare</span>
                        <span>100 kr</span>
                      </p>
                    )}
                  </>
                )}

                {/* Show Discount Amount if discount is applied */}
                {discountPercentage > 0 && (
                  <p className="flex justify-between text-red-600 font-semibold">
                    <span>Rabatt</span>
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
                    <span>Totalt</span>{" "}
                    <span>{finalTotalPrice.toFixed(2)} kr</span>
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
                    checked={rutChecked}
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

            {/* Booking Form */}
            <BookingFormVisning
              adress={adress}
              finalTotalPrice={finalTotalPrice}
              rabattKod={rabattKod}
              rabattPercentage={discountPercentage}
              persienner={persienner.toString()}
              extraBadrum={extraBadrum}
              extraToalett={extraToalett}
              inglasadDuschhörna={inglasadDuschhörna}
              insidanMaskiner={insidanMaskiner}
              rutChecked={rutChecked}
              selectedBuilding={selectedBuilding || ""}
              houseSpace={houseSpace}
              diskmaskin={diskmaskin}
              tvattmaskin={tvattmaskin}
              torktumlare={torktumlare}
            />
          </>
        )}
      </div>
    </div>
  );
};

export default Page;
