"use client";

import React, { useState } from "react";

const Page = () => {
  const [adress, setAdress] = useState("");
  const [houseSpace, setHouseSpace] = useState("");
  const [stad, setStad] = useState(""); // State for the selected city
  const [hemstadningFrequency, setHemstadningFrequency] = useState(""); // State for the frequency of hemstädning
  const [errors, setErrors] = useState<Record<string, boolean>>({});
  const [selectedBuilding, setSelectedBuilding] = useState<string | null>(null);
  const [rabattKod, setRabattKod] = useState("");
  const [discountApplied, setDiscountApplied] = useState(false);
  const [totalPrice, setTotalPrice] = useState(4060); // Initial price before discount
  const [husdjur, setHusdjur] = useState<string | null>(null); // State for husdjur selection

  const handleBokning = () => {
    const newErrors: Record<string, boolean> = {
      houseSpace: houseSpace.trim() === "",
      stad: stad.trim() === "",
    };
    setErrors(newErrors);
  };

  // bokning uppgifter
  const handleApplyDiscount = () => {
    if (rabattKod === "DISCOUNT10") {
      setTotalPrice(3654); // Apply a 10% discount
      setDiscountApplied(true);
    } else {
      setDiscountApplied(false);
    }
  };

  return (
    <div className="bg-[#F5F5F5] text-black min-h-screen py-24">
      {/* Header Section */}
      <div className="relative bg-white px-6 md:px-12 pt-24 md:pt-32 pb-32 h-[55vh] flex items-center">
        <h1 className="container mx-auto px-6 md:px-12 text-4xl md:text-6xl font-bold text-[#0D3F53] text-center relative after:block after:w-full after:h-1 after:bg-[#DEB82D] after:mt-2">
          Hemstädning
        </h1>
      </div>

      <div className="container mx-auto px-6 py-12 mt-12">
        <h2 className="text-2xl font-bold mb-4">Adress Information *</h2>

        <div className="grid grid-cols-1 gap-6">
          {/* Address Field */}
          <input
            type="text"
            placeholder="Adress"
            className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
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
            className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
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

          {/* Hemstädning Frequency Dropdown */}
          <select
            value={hemstadningFrequency}
            onChange={(e) => setHemstadningFrequency(e.target.value)}
            className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.hemstadningFrequency
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DEB82D]"
            }`}
          >
            <option value="" disabled>
              Välj frekvens
            </option>
            <option value="varannan-vecka">Hemstädning varannan vecka</option>
            <option value="varje-vecka">Hemstädning varje vecka</option>
          </select>

          {/* House Size Field */}
          <input
            type="number"
            min="1"
            placeholder="Storlek (m²)"
            className={`w-1/2 md:w-1/5 p-3 border rounded-md focus:outline-none focus:ring-2 transition ${
              errors.houseSpace
                ? "border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:ring-[#DEB82D]"
            }`}
            value={houseSpace}
            onChange={(e) => setHouseSpace(e.target.value)}
          />
        </div>

        {/* Building Type - Responsive Grid */}
        <div className="mt-8">
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
                <img src={item.icon} alt={item.label} className="w-16 h-16" />
                <span className="mt-2 font-semibold">{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Har ni husdjur? Section */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4">Har ni husdjur?</h2>

          <div className="flex flex-col gap-4 mb-6">
            {[
              { label: "Katt", value: "katt" },
              { label: "Hund", value: "hund" },
              { label: "Annat djur", value: "annat" },
            ].map((item) => (
              <label
                key={item.value}
                className="flex items-center gap-2 cursor-pointer"
              >
                <input
                  type="radio"
                  name="husdjur"
                  value={item.value}
                  checked={husdjur === item.value}
                  onChange={() => setHusdjur(item.value)}
                  className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
                />
                {item.label}
              </label>
            ))}
          </div>
        </div>

        {/* Booking Form */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="md:col-span-2">
            <h2 className="text-2xl font-bold mb-4">Bokning uppgifter *</h2>

            {/* Form Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Namn</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  placeholder="Ditt namn"
                />
              </div>
              <div>
                <label className="block font-medium">Email</label>
                <input
                  type="email"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  placeholder="Din email"
                />
              </div>
              <div>
                <label className="block font-medium">Telefon</label>
                <input
                  type="tel"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  placeholder="Ditt telefonnummer"
                />
              </div>
              
                <div>
                  <label className="block font-medium">Önskat startdatum</label>
                  <input
                    type="date"
                    className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  />
                </div>
               
             
              <div className="">
                <label className="block font-medium">Personnummer</label>
                <input
                  type="text"
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                  placeholder="Ditt personnummer"
                />
              </div>
              <div>
                <label className="block font-medium">Lägenhetsnycklar </label>
                <select
                  className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                >
                  <option value="" disabled>
                    Välj alternativ
                  </option>
                  <option value="hemma">Jag ska vara hemma</option>
                  <option value="lämna">Jag ska lämna nycklarna till er</option>
                </select>
              </div>

             
            </div>
          </div>

          {/* Price Summary */}
          <div className="bg-white p-6 border rounded-lg shadow-md mt-9 ">
            <h3 className="text-xl font-bold mb-4">Prisuppgifter</h3>
            <div className="mb-3">
              <p className="flex justify-between">
                <span>Flytthjälp</span> <span>2030 kr</span>
              </p>
              <p className="flex justify-between">
                <span>Flyttstäd</span> <span>2030 kr</span>
              </p>
              <p className="text-sm italic text-gray-500">
                *Montering per timme kommer att läggas till i priset
              </p>
            </div>

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
                  className="px-4 py-3 bg-[#0D3F53] text-white rounded-md"
                >
                  Använd
                </button>
              </div>
              {discountApplied && (
                <p className="text-green-600 mt-2">Rabattkod tillämpad!</p>
              )}
            </div>

            {/* Total Price */}
            <div className="mt-6 p-4 bg-gray-100 rounded-lg">
              <p className="text-lg font-bold flex justify-between">
                <span>Totalt</span> <span>{totalPrice} kr</span>
              </p>
              <p className="text-sm text-gray-500">
                *Priset kan variera beroende på de valda möbler
              </p>
            </div>
            <div className="flex items-center gap-2 mt-2" >
                <input type="checkbox" id="rut" className="w-5 h-5" />
                <label htmlFor="rut" className="font-medium">
                  Rut
                </label>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;