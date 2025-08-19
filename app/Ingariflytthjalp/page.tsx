import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { PortableTextComponents } from "@portabletext/react";

export const dynamic = "force-dynamic";

// reusable types
type PTValue = PortableTextBlock[] | string | null | undefined;

type ServiceItem = {
  description: string;
};

type BeforeMovingItem = {
  Description: string;
};

const ptComponents: PortableTextComponents = {
  block: {
    normal: ({ children }) => (
      <p className="text-base md:text-lg leading-7 whitespace-pre-line">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc pl-5 space-y-1 text-base md:text-lg">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal pl-5 space-y-1 text-base md:text-lg">
        {children}
      </ol>
    ),
  },
  listItem: ({ children }) => <li>{children}</li>,
};

// helper component
const PT: React.FC<{ value: PTValue }> = ({ value }) => {
  if (!value) return null;
  if (Array.isArray(value)) {
    return <PortableText value={value} components={ptComponents} />;
  }
  return (
    <p className="text-base md:text-lg leading-7 whitespace-pre-line">
      {value}
    </p>
  );
};

const Page = async () => {
  const content = await client.fetch(`*[_type == "ingariflytthjalp"][0]`);

  return (
    <div>
      <div className="bg-white text-gray-800">
        <div className="px-4 py-10 md:px-8 lg:px-16 lg:py-20 max-w-screen-xl mx-auto space-y-10 mt-20">
          <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
            {content?.title}
          </h2>

          {/* subtitle now uses PortableText helper */}
          <div className="text-base md:text-lg">
            <PT value={content?.subtitle} />
          </div>

          <div className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.SectionTitle}
            </h3>

            <PortableText
              value={content?.PriceList}
              components={ptComponents}
            />
          </div>
          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.servicesSection?.title}
            </h3>

            <PortableText
              value={content?.servicesSection?.ExtraServicesList}
              components={ptComponents}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.beforetheMoving?.title}
            </h3>

            <PortableText
              value={content?.beforetheMoving?.beforetheMovingList}
              components={ptComponents}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              {content?.duringPacking?.title}
            </h4>

            <PortableText
              value={content?.duringPacking?.duringPackingList}
              components={ptComponents}
            />
          </div>

          <div className="space-y-4">
            <h4 className="text-lg md:text-xl font-medium text-[#0D3F53]">
              {content?.SpecificGuidelines?.title}
            </h4>

            <PortableText
              value={content?.SpecificGuidelines?.SpecificGuidelinesList}
              components={ptComponents}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.cancellationAndRebooking?.title}
            </h3>

            <PortableText
              value={
                content?.cancellationAndRebooking?.CancellationAndRebookingList
              }
              components={ptComponents}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
              {content?.Payment}
            </h3>
            <PortableText
              value={content?.PaymentDes}
              components={ptComponents}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
