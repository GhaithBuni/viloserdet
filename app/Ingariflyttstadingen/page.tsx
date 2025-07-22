import React from "react";
import { client } from "@/sanity/lib/client";
export const dynamic = "force-dynamic";

type ServiceItem = {
  Description: string;
};

const Page = async () => {
  const content = await client.fetch(`*[_type == "Ingariflyttstadingen"][0]`);

  return (
    <div className="bg-white text-gray-800">
      <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-12 mt-20">
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53] mt-4">
          {content?.title}
        </h2>
        <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h2 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {" "}
            Ingår i Flyttstädning
          </h2>

          {content?.IncludedServices?.map(
            (section: { title: string; items: string[] }, index: number) => (
              <div key={index}>
                <h4 className="text-lg md:text-xl font-medium mt-4">
                  {section.title}
                </h4>
                <ul className="list-disc pl-5 space-y-1">
                  {section.items?.map((item: string, idx: number) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
              </div>
            )
          )}
        </div>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Preparations?.title}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {content?.Preparations?.PreparationsList?.map(
              (service: ServiceItem, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cancellationAndRebooking}
          </h3>
          <p className="text-base md:text-lg">
            {content?.cancellationAndRebookingText}
          </p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.keys}
          </h3>
          <p className="text-base md:text-lg">{content?.keysText}</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.notIncluded?.title}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {content?.notIncluded?.notIncludedList?.map(
              (service: ServiceItem, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cantOrder.title}
          </h3>
          <ul className="list-disc pl-5 space-y-2">
            {content?.cantOrder.cantOrderList?.map(
              (service: ServiceItem, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.RightToStopWork}
          </h3>
          <p className="text-base md:text-lg">{content?.RightToStopWorkText}</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Payment}
          </h3>
          <p className="text-base md:text-lg">{content?.PaymentDes}</p>
        </section>

        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.QualityGuarantee}
          </h3>
          <p className="text-base md:text-lg">
            {content?.QualityGuaranteeText}
          </p>
          <h4 className="text-lg font-medium">{content?.terms.title}</h4>
          <ul className="list-disc pl-5 space-y-2">
            {content?.terms?.termsList?.map(
              (service: ServiceItem, index: number) => (
                <li key={index}>{service.Description}</li>
              )
            )}
          </ul>
          <p className="text-base md:text-lg">{content?.terms?.LastRow}</p>
        </section>
      </div>
    </div>
  );
};

export default Page;
