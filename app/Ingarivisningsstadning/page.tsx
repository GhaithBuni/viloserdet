import React from "react";
import { client } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";
type ServiceItem = {
  description: string;
};
type ServiceItem1 = {
  Description: string;
};

const page = async () => {
  const content = await client.fetch(`*[_type == "Ingarivisningsstadning"][0]`);

  return (
    <div>
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.title}
        </h2>

        <section className="space-y-4">
          <p className="text-base md:text-lg">{content?.description}</p>
          <p className="text-base md:text-lg">{content?.description2}</p>
        </section>

        <section className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.IncludedServices?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.IncludedServices?.IncludedServicesList?.map(
              (service: ServiceItem, index: number) => (
                <li key={index}>{service.description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.notIncluded?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.notIncluded?.notIncludedList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Preparations?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-2">
            {content?.Preparations?.PreparationsList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.KeysManagement?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.KeysManagement?.keysManagementList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.homeNotReady?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.homeNotReady?.homeNotReadyList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cancellationAndRebooking?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.cancellationAndRebooking?.CancellationAndRebookingList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.payment?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.payment?.PaymentList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.QualityGuarantee?.title}
          </h3>
          <ul className="list-disc pl-5 text-base md:text-lg space-y-1">
            {content?.QualityGuarantee?.QualityGuaranteeList?.map(
              (service: ServiceItem1, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
          <p className="text-base md:text-lg">{content?.lastRow}</p>
        </section>
      </div>
    </div>
  );
};

export default page;
