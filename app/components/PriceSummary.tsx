import React, { use, useEffect, useState } from "react";
import axios from "axios"; // Import axios for API requests
import FurnitureSelection from "./FurnitureSelection";
import BookingForm from "./BookingForm";
import router from "next/router";
import useFetchPrice from "../hooks/useFetchPrice"; // ✅ Import the hook

interface PriceSummaryProps {
  totalPrice: number;
  setTotalPrice: (price: number) => void;
  rabattKod: string;
  setRabattKod: (code: string) => void;
  discountApplied: boolean;
  setDiscountApplied: (applied: boolean) => void;
  handleApplyDiscount: () => void;
  selectedPacking: string;
  setSelectedPacking: (packing: string) => void;
  selectedAssembly: string;
  setSelectedAssembly: (assembly: string) => void;
  selectedDisposal: string;
  setSelectedDisposal: (disposal: string) => void;
  selectedCleaning: string;
  setSelectedCleaning: (cleaning: string) => void;
  selectionType: "Typiskt" | "custom" | "Kostnadsfri besiktning";
  setSelectionType: (
    type: "Typiskt" | "custom" | "Kostnadsfri besiktning"
  ) => void;
  furnitureCategories: {
    category: string;
    items: { name: string; icon: string }[];
  }[];
  selectedFurniture: Record<string, number>;
  setSelectedFurniture: React.Dispatch<
    React.SetStateAction<Record<string, number>>
  >;
  packgingPrice: number;
  setPackgingPrice: (price: number) => void;
  furniturePrice: number;
  setFurniturePrice: (price: number) => void;
  cleaningPrice: number;
  setCleaningPrice: (price: number) => void;
  formData: {
    name: string;
    email: string;
    phone: string;
    movingDay: string;
    time: string;
    personalNumber: string;
    address: string;
    newAddress: string;
    message: string;
  };
  zip: string;
  houseSpace: string;
  floorNumber: string;
  selectedBuilding: string | null;
  selectedFloor: string | null;
  selectedParking: string | null;
  zipTo: string;
  houseSpaceTo: string;
  floorNumberTo: string;
  selectedBuildingTo: string | null;
  selectedFloorTo: string | null;
  selectedParkingTo: string | null;

  onShowToChange: (showExtraServices: boolean) => void;
}

const PriceSummary: React.FC<PriceSummaryProps> = ({
  totalPrice,
  setTotalPrice,
  rabattKod,
  setRabattKod,
  discountApplied,
  setDiscountApplied,
  handleApplyDiscount,
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
  furnitureCategories,
  selectedFurniture,
  setSelectedFurniture,
  packgingPrice,
  furniturePrice,
  cleaningPrice,
  setFurniturePrice,
  setCleaningPrice,
  setPackgingPrice,
  formData,
  zip,
  houseSpace,
  floorNumber,
  selectedBuilding,
  selectedFloor,
  selectedParking,
  zipTo,
  houseSpaceTo,
  floorNumberTo,
  selectedBuildingTo,
  selectedFloorTo,
  selectedParkingTo,
  onShowToChange,
}) => {
  const [rutChecked, setRutChecked] = useState(true);
  const [packingOption, setPackingOption] = useState<
    "Alla rum" | "Bara Kök" | null
  >(null);
  const [storageDate, setStorageDate] = useState<Date | null>(null);
  const [selectedStorage, setSelectedStorage] = useState<string>("");
  const [discountPercentage, setDiscountPercentage] = useState<number>(0);
  const [discountError, setDiscountError] = useState<string | null>(null);
  const [keyHandlingOptions] = useState([
    "Vi öppnar åt er",
    "Vi lämnar nyckeln på ert kontor",
    "Jag har redan lämnat nyckel",
  ]);
  const [keyHandling, setKeyHandling] = useState<string>("Vi öppnar åt er");
  const [showExtraServices, setShowExtraServices] = useState(true);
  const [discountedPrice, setDiscountedPrice] = useState<number>(0);
  const [persienner, setPersienner] = useState<number>(0); // Change type to number with initial value 0
  const [extraBadrum, setExtraBadrum] = useState<string>("Nej");
  const [extraToalett, setExtraToalett] = useState<string>("Nej");
  const [inglasadDuschhörna, setInglasadDuschhörna] = useState<string>("Nej");
  const [insidanMaskiner, setInsidanMaskiner] = useState<string>("Nej");
  const [diskmaskin, setDiskmaskin] = useState<boolean>(false);
  const [tvattmaskin, setTvattmaskin] = useState<boolean>(false);
  const [torktumlare, setTorktumlare] = useState<boolean>(false);
  const [extraServicePrices, setExtraServicePrices] = useState<
    Record<string, number>
  >({});
  const [loadingExtraServices, setLoadingExtraServices] =
    useState<boolean>(true);
  let finalTotalPrice: number = 0;
  const { fetchPrice, loadingPrice, errorData, fetchSuccess } = useFetchPrice(); // ✅ Get the function and loading state

  useEffect(() => {
    if (selectionType !== "custom") {
      setSelectedFurniture({});
    }
  }, [selectionType, setSelectedFurniture]);

  useEffect(() => {
    onShowToChange(showExtraServices);
  }, [showExtraServices, onShowToChange]);

  useEffect(() => {
    const fetchExtraServicePrices = async () => {
      try {
        setLoadingExtraServices(true);
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/extra-services`
        );
        setExtraServicePrices(response.data);
      } catch (error) {
        console.error("Error fetching extra service prices:", error);
      } finally {
        setLoadingExtraServices(false);
      }
    };

    fetchExtraServicePrices();
  }, []);

  handleApplyDiscount = async () => {
    try {
      setDiscountError(null);
      console.log("Applying discount code:", rabattKod);

      // Check for special price codes first (case insensitive)
      const lowerCaseCode = rabattKod.toLowerCase();
      if (lowerCaseCode.startsWith("flytt")) {
        const priceFromCode = parseInt(rabattKod.replace(/flytt/i, ""));
        if (!isNaN(priceFromCode)) {
          // Validate price range
          if (priceFromCode >= 1499 && priceFromCode <= 3999) {
            finalTotalPrice = priceFromCode;
            setTotalPrice(priceFromCode);
            setDiscountApplied(true);
            return;
          } else {
            setDiscountError("Ogiltig Rabattkod.");
            return;
          }
        }
      }

      // If not a special code, proceed with regular discount validation
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/discounts/validate`,
        { code: rabattKod }
      );
      if (response.data.valid) {
        setDiscountPercentage(response.data.percentage);
        setTotalPrice(
          Math.round(totalPrice * (1 - response.data.percentage / 100))
        );
        setDiscountedPrice(
          Math.round(totalPrice * (response.data.percentage / 100))
        );
        console.log(`✅ Rabatt tillämpas ${response.data.percentage}%`);
      }
    } catch (error) {
      console.error("Error applying discount:", error);
      setDiscountError("Ogiltig eller utgången rabattkod.");
    }
  };

  const removeDiscount = async () => {
    setDiscountPercentage(0);
    setRabattKod("");
    setDiscountError(null);
    setDiscountApplied(false);

    // Re-fetch original price
    await fetchPrice({
      houseSpace,
      zip,
      zipTo,
      floorNumber,
      floorNumberTo,
      selectedFloor,
      selectedFloorTo,
      selectedParking,
      setTotalPrice,
      setPackgingPrice,
      setFurniturePrice,
      setCleaningPrice,
      selectedParkingTo,
    });
  };
  finalTotalPrice =
    totalPrice +
    (selectedPacking === "Ja"
      ? packingOption === "Bara Kök"
        ? packgingPrice * 0.4
        : packgingPrice
      : 0) +
    (selectedDisposal === "Ja" ? furniturePrice : 0) +
    (selectedCleaning === "Ja" ? cleaningPrice * 0.85 : 0); // Apply 15% discount

  if (selectedFurniture["Tungt"]) {
    finalTotalPrice += 600 * selectedFurniture["Tungt"];
  }
  if (selectedFurniture["Piano"]) {
    finalTotalPrice += 600 * selectedFurniture["Piano"];
  }

  if (!rutChecked) {
    finalTotalPrice = finalTotalPrice * 2; // Apply RUT deduction to the entire price
  }

  if (selectedCleaning === "Ja") {
    if (extraBadrum === "Ja") {
      finalTotalPrice += extraServicePrices["extraBadrum"] || 0;
    }
    if (extraToalett === "Ja") {
      finalTotalPrice += extraServicePrices["extraToalett"] || 0;
    }
    if (inglasadDuschhörna === "Ja") {
      finalTotalPrice += extraServicePrices["inglasadDuschhörna"] || 0;
    }
    if (insidanMaskiner === "Ja") {
      finalTotalPrice +=
        (diskmaskin ? extraServicePrices["diskmaskin"] || 0 : 0) +
        (tvattmaskin ? extraServicePrices["tvattmaskin"] || 0 : 0) +
        (torktumlare ? extraServicePrices["torktumlare"] || 0 : 0);
    }
    finalTotalPrice += (extraServicePrices["persienner"] || 0) * persienner;
  }

  return (
    <>
      {/* Back Button */}
      <div className="mb-4">
        <button
          onClick={() => {
            setShowExtraServices(false);
            console.log(selectedFurniture["Tungt"]);
          }} // Navigate back to AddressToForm page
          className="px-6 py-3 bg-[#0D3F53] text-white rounded-md hover:bg-[#0A2E3D] transition"
        >
          ⬅Bakåt
        </button>
      </div>
      <div className=" grid col-1 gap-4 md:flex justify-between  mt-8">
        {/* Extra tjänster*/}

        <div className="bg-[#FEF4E8] w-full md:w-1/2">
          <h2 className="text-2xl font-bold bg-[#F5F5F5] pb-4">
            {" "}
            Extra tjänster{" "}
          </h2>
          {[
            {
              label: "Behöver du hjälp att packa?",
              state: selectedPacking,
              setState: setSelectedPacking,
              additionalContent: selectedPacking === "Ja" && (
                <div className="mt-4 border-t pt-4">
                  <label className="block font-medium mb-2">
                    Vad ska packas?
                  </label>
                  <div className="flex gap-2">
                    <button
                      className={`px-6 py-2 rounded-lg text-white font-semibold ${
                        packingOption === "Alla rum"
                          ? "bg-[#0D3F53]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setPackingOption("Alla rum")}
                    >
                      Alla rum
                    </button>
                    <button
                      className={`px-6 py-2 rounded-lg text-white font-semibold ${
                        packingOption === "Bara Kök"
                          ? "bg-[#0D3F53]"
                          : "bg-gray-300"
                      }`}
                      onClick={() => setPackingOption("Bara Kök")}
                    >
                      Bara Kök
                    </button>
                  </div>
                </div>
              ),
            },
            {
              label: "Behöver du hjälp att Montera/Nedmontera?",
              state: selectedAssembly,
              setState: setSelectedAssembly,
            },
            {
              label: "Behöver du hjälp med Bortslig?",
              state: selectedDisposal,
              setState: setSelectedDisposal,
            },
            {
              label: "Behöver du flyttstäd? Får du 15% Rabatt",
              state: selectedCleaning,
              setState: (value: string) => {
                setSelectedCleaning(value);
                if (value === "Nej") {
                  setPersienner(0);
                  setExtraBadrum("Nej");
                  setExtraToalett("Nej");
                  setInglasadDuschhörna("Nej");
                  setInsidanMaskiner("Nej");
                  setDiskmaskin(false);
                  setTvattmaskin(false);
                  setTorktumlare(false);
                }
              },
            },
            {
              label: "Behöver du magasinering?",
              state: selectedStorage,
              setState: setSelectedStorage,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="flex flex-col bg-[#FEF4E8] border rounded-lg p-4 shadow-lg"
            >
              <div className="flex items-center justify-between">
                <span className="font-medium">{item.label}</span>
                <div className="flex gap-2">
                  <button
                    className={`px-6 py-2 rounded-lg text-white font-semibold ${
                      item.state === "Ja" ? "bg-[#0D3F53]" : "bg-gray-300"
                    }`}
                    onClick={() => item.setState("Ja")}
                  >
                    Ja
                  </button>
                  <button
                    className={`px-6 py-2 rounded-lg text-white font-semibold ${
                      item.state === "Nej" ? "bg-[#0D3F53]" : "bg-gray-300"
                    }`}
                    onClick={() => item.setState("Nej")}
                  >
                    Nej
                  </button>
                </div>
              </div>
              {item.additionalContent && (
                <div className="bg-[#FEF4E8]">{item.additionalContent}</div>
              )}
            </div>
          ))}

          {/* Show date input for storage if "Ja" is selected */}
          {selectedStorage === "Ja" && (
            <div className="mt-4 p-4 border-t">
              <label className="block font-medium mb-2">
                Datum ut för magasinering
              </label>
              <input
                type="date"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-[#DEB82D] outline-none"
                value={
                  storageDate ? storageDate.toISOString().split("T")[0] : ""
                }
                onChange={(e) =>
                  setStorageDate(
                    e.target.value ? new Date(e.target.value) : null
                  )
                }
              />
            </div>
          )}
          {selectedCleaning === "Ja" && (
            <>
              <div>
                <div className="bg-[#F5F5F5] p-4 mb-4">
                  <h2 className="text-2xl font-bold">
                    Extra Tjänster (Flyttstäd)
                  </h2>
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
                      setState: (value: string) => {
                        setInsidanMaskiner(value);
                        if (value === "Nej") {
                          setDiskmaskin(false);
                          setTvattmaskin(false);
                          setTorktumlare(false);
                        }
                      },
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
            </>
          )}
        </div>
        {/* Price Summary */}
        <div className="bg-white p-6 border rounded-lg shadow-md mt-10 max-h-[650px]">
          <h3 className="text-xl font-bold mb-4">Prisuppgifter</h3>
          <div className="mb-3">
            <p className="flex justify-between">
              {rutChecked ? (
                <>
                  <span>Flytthjälp</span> <span>{totalPrice} kr</span>
                </>
              ) : (
                <>
                  <span>Flytthjälp</span> <span>{totalPrice * 2} kr</span>
                </>
              )}
            </p>
          </div>

          {/* Show Packing price if selected */}
          {selectedPacking === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>
                Packning {packingOption === "Bara Kök" ? "(Bara Kök)" : ""}
              </span>
              <span>
                {packingOption === "Bara Kök"
                  ? packgingPrice * 0.4
                  : packgingPrice}{" "}
                kr
              </span>
            </p>
          )}

          {/* Show Disposal price if selected */}
          {selectedDisposal === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Möbler Bortslig</span> <span>{furniturePrice} kr</span>
            </p>
          )}

          {/* Show Cleaning price if selected */}
          {selectedCleaning === "Ja" && (
            <div className="flex flex-col text-green-600 font-semibold">
              <div className="flex justify-between">
                <span>Flyttstäd (Ordinarie pris)</span>
                <span className="line-through">{cleaningPrice} kr</span>
              </div>
              <div className="flex justify-between">
                <span>Flyttstäd (Efter 15% rabatt)</span>
                <span>{(cleaningPrice * 0.85).toFixed(0)} kr</span>
              </div>
            </div>
          )}

          {/* Show Tungt and Piano prices if selected */}
          {selectedFurniture["Tungt"] > 0 && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Tungt objekt ({selectedFurniture["Tungt"]} st)</span>
              <span>{600 * selectedFurniture["Tungt"]} kr</span>
            </p>
          )}
          {selectedFurniture["Piano"] > 0 && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Piano ({selectedFurniture["Piano"]} st)</span>
              <span>{600 * selectedFurniture["Piano"]} kr</span>
            </p>
          )}

          {/* Show Discount Amount if discount is applied */}
          {discountPercentage > 0 && (
            <p className="flex justify-between text-red-600 font-semibold">
              <span>FlyttHäjlp Rabatt</span>
              <span>-{discountedPrice.toFixed(2)} kr</span>
            </p>
          )}
          {persienner > 0 && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Persienner ({persienner} st)</span>
              <span>{persienner * extraServicePrices.persienner} kr</span>
            </p>
          )}
          {extraBadrum === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>Extra Badrum</span>{" "}
              <span>{extraServicePrices.extraBadrum} kr</span>
            </p>
          )}
          {extraToalett === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>ExtraToalett</span>{" "}
              <span>{extraServicePrices.extraToalett} kr</span>
            </p>
          )}
          {inglasadDuschhörna === "Ja" && (
            <p className="flex justify-between text-green-600 font-semibold">
              <span>InglasadDuschhörna</span>{" "}
              <span>{extraServicePrices.inglasadDuschhörna} kr</span>
            </p>
          )}
          {insidanMaskiner === "Ja" && (
            <>
              {diskmaskin && (
                <p className="flex justify-between text-green-600 font-semibold">
                  <span>Diskmaskin</span>
                  <span>{extraServicePrices.diskmaskin} kr</span>
                </p>
              )}
              {tvattmaskin && (
                <p className="flex justify-between text-green-600 font-semibold">
                  <span>Tvättmaskin</span>
                  <span>{extraServicePrices.tvattmaskin} kr</span>
                </p>
              )}
              {torktumlare && (
                <p className="flex justify-between text-green-600 font-semibold">
                  <span>Torktumlare</span>
                  <span>{extraServicePrices.torktumlare} kr</span>
                </p>
              )}
            </>
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
              {!discountApplied && !discountPercentage && (
                <button
                  onClick={handleApplyDiscount}
                  className="px-4 py-3 bg-[#0D3F53] text-white rounded-md hover:bg-[#0A2E3D] transition"
                >
                  Använd
                </button>
              )}
              {discountPercentage > 0 ||
                (discountApplied && (
                  <button
                    onClick={removeDiscount}
                    className="px-4 py-3 bg-red-500 text-white rounded-md hover:bg-red-600 transition"
                  >
                    Ta bort rabatt
                  </button>
                ))}
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
              <span>Totalt</span> <span>{finalTotalPrice.toFixed(2)} kr</span>
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

      {/* vad som ska flyttas  */}
      <h2 className="text-2xl font-bold mb-4 mt-12"> Vad som ska fylttas? </h2>

      {/* Valmöjligheter */}
      <div className="flex flex-col gap-4 mb-6">
        {/* Option 1: Default Selection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="default"
            checked={selectionType === "Typiskt"}
            onChange={() => setSelectionType("Typiskt")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Typiskt för storleken</span>
        </label>

        {/* Option 2: Free Inspection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="inspection"
            checked={selectionType === "Kostnadsfri besiktning"}
            onChange={() => setSelectionType("Kostnadsfri besiktning")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Kostnadsfri besiktning</span>
        </label>

        {/* Option 3: Custom Furniture Selection */}
        <label className="flex items-center gap-2 cursor-pointer">
          <input
            type="radio"
            name="moveType"
            value="custom"
            checked={selectionType === "custom"}
            onChange={() => setSelectionType("custom")}
            className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
          />
          <span>Välj möblerna som ska flyttas</span>
        </label>
      </div>

      {/* Möbler valbara om "Välj möblerna som ska flyttas" är valt */}
      {selectionType === "custom" && (
        <FurnitureSelection
          furnitureCategories={furnitureCategories}
          selectedFurniture={selectedFurniture}
          setSelectedFurniture={setSelectedFurniture}
        />
      )}

      {/* Nyckelöverlämning Section */}
      <h2 className="text-2xl font-bold mb-4 mt-12"> Nyckelöverlämning * </h2>

      <div className="flex flex-col gap-4 mb-6">
        {keyHandlingOptions.map((option) => (
          <label
            key={option}
            className="flex items-center gap-2 cursor-pointer"
          >
            <input
              type="radio"
              name="keyHandling"
              value={option}
              checked={keyHandling === option}
              onChange={(e) => {
                setKeyHandling(e.target.value); // Update state with selected option
                console.log(keyHandling); // Log the selected option
              }}
              className="appearance-none w-5 h-5 border-2 border-[#0D3F53] rounded-full checked:bg-[#0D3F53] checked:border-[#0D3F53] transition-all"
            />
            {option}
          </label>
        ))}
      </div>

      {/* Main Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <BookingForm
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
          selectedPacking={selectedPacking}
          selectedAssembly={selectedAssembly}
          selectedCleaning={selectedCleaning}
          selectedDisposal={selectedDisposal}
          totalPrice={finalTotalPrice}
          basePrice={totalPrice}
          rabattKod={rabattKod}
          rutChecked={rutChecked}
          setRutChecked={setRutChecked}
          selectedFurniture={selectedFurniture}
          furnitureCategories={furnitureCategories}
          packingOption={packingOption}
          discountPercentage={discountPercentage}
          selectionType={selectionType}
          keyHandling={[keyHandling]}
          selectedStorage={selectedStorage}
          storageDate={storageDate}
          cleaningPrice={cleaningPrice}
          packgingPrice={packgingPrice}
          furniturePrice={furniturePrice}
          discountedPrice={discountedPrice}
          persienner={persienner.toString()}
          extraBadrum={extraBadrum}
          extraToalett={extraToalett}
          inglasadDuschhörna={inglasadDuschhörna}
          insidanMaskiner={insidanMaskiner}
          diskmaskin={diskmaskin}
          tvattmaskin={tvattmaskin}
          torktumlare={torktumlare}
        />
      </div>
    </>
  );
};

export default PriceSummary;
