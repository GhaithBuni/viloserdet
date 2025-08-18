import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
export const dynamic = "force-dynamic";

const Page = async () => {
  const content = await client.fetch(`*[_type == "ingariflytthjalp"][0]`);

  type ServiceItem = {
    description: string;
  };

  type BeforeMovingItem = {
    Description: string;
  };

  return (
    <div>
      <div className="bg-white text-gray-800">
        <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-10 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
            {content?.title}
          </h2>

          <div className="text-base md:text-lg">
            {content?.subtitle && <PortableText value={content.subtitle} />}
          </div>

          <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.SectionTitle}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.PriceList?.map(
                (PriceList: ServiceItem, index: number) => (
                  <li key={index}>{PriceList.description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.servicesSection?.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.servicesSection?.ExtraServicesList?.map(
                (service: ServiceItem, index: number) => (
                  <li key={index}>{service.description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.beforetheMoving?.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.beforetheMoving?.beforetheMovingList?.map(
                (service: BeforeMovingItem, index: number) => (
                  <li key={index}>{service.Description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              {content?.duringPacking?.title}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.duringPacking?.duringPackingList?.map(
                (service: BeforeMovingItem, index: number) => (
                  <li key={index}>{service.Description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              {content?.SpecificGuidelines?.title}
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.SpecificGuidelines?.SpecificGuidelinesList?.map(
                (service: BeforeMovingItem, index: number) => (
                  <li key={index}>{service.Description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.cancellationAndRebooking?.title}
            </h3>
            <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
              {content?.cancellationAndRebooking?.CancellationAndRebookingList?.map(
                (service: BeforeMovingItem, index: number) => (
                  <li key={index}>{service.Description}</li>
                )
              )}
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.Payment}
            </h3>
            <p className="text-base md:text-lg">{content?.PaymentDes}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
