import React from "react";
import { client } from "@/sanity/lib/client";
import { PortableText } from "@portabletext/react";
import type { PortableTextBlock } from "@portabletext/types";
import type { PortableTextComponents } from "@portabletext/react";

export const dynamic = "force-dynamic";

/** Coerce any value to a PT blocks array (or empty array). */
const asBlocks = (v: unknown): PortableTextBlock[] =>
  Array.isArray(v) ? (v as PortableTextBlock[]) : [];

/** Portable Text renderers (paragraphs + lists). */
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

const Page = async () => {
  const content = await client.fetch(`*[_type == "Ingarivisningsstadning"][0]`);

  return (
    <div>
      <div className="bg-white text-gray-800 px-4 py-10 md:px-8 lg:px-16 lg:py-20 space-y-12 max-w-screen-xl mx-auto mt-20">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0D3F53]">
          {content?.title}
        </h2>

        {/* Description (block) */}
        <section className="space-y-4">
          <PortableText
            value={asBlocks(content?.description)}
            components={ptComponents}
          />
        </section>

        {/* Included Services */}
        <section className="bg-[#FEF4E8] p-4 md:p-6 rounded-md shadow-md space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.IncludedServices?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.IncludedServices?.IncludedServicesList)}
            components={ptComponents}
          />
        </section>

        {/* Not Included */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.notIncluded?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.notIncluded?.notIncludedList)}
            components={ptComponents}
          />
        </section>

        {/* Preparations */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.Preparations?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.Preparations?.PreparationsList)}
            components={ptComponents}
          />
        </section>

        {/* Keys Management */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.KeysManagement?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.KeysManagement?.keysManagementList)}
            components={ptComponents}
          />
        </section>

        {/* Home Not Ready */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.homeNotReady?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.homeNotReady?.homeNotReadyList)}
            components={ptComponents}
          />
        </section>

        {/* Cancellation & Rebooking */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.cancellationAndRebooking?.title}
          </h3>
          <PortableText
            value={asBlocks(
              content?.cancellationAndRebooking?.CancellationAndRebookingList
            )}
            components={ptComponents}
          />
        </section>

        {/* Payment */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.payment?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.payment?.PaymentList)}
            components={ptComponents}
          />
        </section>

        {/* Quality Guarantee */}
        <section className="space-y-4">
          <h3 className="text-xl md:text-2xl font-semibold text-[#0D3F53]">
            {content?.QualityGuarantee?.title}
          </h3>
          <PortableText
            value={asBlocks(content?.QualityGuarantee?.QualityGuaranteeList)}
            components={ptComponents}
          />
        </section>
      </div>
    </div>
  );
};

export default Page;
